
var spiral_names = ['i0', 'i1', 'i2', 'i3', 'o0', 'o1', 'o2', 'o3', 'o5']
var bullets = document.getElementsByClassName("bullet");

drawSpirals();


function randomInRange(n, m){
    return n + Math.floor(Math.random() * (m - n));
}


// via https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = randomInRange(0, currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}


function drawSpirals(){
    var spirals = []
    
    for (let name of spiral_names) {
        let img = document.createElement("img");
        img.src = `./stories/spirals/${name}.png`;
        spirals.push(img);
    }

    for (let bullet of bullets) {
        spirals = shuffle(spirals);

        let spiral_count = randomInRange(1, spirals.length);
        for(i=0; i < spiral_count; i++){
            bullet.appendChild(spirals[i].cloneNode())
        }
    }
}
