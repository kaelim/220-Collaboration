var dinosaur

function preload() {

    dinosaur = loadAnimation('images/Idle (1).png','images/Idle (2).png','images/Idle (3).png',
                            'images/Idle (4).png', 'images/Idle (5).png', 'images/Idle (6).png',
                            'images/Idle (7).png','images/Idle (8).png','images/Idle (9).png',
                            'images/Idle (10).png');

}

function setup() {
createCanvas(800, 500);



}


function draw() {

    background(200);
    animation(dinosaur, 300, 300);
}