import styles from "./Music.module.css";

export function setup() {

    // OPTIONS

    const updates_per_second = 60;

    //

    // var list_container = document.getElementById("list_container");
    var navigation = document.getElementById(styles.navigation);
    var marker = document.getElementById(styles.marker);

    // generateEntries();
    initMarker();

    function initMarker(){
        marker.style.left = (navigation.getBoundingClientRect().right + 2 * marker.getBoundingClientRect().width) + "px";
        marker.style.visibility = "visible";
        setInterval(updateMarker, 1000 / updates_per_second);
    }

    function updateMarker(){
        let position = (document.documentElement.scrollTop / document.documentElement.scrollHeight) * navigation.getBoundingClientRect().height + navigation.getBoundingClientRect().top;
        marker.style.top = position + "px";
    }
}