
function setup() {
    initializeFields();
    createCanvas(700, 700);
    rectMode(CENTER);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    stroke(55, 170, 199, 4);
    // white stroke circle
    fill(map(mouseY, 0, height, 90, 238), map(mouseY, 0, height, 10, 200), map(mouseY, 0, height, 204, 321), 15);
    stroke(26);
    var e;
    e = map(mouseX, 0, width, 0, -278);
    var f;
    f = map(mouseX, 0, width, 5, 356);
    var g;
    g = map(mouseX, 0, width, 33, 98);
    for (var count = 0; count < 118; count++) {
        rotate(radians(351 / 6));
        ellipse(-82, -187, 33, g);
        ellipse(-79, -54, f, 16);
        ellipse(-79, e, 9, 9);
    }
    // 2  blue ellipse
    fill(91, map(mouseY, 0, height, 80, 130), 224, 50);
    stroke(142, 70, 70, 41);
    var c;
    c = map(mouseX, 0, width, -56, -120);
    var d;
    d = map(mouseX, 0, width, 34, 43);
    for (var count2 = 0; count2 < 30; count2++) {
        rotate(radians(360 / 30));
        ellipse(-118, c, d, 90);
    }
    // 2  blue ellipse
    fill(52, 117, 41, 20);
    stroke(142, 70, 70, 41);
    for (var count3 = 0; count3 < 30; count3++) {
        rotate(radians(360 / -14));
        ellipse(-119, -86, 54, 55);
    }
    // most inner circle
    fill(155, 173, 214, 30);
    for (var count4 = 0; count4 < 2; count4++) {
        for (var j = 0; j < 90; j += 19) {
            ellipse(0, 0, 90 + j, 90 + j);
        }
    }
    var a;
    a = map(mouseX, 0, width, 35, 74);
    var b;
    b = map(mouseX, 0, width, 340, 360);
    // most inner ellipse
    fill(map(mouseY, 0, height, 200, 250), 124, map(mouseY, 0, height, 90, 190), 10);
    stroke(55, 170, 199, 4);
    for (var count5 = 0; count5 < 13; count5++) {
        rotate(radians(b / 11));
        for (var i = 0; i < 6; i++) {
            ellipse(22, a, 50, 90);
        }
    }

}

function initializeFields() {
}

