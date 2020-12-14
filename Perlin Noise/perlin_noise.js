
let inc=0.06
let scl =10
let cols,rows
let fr
let zoff=0
let particle=[]
let flowfield=[]

    function setup() {
    let cnv = createCanvas(600, 600);

    cnv.position(10, 100);
    pixelDensity(1)
    cols=floor(width/scl)
    rows=floor(height/scl)
    fr=createP('')
    //flowfield=new Array(col * rows)
    for( let i =0; i<800;i++){
        particle[i]= new Particle
    }
    background(220)
    }

    function draw() {
    let xoff=0
    let yoff=0
    
    strokeWeight(1)
    noFill()
    stroke(0,50)
    for (let y=0;y<height;y++){
        xoff=0
        y_pos=y*scl
        for (let x=0;x<width;x++){
            let index=x+y*cols
            x_pos=x*scl    
            let angle =noise(xoff,yoff,zoff)*TWO_PI *3
            xoff+= inc 
            //let  vec=p5.Vector.fromAngle(angle)
            //vec.setMag(1)
            flowfield[index]=angle
            // push()
            // translate(x_pos,y_pos)
            // rotate(vec.heading())
            // line(0,0,scl,0)
            // pop()
            }   
        yoff +=inc
        zoff += .01
    }   
    strokeWeight(3)
    for( let i=0;i<particle.length;i++){    
        particle[i].follow(flowfield)
        particle[i].update()
        particle[i].edges()
        particle[i].show()
    }
    fr.html(floor(frameRate()))
}