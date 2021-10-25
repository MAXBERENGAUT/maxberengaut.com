var img = document.getElementById("img");
var loc = document.getElementById("location");

function swapImage(){
    if (img.src == 'https://lightroom.adobe.com/v2c/spaces/42df3b4ced584d1ea7b99d0035413610/assets/c5784ee711d64779b806e8fb19e59e04/revisions/025bb3a2709849179a243b0c684b2d3e/renditions/525e20fd8f343a9fab9f23cbca27bf1e'){
        img.src = "https://lightroom.adobe.com/v2c/spaces/42df3b4ced584d1ea7b99d0035413610/assets/b0d9b742a53f4dcf9c1b1a8bc983531d/revisions/3f5fe1e60bc04f32858da9a10fc2ceb7/renditions/2198c3f9ac82e9faa84c8ad05ca1892d";
        loc.textContent = "Washington, D.C.";
    } else {
        img.src = 'https://lightroom.adobe.com/v2c/spaces/42df3b4ced584d1ea7b99d0035413610/assets/c5784ee711d64779b806e8fb19e59e04/revisions/025bb3a2709849179a243b0c684b2d3e/renditions/525e20fd8f343a9fab9f23cbca27bf1e';
        loc.textContent = "Charlottesville, VA";
    }
}