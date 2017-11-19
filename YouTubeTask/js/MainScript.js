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
let prevX, prevY;
let requestSending = false;
videosDiv.style.left = '0px';

function moveVidDiv(e){
    e.preventDefault();
    if(mouseDown){
        let curX = e.clientX || e['touches'][0]['clientX'];
        let curY = e.clientX || e['touches'][0]['clientY'];
        if(curX > prevX){
            videosDiv.style.left = Math.min(parseInt(videosDiv.style.left) + curX - prevX, 8) + 'px';
        } else {
            videosDiv.style.left = Math.max(parseInt(videosDiv.style.left) + curX - prevX, -360 * (videosDiv.childNodes.length - 1)) + 'px';
        }
    }
    if(!requestSending && videosDiv.childNodes.length * 360 - Math.abs(parseInt(videosDiv.style.left)) - 500 < window.innerWidth){
        sendRequest();
        requestSending = true;
    } 
    prevX = e.clientX || e['touches'][0]['clientX'];
    prevY = e.clientY || e['touches'][0]['clientY'];
}

videosDiv.addEventListener('mousemove', moveVidDiv);

videosDiv.addEventListener('touchmove', moveVidDiv);
function mouseDownFunc(e){
    mouseDown = true;
    prevX = e.clientX || e['touches'][0]['clientX'];
    prevY = e.clientY || e['touches'][0]['clientY'];
}

function mouseUpFunc(){
    mouseDown = false;
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
    videosDiv.style.left = '8px';
    videosDiv.style.width = '0px';
    requestSending = false;
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
        });
        console.log(result);
        if(result.items.length){
            requestSending = false; 
        }  
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
    return clip;
}

function insertVideosFromResponse(statistics){
    for(let i = 0; i < result.items.length; i++){
        let video = createVideo(i, statistics);
        videosDiv.style.width = parseInt(videosDiv.style.width) + 360 + 'px';
        videosDiv.appendChild(video);   
    }
}

