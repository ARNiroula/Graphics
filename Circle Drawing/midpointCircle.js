const center={
    x:300,
    y:300
}


function setup() {
    createCanvas(600, 600)
}

function draw() {
    background('grey ')
    stroke('black')
    strokeWeight(3)
    midpoint(100)
}

function midpoint(rad){
    let x=0
    let y=rad
    let p=1-rad
    circlePlotPoints(x,y)
    while (x<y){
        x++
        if(p<0){
            p +=2*x+1
        }else{
            y--
            p +=2*(x-y)+1
        }
        circlePlotPoints(x,y)
    }
}

function circlePlotPoints(x,y){
    point(center.x+x,center.y+y)
    point(center.x-x,center.y+y)
    point(center.x+x,center.y-y)
    point(center.x-x,center.y-y)
    
    point(center.x+y,center.y+x)
    point(center.x-y,center.y+x)
    point(center.x+y,center.y-x)
    point(center.x-y,center.y-x)

}