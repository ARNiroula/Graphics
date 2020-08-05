
function CanvasSize() {
  console.log(windowWidth, windowHeight, width, height)
} 


function setup() {
  createCanvas(800, 800);
  CanvasSize()
  angleMode(DEGREES)
}

function draw() {
  //background('grey')
  outerShape()
  insideShape()
  sun()
  moon()
}

function outerShape(){
  fill('#00008B	')
  noStroke()
  triangle(10,83,350,297,10,297)
  triangle(10,175,345,510,10,510)
  // rect(108,287,222,10)
}

function insideShape(){
  // line(20,500,320,500)
  // line(20,100,20,500)
  // translate(320,500)
  // rotate(-45)
  // line(0,0,0,-300)
  // rotate(45)
  // translate(-320,-500)
  // line(107,287,320,287)
  // line(320,287,20,100)
  fill('#DC143C')
  
  triangle(20,100,320,287,20,287)
  triangle(20,200,320,500,20,500)
  
}

function moon(){
  // noStroke()
  // stroke('black')
  // line(95,500,95,147)
  // line(20,193,169,193)
  // line(20,193,320,287)
  // line(20,216,205,216)
  arc(95,217,114,114,0,180)
  fill('#DC143C')
  arc(95,193,123,123,22,158)
  fill('white')
  arc(95,270,80,80,-145,-35)
  //arc(95,246,60,60,-180,0)
  arc(94,246,58,58,-180,0)
  let x=94
  let y=246
  translate(x,y) 
  scale(.65)
  rotate(10)
  triangle(68-x,246-y,95-x,182-y,118-x,246-y)
  for (let i=0;i<4;i++){
    rotate(20)
    triangle(68-x,246-y,95-x,182-y,118-x,246-y)
  }
  rotate(-85)
  rotate(-16)
  triangle(68-x,246-y,95-x,182-y,118-x,246-y)
  for (let i=0;i<4;i++){
    rotate(-20)
    triangle(68-x,246-y,95-x,182-y,118-x,246-y)
  }
  rotate(88)
  //fill('black')
  //triangle(107,220,121,214,115,225)
}

function sun(){
  //stroke('black')
  // line(95,500,95,147)
  // line(20,394,213,394)
  fill('white')
  //circle(94,395,126)
  sunTriangle()
  circle(94,395,80)
  //translate(94,395)

}

function sunTriangle(){
  //translate(94,395)
  let x=94
  let y=395
  //triangle(68,395,95,331,118,395)
  translate(x,y)
  triangle(68-x,395-y,95-x,331-y,118-x,395-y)
  for (let i=0;i<12;i++){
    rotate(30)
    triangle(68-x,395-y,95-x,332-y,118-x,395-y)
  }
  translate(-x,-y)
  // fill('blue')
  // arc(94,395,80,80,-105,-75)
}

function mouseClicked() {
  console.log(mouseX,mouseY)
  //console.log(int(dist(93,217,66,246)))
}


//https://meet.google.com/uys-iexm-qpn?authuser=0