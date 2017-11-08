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
        // yt api is ready
    });
}

let mouseDown = false;
let prevX, prevY;
let requestSending = false;
videosDiv.style.left = '0px';


videosDiv.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(mouseDown){
        console.log('ti pidor');
        // if(e.clientX < prevX){
        //     videosDiv.style.left = parseInt(videosDiv.style.left) - 1 + 'px';
        // } else {
        //     if (e.clientX > prevX) {
        //         videosDiv.style.left = parseInt(videosDiv.style.left) + 1 + 'px';
        //     }
        // }
        videosDiv.style.left = Math.min(parseInt(videosDiv.style.left) + e.clientX - prevX, 8) + 'px';
    }
    if(!requestSending && videosDiv.childNodes.length * 360 - Math.abs(parseInt(videosDiv.style.left)) - 500 < window.innerWidth){
        sendRequest();
        requestSending = true;
    } 
    prevX = e.clientX;
    prevY = e.clientY;
});

videosDiv.addEventListener('mousedown', () => {
    mouseDown = true;
});

videosDiv.addEventListener('mouseup', () => {
    mouseDown = false;
});

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
   
    request.execute(function(response) {
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
    });
    requestSending = false;         
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
    <p>${video.snippet.description}</p>
    <a class = "channelName" href = ${"https://www.youtube.com/channel/" + video.snippet.channelId}>
        ${video.snippet.channelTitle}
    </a>
    <p>Publised at ${video.snippet.publishedAt}</p>
    <p>View count: ${stat.items[index].statistics.viewCount}</p>
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

