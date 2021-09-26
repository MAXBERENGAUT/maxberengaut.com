//FIXME: text flashes on reload sometimes - text does not center when this JS is not included
INFINITE_MENU_JS = document.currentScript;

const updates_per_second = 60;
const menu_speed_max = 20;
const menu_resistance = 10;

var menu = document.getElementById("menu");
var items = document.getElementsByClassName("item");

var mouse_X = document.documentElement.clientWidth / 2;
var menu_hovered_over = false; 
var menu_offset = 0;
var menu_speed = 0;

var update_interval;

updateMenu();

function updateMenu(){
  // if we have moved the menu left s.t. the first element is off-screen
  if (-menu_offset > items.item(0).clientWidth){
    menu_offset += items.item(0).clientWidth;
    menu.appendChild(items.item(0));
  }
  
  // if we have moved the menu right s.t. the last element is off-screen
  else if (menu_offset > 0) {
    menu_offset -= items.item(items.length - 1).clientWidth;
    menu.insertBefore(items.item(items.length - 1), menu.firstChild);
  }

  // adjust speed if mouse hovering
  if (menu_hovered_over){
    let mouse_pos = (2 * mouse_X) / (document.documentElement.clientWidth) - 1;
    let speed = smooth(mouse_pos) * menu_speed_max;
    menu_speed = ((menu_resistance - 1) / menu_resistance) * menu_speed + (1 / menu_resistance) * speed;

  // lower speed if mouse not hovering
  } else {
    menu_speed *= (menu_resistance - 1) / menu_resistance;
    if (Math.abs(menu_speed) < 0.01) {
      menu_speed = 0;
      clearInterval(update_interval);
    }
  }

  // update menu position
  menu_offset -= menu_speed;
  menu.style.transform = "translateX(" + menu_offset + "px)";
}

function smooth(x) {
  return (2 / (1 + Math.exp(-x))) - 1;
}

function setAnimation(node, animationText){
  node.style["-webkit-animation"] = animationText;
  node.style["-moz-animation"] = animationText;
  node.style["-o-animation"] = animationText;
  node.style["-ms-animation"] = animationText;
  node.style["animation"] = animationText;
}

document.addEventListener('mousemove', e => {
  mouse_X = e.clientX;
});

menu.addEventListener('mouseenter', () => {
  console.log("mouseentered");

  menu_hovered_over = true;

  if (menu_speed == 0){
    update_interval = setInterval(updateMenu, 1000 / updates_per_second);
  }
});

menu.addEventListener('mouseleave', () => {
  menu_hovered_over = false;
});

for (let item of items){
  item.addEventListener("click", e => {
    // stop rotation
    clearInterval(update_interval);
    console.log("click!");

    let zoom = e.target.cloneNode(true);
    let rect = e.target.getBoundingClientRect();

    e.target.style.opacity = 0;

    // create zooming text
    zoom.className = "item";
    zoom.style.position = "fixed";
    zoom.style.whiteSpace = "nowrap";
    zoom.style.left = (rect.left + rect.width / 2) + "px";
    zoom.style.top = "50%";
    zoom.style.transform = "translate(-50%, -50%)";
    setAnimation(zoom, "zoom 2s forwards");
    
    // hide items, fade background
    for (let x of items){ setAnimation(x, "fade-out 0.5s forwards"); }
    setAnimation(document.documentElement, "white-out 1.5s forwards");
    
    // redirect post-animation
    zoom.addEventListener("animationend", () => {
      window.location.href = zoom.getAttribute("href");
    });

    document.body.appendChild(zoom);
  });
}