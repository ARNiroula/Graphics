
let terrainValue=[]
let mult=30
let polygons=500
let inc=0.1

function setup(){
    createCanvas(600, 600,WEBGL);
    angleMode(DEGREES)
    let xoff=0
    let yoff=10
    for (let y=0;y<polygons;y++){
        terrainValue.push([])
        xoff=0
        for (let x=0;x<polygons;x++){
            terrainValue[y][x]=map(noise(xoff,yoff),0,1,-mult,mult)
            xoff += inc
        }
        yoff += inc*3

    }
}

function draw(){
    background(0)
    stroke(255)
    noFill()
    rotateX(60)
    translate(-width,-height)
    for (let y=0;y<polygons;y++){
        beginShape(TRIANGLE_STRIP)
        for (let x=0;x<polygons;x++){
            vertex(x *10 ,y*10,terrainValue[x][y])
            vertex (x*10,(y+1)*10,terrainValue[x][y])

        }
        endShape()
    }
}