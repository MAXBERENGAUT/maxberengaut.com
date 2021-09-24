//FIXME: text flashes on reload sometimes - text does not center when this JS is not included

const updates_per_second = 60;
const menu_speed_max = 20;
const menu_resistance = 10;

document.onmousemove = updateMouseX;

var menu = document.getElementById("menu");
var items = document.getElementsByClassName("item");

var mouse_X = document.documentElement.clientWidth / 2;
var menu_hovered_over = false; 
var menu_offset = 0;
var menu_speed = 0;

var update_interval;

updateMenu();

function updateMenu(){

  if (menu_hovered_over){
    var mouse_pos = (2 * mouse_X) / (document.documentElement.clientWidth) - 1;
    var speed = smooth(mouse_pos) * menu_speed_max;
    menu_speed = ((menu_resistance - 1) / menu_resistance) * menu_speed + (1 / menu_resistance) * speed;

  } else {
    menu_speed *= (menu_resistance - 1) / menu_resistance;
    if (Math.abs(menu_speed) < 0.01) {
      menu_speed = 0;
      clearInterval(update_interval);
    }
  }

  menu_offset -= menu_speed;

  menu.style.transform = "translateX(" + menu_offset + "px)";

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
  
  menu.style.transform = "translateX(" + menu_offset + "px)";
}

function smooth(x) {
  return (2 / (1 + Math.exp(-x))) - 1;
}

function updateMouseX(e){
  mouse_X = e.clientX;
}

menu.addEventListener('mouseenter', e => {
  menu_hovered_over = true;

  if (menu_speed == 0){
    update_interval = setInterval(updateMenu, 1000 / updates_per_second);
  }
})

menu.addEventListener('mouseleave', e => {
  menu_hovered_over = false;
})