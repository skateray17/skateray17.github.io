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

function checkButton(e){
    if(e.keyCode === 13){
        searchButtonPressed();
    }
}

function searchButtonPressed(){
    videoName = document.getElementsByClassName("searchBox")[0].value;
    result = undefined;
    videosDiv.innerHTML = '';
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

}

function createVideo(index, stat){
    let clip = document.createElement('div');
    let video = result.items[index];
    clip.className = 'clip';
    clip.innerHTML = `
    <img class = "clipPicture" src = ${video.snippet.thumbnails.medium.url}>
    <a class = "clipRef" href = ${"https://www.youtube.com/embed/" + video.id.videoId}>
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
    videosDiv.appendChild(clip);

}

function insertVideosFromResponse(statistics){
    for(let i = 0; i < result.items.length; i++){
        videosDiv.appendChild(createVideo(i, statistics));        
    }
}

