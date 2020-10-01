const startPoint= {
    X: 00,
    Y: 00
}

const endPoint= {
    X: 500,
    Y: 600
}

function setup() {
    createCanvas(600, 600);
}

function draw() {
    noLoop()
    background('grey ');
    stroke('black');
    BLA();
}

function BLA(){
    let dx = parseFloat(endPoint.X - startPoint.X) 
    let dy = parseFloat(endPoint.Y - startPoint.Y)
    
    let xinc=0
    let yinc=0
    //let check=false
    if (Math.abs(dy) >= Math.abs(dx)){
        a=dx
        b=dy
        yinc=1
    }
    else {
        a=dy
        b=dx
        xinc=1
        //check=true
    }
    let p=2*a-b
    let x = startPoint.X
    let y = startPoint.Y
    //console.log(p)
    for (let index = 0; index <b; index++) {
        if(p<0){
            p +=2*a
            x+=xinc
            y+=yinc
            point(x,y)
        }
        else{
            p +=(2*a)-(2*b)
            x+=1
            y+=1
            point(x,y)
        }
        
    }
}