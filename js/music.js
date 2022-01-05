
// OPTIONS

var IMG_URL_BASE = "https://ik.imagekit.io/maxberengaut/Covers/"

//

var list_container = document.getElementById("list_container");

// load songs from json
var songs = getJSON("./json/songs.json")

function generateEntries(){
    for (let i = 0; i < songs.length; i++) {
        let entry = songs[i];
        console.log(entry);
        let styles = entry["styles"];

        let list_item = document.createElement("div");

        // build each entry element
        let divider = document.createElement("hr");

        let rank = document.createElement("h2");
        rank.innerHTML = entry["rank"];
        rank.classList.add("number")
        if ("number" in styles) number.classList.add(styles["number"]);

        let cover = document.createElement("img");
        cover.src = IMG_URL_BASE + (songs.length - i) + ".jpg";
        if ("cover" in styles) cover.classList.add(styles["cover"]);

        let header = document.createElement("h2");
        header.innerHTML = entry["artist"] + ": \"" + entry["title"] + "\" (" + entry["year"] + ")";
        if ("header" in styles) header.classList.add(styles["header"]);

        let write_up = document.createElement("div");
        if (entry["write_up"] != ""){
            write_up.innerHTML = entry["write_up"];
        } else {
            write_up.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida neque sed metus bibendum sagittis. Sed tempus metus ut arcu scelerisque, vitae suscipit mauris suscipit. Morbi eu sapien vel purus blandit vulputate. Sed a ante bibendum, rutrum erat et, tincidunt velit. Donec varius felis magna, sit amet elementum mi consectetur vel. Morbi non ligula ac massa pretium lacinia ac ut felis. Aenean egestas suscipit mi in fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida neque sed metus bibendum sagittis. Sed tempus metus ut arcu scelerisque, vitae suscipit mauris suscipit. Morbi eu sapien vel purus blandit vulputate. Sed a ante bibendum, rutrum erat et, tincidunt velit. Donec varius felis magna, sit amet elementum mi consectetur vel. Morbi non ligula ac massa pretium lacinia ac ut felis."
        }

        if ("write_up" in styles) write_up.classList.add(styles["write_up"]);


        // append entry elements to list item
        list_item.appendChild(divider);
        list_item.appendChild(rank);
        list_item.appendChild(cover);
        list_item.appendChild(header);
        list_item.appendChild(write_up);

        // append list item to list
        list_container.appendChild(list_item);
    }
}

generateEntries();
