// OPTIONS

var IMG_URL_BASE = "https://ik.imagekit.io/maxberengaut/Photos/";
var Q_MAX = 5;

//

var img = document.getElementById("img");
var loc = document.getElementById("location");
var robot = document.getElementById("robot");

// load locations from json
var locations = getJSON("./json/locations.json")
var keys = Object.keys(locations);

var q_index = 0;
var img_queue = [];
var loc_queue = [];

function init(){
    // set up first image
    let index = getRandomInt(keys.length);
    img.src = IMG_URL_BASE + keys[index];
    img.onload = updateQueue;
}

function getJSON(url) {
    let resp  = '' ;
    let xmlHttp = new XMLHttpRequest();

    if(xmlHttp != null)
    {
        xmlHttp.open( "GET", url, false );
        xmlHttp.send( null );
        resp = xmlHttp.responseText;
    }

    return JSON.parse(resp);
}

function swapImage(){
    img.replaceWith(img_queue[q_index]);
    img = img_queue[q_index];
    img.classList.add('img-fade-in');
    loc.textContent = loc_queue[q_index];

    img_queue[q_index] = null;
    loc_queue[q_index] = null;
    q_index += 1;

    updateQueue();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function updateQueue(){
    // return if queue is full
    if (img_queue.length - q_index >= Q_MAX) return;

    let next = new Image();
    next.onload = updateQueue;
    let index = getRandomInt(keys.length);

    next.src = IMG_URL_BASE + keys[index];

    img_queue.push(next);
    loc_queue.push(locations[keys[index]]);
}

robot.addEventListener("mouseover", e => {
    robot.src = "./res/robot_hover.png";
});

robot.addEventListener("mouseleave", e => {
    robot.src = "./res/robot_neutral.png";
});

robot.addEventListener("click", e => {
    robot.src = "./res/robot_clicked.png";
    swapImage();
});

init();