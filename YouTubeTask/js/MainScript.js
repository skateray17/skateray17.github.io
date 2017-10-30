const body = document.getElementById('body');
const searchBarDiv = document.createElement('div');
let videoName;
let result;

searchBarDiv.innerHTML = `
<input type="text" class="searchBox" placeholder = "Your request...">
<button class = "searchButton" onclick = "searchButtonPressed()" search>
    <i class = "material-icons">search</i>
</button>`;

searchBarDiv.className = 'searchBar';

searchBarDiv.addEventListener('keypress', checkButton);
body.appendChild(searchBarDiv);

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

   //console.log(request);
   
   request.execute(function(response) {
      result = response.result;
      console.log(result);
    });

}

let button = document.getElementsByClassName('searchButton')[0];
