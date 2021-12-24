// OPTIONS

var IMG_URL_BASE = "https://ik.imagekit.io/maxberengaut/Photos/";
var MAX_QUEUE_SIZE = 5;

//

var img = document.getElementById("img");
var robot = document.getElementById("robot");
var form = document.getElementById("form");
var loc = document.getElementById("location");

var robot_hovered = false;
var robot_clicked = false;

// load locations from json
var locations = getJSON("./json/locations.json")
var keys = shuffle(Object.keys(locations));

var queue_index = 0;
var images_loaded = 0;
var img_queue = [];
var loc_queue = [];


function init(){
    // set up first image
    let key = keys.pop();
    img.src = IMG_URL_BASE + key;

    img.onload = e => {
        imgOnLoad();

        // load other robot faces
        var robot_faces = [new Image(), new Image()];
        robot_faces[0].src = "./res/robot_hovered.png"
        robot_faces[1].src = "./res/robot_clicked.png"
    }
}

// via https://stackoverflow.com/questions/19440589/parsing-json-data-from-a-url
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

// via https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function swapImage(){
    img.replaceWith(img_queue[queue_index]);
    img = img_queue[queue_index];
    img.classList.add('img-fade-in');
    loc.textContent = loc_queue[queue_index];

    img_queue[queue_index] = null;
    loc_queue[queue_index] = null;
    queue_index += 1;
    images_loaded -= 1;
}

function queueNextImage(){
    // return if queue is full or no more images
    if (img_queue.length - queue_index >= MAX_QUEUE_SIZE || keys.length == 0) return;

    let next = new Image();
    next.onload = imgOnLoad;
    let key = keys.pop();

    next.src = IMG_URL_BASE + key;

    img_queue.push(next);
    loc_queue.push(locations[key]);
}

function imgOnLoad(){
    images_loaded += 1;
    queueNextImage();
}

function easterEgg(){
    // TODO: replace robot with phone number entry box
    robot.style.display = "none";
    form.style.display = "flex";

}

function updateRobot(){
    if (images_loaded > 0){
        robot_clicked = false;
        robot.style.cursor = "pointer";

        robot.src = robot_hovered ? "./res/robot_hovered.png" : "./res/robot_neutral.png";

    } else {
        // check again in 0.1s
        setTimeout(updateRobot, 100);
    }
}

robot.addEventListener("mouseover", e => {
    robot_hovered = true;
    if (!robot_clicked) 
        robot.src = "./res/robot_hovered.png";
});

robot.addEventListener("mouseleave", e => {
    robot_hovered = false;
    if (!robot_clicked)
        robot.src = "./res/robot_neutral.png";
});

robot.addEventListener("click", e => {
    // return if next image is not ready
    if(robot_clicked) return;

    // reflect click in robot
    robot_clicked = true;
    robot.style.cursor = "progress";
    robot.src = "./res/robot_clicked.png";
    
    if(keys.length == 0 && queue_index == img_queue.length){
        easterEgg();
    } else {
        // evil timeout hack to get robot to load first
        setTimeout(() => {
            swapImage();
            queueNextImage();
        }, 0);
        // check to reset cursor and robot
        setTimeout(updateRobot, 1000);
    }
});

init();