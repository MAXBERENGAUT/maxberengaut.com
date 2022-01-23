
// OPTIONS

const updates_per_second = 60;

var IMG_URL_BASE = "https://ik.imagekit.io/maxberengaut/Covers/"

//

var list_container = document.getElementById("list_container");
var navigation = document.getElementById("navigation");
var marker = document.getElementById("marker");
var playlists = document.getElementById("playlists");
var playlists_trigger = document.getElementById("playlists-trigger");

// load songs from json
var songs = getJSON("./json/songs.json")

generateEntries();
initMarker();
initPlaylists();

function generateEntries(){
    for (let i = 0; i < songs.length; i++) {
        let entry = songs[i];
        let styles = entry["styles"];

        let list_item = document.createElement("div");

        // build each entry element
        let divider = document.createElement("hr");

        let rank = document.createElement("h2");
        rank.innerHTML = entry["rank"];
        rank.id = songs.length - i;
        rank.classList.add("number")

        let cover = document.createElement("img");
        cover.src = IMG_URL_BASE + (songs.length - i) + ".jpg";

        let header = document.createElement("h2");
        header.innerHTML = entry["artist"] + ": \"" + entry["title"] + "\" (" + entry["year"] + ")";

        let write_up = document.createElement("div");
        if (entry["write_up"] != ""){
            write_up.innerHTML = entry["write_up"];
        } else {
            write_up.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida neque sed metus bibendum sagittis. Sed tempus metus ut arcu scelerisque, vitae suscipit mauris suscipit. Morbi eu sapien vel purus blandit vulputate. Sed a ante bibendum, rutrum erat et, tincidunt velit. Donec varius felis magna, sit amet elementum mi consectetur vel. Morbi non ligula ac massa pretium lacinia ac ut felis."
        }

        let lyric = document.createElement("div");
        if(entry["lyric"] != "") {
            lyric.innerHTML = '"' + entry["lyric"] + '"';
        }
        lyric.classList.add("lyric");
        
        for (let style in styles){
            switch (style) {
                case "number":
                    rank.classList.add(styles[style]);
                    break;
                case "cover":
                    cover.classList.add(styles[style]);
                    break;
                case "header":
                    header.classList.add(styles[style]);
                    break;
                case "write_up":
                    write_up.classList.add(styles[style]);
                    break;
                case "lyric":
                    lyric.classList.add(styles[style]);
            }
        }

        // append entry elements to list item
        list_item.appendChild(divider);
        list_item.appendChild(rank);
        list_item.appendChild(cover);
        list_item.appendChild(header);
        list_item.appendChild(write_up);
        list_item.appendChild(lyric);

        // append list item to list
        list_container.appendChild(list_item);
    }
}

function initMarker(){
    marker.style.left = (navigation.getBoundingClientRect().right + 2 * marker.getBoundingClientRect().width) + "px";
    setInterval(updateMarker, 1000 / updates_per_second);
}

function updateMarker(){
    let position = (document.documentElement.scrollTop / document.documentElement.scrollHeight) * navigation.getBoundingClientRect().height + navigation.getBoundingClientRect().top;
    marker.style.top = position + "px";
}

function initPlaylists(){
    hidePlaylists();

    playlists_trigger.addEventListener("mouseenter", showPlaylists);
    playlists.addEventListener("mouseleave", hidePlaylists);
}

function hidePlaylists(){
    playlists.childNodes.forEach((e, i) => {
        if (e.nodeName.toLowerCase() == 'a' && e != playlists_trigger)
            e.style.display = "none";
    });
}

function showPlaylists(){
    playlists.childNodes.forEach((e, i) => {
        if (e.nodeName.toLowerCase() == 'a')
            e.style.display = "block";
    })
}