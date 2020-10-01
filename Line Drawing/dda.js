const startPoint= {
  X: 000,
  Y: 000
}

const endPoint= {
  X: 600,
  Y: 600
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background('grey ');
  stroke('black');
  DDA();
  //line (startPoint.X,startPoint.Y,endPoint.X,endPoint.Y)
}


function DDA(){
  
  let dx = parseFloat(endPoint.X - startPoint.X) 
  let dy = parseFloat(endPoint.Y - startPoint.Y)
  let steps = 0
  
  if(Math.abs(dx) > Math.abs(dy)){
    steps = Math.abs(dx)
  }else{
    steps = Math.abs(dy)
  }
  
  dx= dx/steps
  dy = dy/steps
  
  let x = startPoint.X
  let y = startPoint.Y
  
  for(i=0 ;i<steps;i++){
    point(x,y)
    x = x+ dx
    y= y+dy
  }
}