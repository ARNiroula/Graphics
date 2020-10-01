const center={
    x:00,
    y:00
}

const rad={
    x:8,
    y:6
}

function setup() {
    createCanvas(600, 600)
}

function draw() {
    noLoop()
    background('grey ')
    stroke('black')
    strokeWeight(3)
    translate(20,20)
    midPointEllipse()
    ellipse(00,00,16,12)
}

function midPointEllipse(){
    console.log("Region 1")
    //region 1
    let y=rad.y
    //let x=0
    let p=rad.y**2-(rad.x**2)*rad.y+.25*rad.x**2 // Initial Decision Parameter
    var last_x = 0
    var last_y = 0
    for (x = 0; x <= ((y*rad.x**2) / (rad.y**2)); x++) {
        plotRegion(x,y)
        console.log(x,y)
        if (p >= 0) {
        y = y-1
        p += 2*(x+1)*(rad.y**2) + rad.y**2 - 2*y*(rad.x**2)
        last_x = x
        last_y = y
    }
    else {
        y = y
        p += 2*(x+1)*(rad.y**2) + rad.y**2
        last_x = x
        last_y = y
    }
    }
    
    //Region 2
    console.log("Region 2")

    x = last_x
    y = last_y
    d = (rad.y**2)*(x + 0.5)**2 + (rad.x**2)*(y - 1)**2 - (rad.x**2)*(rad.y**2)
    while (y >= 0) {
        
        plotRegion(x,y)
        console.log(x,y)
        if (d > 0) {
            x = x
            d = d - 2*(y-1)*(rad.x**2) + (rad.x**2)
        }
        else {
            x++
            d = d + 2*(rad.y**2)*x- 2*(y-1)*(rad.x**2) + (rad.x**2)
        }
        y--
    }  
}



function plotRegion(x,y){
    point(center.x + x, center.y +y );
    point(center.x - x,center.y - y);
    point(center.x + x,center.y - y);
    point(center.x - x,center.y + y);
}

