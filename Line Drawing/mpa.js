function setup() {
    createCanvas(600, 600);
}

function draw() {
    noLoop();
    background('grey');
    stroke('black');
    MPA({x:0,y:0},{x:600,y:600})
    //line(2,2,80,50)
}


function MPA(startPoint,endPoint){
    let dx = parseFloat(endPoint.x - startPoint.x) 
    let dy = parseFloat(endPoint.y - startPoint.y)
    if (Math.abs(dy) >= Math.abs(dx)){
        greater1(startPoint,endPoint,dx,dy)
        console.log('>1')
    }
    else{
        less1(startPoint,endPoint,dx,dy)
        console.log('<1')
    }
}

function less1(startPoint,endPoint,dx,dy){
    let d=dy-(dx/2)
    console.log(d)
    let x=startPoint.x
    let y=startPoint.y
    point(x,y)
    while (x<endPoint.x){
        x++
        
        if (d<0){
            d +=dy
        }
        else{
            d +=dy-dx
            y++
        }
        point(x,y)
        //console.log(x,y)
    }
}
function greater1(startPoint,endPoint,dx,dy){
    let d=dx-(dy/2)
    console.log(d)
    let x=startPoint.x
    let y=startPoint.y
    point(x,y)
    while (y<endPoint.y){
        y++
        if (d<0){
            d +=dx
        }
        else{
            d +=dx-dy
            x++
        }
        point(x,y)
        //console.log(x,y)
    }
}