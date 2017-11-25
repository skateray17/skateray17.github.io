const body = document.getElementById('body');
const searchBarDiv = document.createElement('div');
let videoName;
let result;
let videosDiv = document.createElement('div');

videosDiv.className = 'videosDiv';

searchBarDiv.innerHTML = `
<input type="text" class="searchBox" placeholder = "Your request...">
<button class = "searchButton" onclick = "searchButtonPressed()" search>
    <i class = "material-icons">search</i>
</button>`;

searchBarDiv.className = 'searchBar';

searchBarDiv.addEventListener('keypress', checkButton);
body.appendChild(searchBarDiv);
body.appendChild(videosDiv);

function init() {
    gapi.client.setApiKey("AIzaSyBEx_BVKa13PtyxxAUC5jj2PCny_B-f5X4");
    gapi.client.load("youtube", "v3", function() {
    });
}

let mouseDown = false;
let prevX;
let startX;
let requestSending = false;
let block = false;
let currentPage;

videosDiv.style.left = '0px';

function moveVidDiv(e){
    e.preventDefault();
    if(mouseDown){
        let curX = e.clientX || (e.clientX === 0 ? 0 : e['touches'][0]['clientX']);
        if(curX > prevX){
            videosDiv.style.left = Math.min(parseInt(videosDiv.style.left) + curX - prevX, 0) + 'px';
        } else {
            videosDiv.style.left = Math.max(parseInt(videosDiv.style.left) + curX - prevX,
                -(videosDiv.childNodes[0].offsetWidth + 2 * parseFloat(videosDiv.childNodes[0].style.marginLeft)) * (videosDiv.childNodes.length - 1)) + 'px';
        }
    
        if(!requestSending && videosDiv.childNodes.length * (videosDiv.childNodes[0].offsetWidth + 2 * parseFloat(videosDiv.childNodes[0].style.marginLeft)) - 
                                Math.abs(parseInt(videosDiv.style.left)) < 2 * window.innerWidth){
            requestSending = true;
            sendRequest();
        } 
        prevX = curX;
    }
}

videosDiv.addEventListener('mousemove', moveVidDiv);

videosDiv.addEventListener('touchmove', moveVidDiv);

function mouseDownFunc(e){
    if(block){
        return;
    }
    mouseDown = true;
    startX = prevX = e.clientX || e['touches'][0]['clientX'];
}

function mouseUpFunc(){
    if(!mouseDown){
        return;
    }
    mouseDown = false;
    block = true;
    videosDiv.style.transitionDuration = '1s';
    if(Math.abs(prevX - startX) > window.innerWidth / 4){
        if(prevX > startX){
            if(currentPage < 0){
                videosDiv.style.left = window.innerWidth * ++currentPage + 'px';
            } else {
                videosDiv.style.left = window.innerWidth * currentPage + 'px';                
            }
        } else {
            videosDiv.style.left = window.innerWidth * --currentPage + 'px';            
        }
    } else {
        videosDiv.style.left = window.innerWidth * currentPage + 'px';
    }
    setTimeout(() => {
        videosDiv.style.transitionDuration = '0s';
        block = false;
    }, 1000)
}

videosDiv.addEventListener('mousedown', mouseDownFunc);

videosDiv.addEventListener('touchstart', mouseDownFunc)

videosDiv.addEventListener('mouseup', mouseUpFunc);

videosDiv.addEventListener('touchend', mouseUpFunc);

//videosDiv.addEventListener('mouseout', mouseUpFunc);

function checkButton(e){
    if(e.keyCode === 13){
        searchButtonPressed();
    }
}

function searchButtonPressed(){
    videoName = document.getElementsByClassName("searchBox")[0].value;
    result = undefined;
    videosDiv.innerHTML = '';
    videosDiv.style.left = '0px';
    videosDiv.style.width = '0px'
    currentPage = 0;
    requestSending = true;
    sendRequest();
}

function sendRequest(){
    let request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: videoName,
        maxResults: 15,
        pageToken: result ? result.nextPageToken : undefined,
        order: "viewCount",
    });
   
    request.execute((response) => {
        result = response.result;
        let tmp = '';
        result.items.forEach((element) => {
            tmp += element.id.videoId + ',';
        });
        let request_stat = gapi.client.youtube.videos.list({ 
            id: tmp, 
            part: 'statistics', 
        });
          
        request_stat.execute((responce_stat)=>{ 
            console.log(responce_stat.result);  
            let statistics = responce_stat.result;
            insertVideosFromResponse(statistics);  
            if(result.items.length){
                requestSending = false; 
            }
            console.log(result);
        });
    });      
}

function createVideo(index, stat){
    let clip = document.createElement('div');
    let video = result.items[index];
    clip.className = 'clip';
    clip.innerHTML = `
    <img class = "clipPicture" src = ${video.snippet.thumbnails.medium.url}>
    <a class = "clipRef" href = ${"https://www.youtube.com/watch?v=" + video.id.videoId}>
        ${video.snippet.title}
    </a>
    <a class = "channelName" href = ${"https://www.youtube.com/channel/" + video.snippet.channelId}>
        <div class = "personIcon">
            <i class = "material-icons">person</i>
        </div>
        <div class = "usefullText">
            ${video.snippet.channelTitle}
        </div>
    </a>
    <div>
        <div class = "personIcon">
            <i class = "material-icons">today</i>
        </div> 
        <div class = "usefullText">
            ${video.snippet.publishedAt.substr(0, 10)}
        </div>
    </div>
    <div>
        <div class = "personIcon">
            <i class = "material-icons">visibility</i>
        </div> 
        <div class = "usefullText">
            ${stat.items[index].statistics.viewCount}
        </div>
    </div>
    <p>${video.snippet.description}</p>
    `;
    clip.style.width = width + 'px';
    clip.style.marginLeft = clip.style.marginRight = (window.innerWidth / Math.floor(window.innerWidth / 
        (parseInt(clip.style.width) + 20)) - parseInt(clip.style.width)) / 2 + 'px';
    return clip;
}

function insertVideosFromResponse(statistics){
    videosDiv.style.width = parseFloat(videosDiv.style.width) + result.items.length * (width + 2 * parseFloat(marg)) + 'px';
    for(let i = 0; i < result.items.length; i++){
        let video = createVideo(i, statistics);
        videosDiv.appendChild(video);   
    }
}

let width = Math.min(320, videosDiv.offsetHeight * 0.64);
let vidsOnPage = Math.floor(window.innerWidth / (width + 20));
let marg = (window.innerWidth / vidsOnPage - width) / 2 + 'px';

body.onresize = () => {
    if(videosDiv.childNodes.length){
        width = Math.min(320, videosDiv.offsetHeight * 0.64);
        if(vidsOnPage !== Math.floor(window.innerWidth / (width + 20))){
            currentPage = -Math.floor((-currentPage * vidsOnPage) / Math.floor(window.innerWidth / (width + 20)))
            vidsOnPage = Math.floor(window.innerWidth / (width + 20));
        }
        videosDiv.style.left = window.innerWidth * currentPage + 'px';         
        marg = (window.innerWidth / vidsOnPage - width) / 2 + 'px';
        videosDiv.style.width = (width + 2 * parseFloat(marg)) * videosDiv.childNodes.length + 'px';
        videosDiv.childNodes.forEach((node) => {
           node.style.width =  width + 'px';
           node.style.marginLeft = node.style.marginRight = marg;
        });
    }
}