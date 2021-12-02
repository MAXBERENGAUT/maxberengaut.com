var img = document.getElementById("img");
var loc = document.getElementById("location");
var robot = document.getElementById("robot");

var IMG_URL_BASE = "https://ik.imagekit.io/maxberengaut/Photos/"

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function swapImage(){
    // update robot
    robot.src = "./res/robot_clicked.png";

    // change image
    let keys = Object.keys(locations);
    let index = getRandomInt(keys.length);
    img.src = IMG_URL_BASE + keys[index];
    loc.textContent = locations[keys[index]];
}

robot.addEventListener("mouseover", e => {
    robot.src = "./res/robot_hover.png";
});

robot.addEventListener("mouseleave", e => {
    robot.src = "./res/robot_neutral.png";
});

var locations = {
    1   : "Washington D.C.",
    2   : "Washington D.C.",
    3   : "Washington D.C.",
    4   : "Washington D.C.",
    5   : "Washington D.C.",
    6   : "Washington D.C.",
    7   : "Washington D.C.",
    8   : "Washington D.C.",
    9   : "Washington D.C.",
    10  : "Washington D.C.",
    11  : "Washington D.C.",
    12  : "Washington D.C.",
    13  : "Washington D.C.",
    14  : "Washington D.C.",
    15  : "Washington D.C.",
    16  : "Washington D.C.",
    17  : "Washington D.C.",
    18  : "Washington D.C.",
    19  : "Washington D.C.",
    20  : "Washington D.C.",
    21  : "Washington D.C.",
    22  : "Washington D.C.",
    23  : "Washington D.C.",
    24  : "Washington D.C.",
    25  : "Washington D.C.",
    26  : "Charlottesville, VA",
    27  : "Charlottesville, VA",
    28  : "Charlottesville, VA",
    29  : "Charlottesville, VA",
    30  : "Charlottesville, VA",
    31  : "Charlottesville, VA",
    32  : "Charlottesville, VA",
    33  : "Charlottesville, VA",
    34  : "Charlottesville, VA",
    35  : "Charlottesville, VA",
    36  : "Charlottesville, VA",
    37  : "Washington D.C.",
    38  : "Washington D.C.",
    39  : "Washington D.C.",
    40  : "Washington D.C.",
    41  : "Charlottesville, VA",
    42  : "Charlottesville, VA",
    43  : "Charlottesville, VA",
    44  : "Charlottesville, VA",
    45  : "Charlottesville, VA",
    46  : "Charlottesville, VA",
    47  : "Charlottesville, VA",
    48  : "Charlottesville, VA",
    49  : "Charlottesville, VA",
    50  : "Charlottesville, VA",
    51  : "Charlottesville, VA",
    52  : "Charlottesville, VA",
    53  : "Charlottesville, VA",
    54  : "Charlottesville, VA",
    55  : "Charlottesville, VA",
    56  : "Charlottesville, VA",
    57  : "Charlottesville, VA",
    58  : "Charlottesville, VA",
    59  : "Charlottesville, VA",
    60  : "Charlottesville, VA",
    61  : "Charlottesville, VA",
    62  : "Washington D.C.",
    63  : "Washington D.C.",
    64  : "Washington D.C.",
    65  : "Washington D.C.",
    66  : "Washington D.C.",
    67  : "Washington D.C.",
    68  : "Washington D.C.",
    69  : "Washington D.C.",
    70  : "Washington D.C.",
    71  : "Washington D.C.",
    72  : "Washington D.C.",
    73  : "Washington D.C.",
    74  : "Washington D.C.",
    75  : "Washington D.C.",
    76  : "Washington D.C.",
    77  : "Washington D.C.",
    78  : "Washington D.C.",
    79  : "Washington D.C.",
    80  : "Valencia, ES",
    81  : "Valencia, ES",
    82  : "Valencia, ES",
    83  : "Valencia, ES",
    84  : "Valencia, ES",
    85  : "Valencia, ES",
    86  : "Valencia, ES",
    87  : "Valencia, ES",
    88  : "Valencia, ES",
    89  : "Valencia, ES",
    90  : "Valencia, ES",
    91  : "Valencia, ES",
    92  : "Valencia, ES",
    93  : "Valencia, ES",
    94  : "Valencia, ES",
    95  : "Valencia, ES",
    96  : "Valencia, ES",
    97  : "Valencia, ES",
    98  : "Valencia, ES",
    99  : "Valencia, ES",
    100 : "Valencia, ES",
    101 : "Valencia, ES",
    102 : "Valencia, ES",
    103 : "Valencia, ES",
    104 : "Valencia, ES",
    105 : "Valencia, ES",
    106 : "Valencia, ES",
    107 : "Valencia, ES",
    108 : "Charlottesville, VA",
    109 : "Charlottesville, VA",
    110 : "Charlottesville, VA",
    111 : "Charlottesville, VA",
    112 : "Charlottesville, VA",
    113 : "Charlottesville, VA",
}

swapImage();
