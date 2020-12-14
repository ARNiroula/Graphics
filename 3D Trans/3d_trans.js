const t={
    x:100,
    y:100,
    z:10
}


function setup() {
    createCanvas(600,600, WEBGL);
}

function draw() {
    background('white');
    stroke('white');
    fill('green');
    push();
    let sx = 2;
    let sy = 2;
    let sz=2
    box(70, 70, 70);
    // Rotation
    translate(-130,-130)
    applyMatrix( sx, 0, 0,  0.0,
        0,sy,0,0,
        0.0,0.0,sz,0.0,
        0.0, 0.0, 0.0,  1.0);

    stroke('white');
    fill('pink');
    box(70, 70, 70);
    pop();
    noFill();
    stroke(255);
}


