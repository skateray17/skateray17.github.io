function randomColor(){
    return 'rgb(' + r() + ','+r()+','+r()+')';
}

function r() {
    return Math.floor(Math.random()*255) + 1;
}

var line = document.createElement('div');
line.style.width = '100%';
line.style.height = '800px';
line.style.border = '1px solid black';
line.style.position = 'relative';
line.style.backgroundImage = 'url("https://acegif.com/wp-content/gifs/rainbow-frog-17.gif")';
line.style.backgroundSize = 'auto 100%'
line.style.backgroundRepeat = 'no-repeat';
line.style.backgroundPosition = 'center';
line.addEventListener('click', createKEK);
document.getElementsByTagName('body')[0].appendChild(line);
setInterval(function() {
    line.style.backgroundColor = randomColor();
}, 100);

function createKEK(){
    var h6 = document.createElement('h6');
    h6.style.fontSize = '20px';
    h6.innerHTML = 'KEK';
    h6.style.display = 'inline-block';
    h6.style.color = randomColor();
    h6.style.position = 'absolute';
    h6.style.left = Math.floor(Math.random()*95)+'%';
    h6.style.top = Math.floor(Math.random() *92)+'%';
    line.appendChild(h6);
}
