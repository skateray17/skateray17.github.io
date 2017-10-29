let body = document.getElementById('body');
let div = document.createElement('div');
// let inputVideoName = document.createElement('input');

// inputVideoName.type = 'text';
// inputVideoName.className = 'searchBox';
// div.appendChild(inputVideoName);

// let inputLabel = document.createElement('label');
// let inputButton = document.createElement('input');
// inputButton.type = 'submit';
// inputButton.value = '<i class="material-icons">search</i>';
// inputButton.className = 'searchButton';
// inputButton.addEventListener('click', () => { //TODO
// });
// div.appendChild(inputButton);
div.innerHTML = `
<input type="text" class="searchBox" placeholder = "Your request...">
<button class = "searchButton" onclick = "sendRequest()" search>
    <i class = "material-icons">search</i>
</button>`;

div.className = 'searchBar';
body.appendChild(div);

function init() {
    gapi.client.setApiKey("AIzaSyBEx_BVKa13PtyxxAUC5jj2PCny_B-f5X4");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}

function sendRequest(){
    //alert('Hello, world!');
    console.log(document.getElementsByClassName("searchBox")[0].value);
    var request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: /*encodeURIComponent($("#search").val()).replace(/%20/g, "+")*/ /*"kitty"*/document.getElementsByClassName("searchBox")[0].value,
        maxResults: 3,
        order: "viewCount",
        publishedAfter: "2015-01-01T00:00:00Z"
   }); 
   // execute the request
   request.execute(function(response) {
      var results = response.result;
      console.log(results);
    });
}

let button = document.getElementsByClassName('searchButton')[0];
