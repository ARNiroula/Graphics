// let xwmin=300;
// let ywmin=200;
// let xwmax= 600;
// let ywmax=400;


// function setup() {
//     createCanvas(1200, 700)
// }


// function draw(){
//     background('grey ')
//     stroke('black');
//     rect(xwmin,ywmin,(xwmax-xwmin),(ywmax-ywmin));
//     stroke('white')
//     line(50,60,20,800);
//     line(20,50,800,650);
//     line(20,20,601,35);
//     line(500,60,630,500);
//     line(500,60,618,500);
//     stroke('green')
//     clip(50,60,20,800);
//     clip(20,50,800,650);
//     clip(20,20,601,35);
//     clip(500,60,630,500);
//     clip(500,60,618,500);
// }

// function clip(x1,y1,x2,y2){
//     let p = [];
//     let q = [];
//     let r1 = [];
//     let r2 = [];
    
    
//     let flag = true;
//     dx = (x2 -x1);
//     dy = (y2-y1);
//     p[0] = -dx;
//     p[1] = dx;
//     p[2] = -dy;
//     p[3] = dy;
    
//     q[0] = x1 - xwmin;
//     q[1] = xwmax - x1;
//     q[2] = y1 - ywmin;
//     q[3] = ywmax - y1;
    
//     for (i = 0; i < 4; i++) {
//         if (p[i] === 0) {
//             if (q[i] < 0)
//             flag = false;
//         }
//     }
    
//     if (flag == true) {
//         for (i = 0; i < 4; i++) {
//             if (p[i] < 0) {
//             r1.push((q[i] / p[i])); 
//             } else if (p[i] > 0) {
//             r2.push((q[i] / p[i])); 
//             }
//         }
//     }
    
//     u1 = max(r1);
//     u2 = min(r2);
    
//     if(u1<u2){
//         xI = x1 + u1*dx;
//         yI = y1 + u1*dy;
//         xJ = x1 + u2*dx;
//         yJ = y1 + u2*dy
//         stroke('green');
//         line(xI,yI,xJ,yJ); 
//     }
    
// }




const x_max = 500; 
const y_max = 500; 
const x_min = 100; 
const y_min = 150; 

// Defining region codes 
const INSIDE = 0; // 0000 
const LEFT = 1; // 0001 
const RIGHT = 2; // 0010 
const BOTTOM = 4; // 0100 
const TOP = 8; // 1000 

function computeCode(x, y) { 
    // initialized as being inside 
    let code = INSIDE; 
    if (x < x_min) // to the left of rectangle 
        code |= LEFT; 
    else if (x > x_max) // to the right of rectangle 
        code |= RIGHT; 
    if (y < y_min) // below the rectangle 
        code |= BOTTOM; 
    else if (y > y_max) // above the rectangle 
        code |= TOP; 
    return code; 
} 
 

function setup(){
    createCanvas(1200, 700)
}

function draw(){
    background('grey ')
    stroke('black');
    
    rect(x_min,y_min,(x_max-x_min),(y_max-y_min));
    stroke('white')
    line(50,60,20,800);
    line(20,50,800,650);
    line(20,20,601,35);
    line(500,60,630,500);
    line(500,60,618,500);
    stroke('green')
    clip(60,600,20,300);
    clip(20,50,800,650);
    clip(20,20,450,450);
    clip(100,300,630,350);
    clip(500,60,618,500);
}
function clip(x1,y1,x2,y2) { 
    // Compute region codes for P1, P2 
    var code1 = computeCode(x1, y1); 
    var code2 = computeCode(x2, y2); 
  
    // Initialize line as outside the rectangular window 
    var accept = false; 
    while (true) { 
        if ((code1 == 0) && (code2 == 0)) { 
            // If both endpoints lie within rectangle 
            accept = true; 
            break; 
        } 
        else if (code1 & code2) { 
            // If both endpoints are outside rectangle, 
            // in same region 
            break; 
        } 
        else { 
            // Some segment of line lies within the 
            // rectangle 
            var code_out; 
            var x, y; 
  
            // At least one endpoint is outside the 
            // rectangle, pick it. 
            if (code1 != 0) 
                code_out = code1; 
            else
                code_out = code2; 
  
            // Find intersection point; 
            // using formulas y = y1 + slope * (x - x1), 
            // x = x1 + (1 / slope) * (y - y1) 
            if (code_out & TOP) { 
                // point is above the clip rectangle 
                x = x1 + (x2 - x1) * (y_max - y1) / (y2 - y1); 
                y = y_max; 
            } 
            else if (code_out & BOTTOM) { 
                // point is below the rectangle 
                x = x1 + (x2 - x1) * (y_min - y1) / (y2 - y1); 
                y = y_min; 
            } 
            else if (code_out & RIGHT) { 
                // point is to the right of rectangle 
                y = y1 + (y2 - y1) * (x_max - x1) / (x2 - x1); 
                x = x_max; 
            } 
            else if (code_out & LEFT) { 
                // point is to the left of rectangle 
                y = y1 + (y2 - y1) * (x_min - x1) / (x2 - x1); 
                x = x_min; 
            } 
  
            // Now intersection point x, y is found 
            // We replace point outside rectangle 
            // by intersection point 
            if (code_out == code1) { 
                x1 = x; 
                y1 = y; 
                code1 = computeCode(x1, y1); 
                
            } 
            else { 
                x2 = x; 
                y2 = y; 
                code2 = computeCode(x2, y2); 
                
            } 
        } 
    } 
    if (accept) { 
//         Display accepted portion of the line(line clipping)

        stroke(0,0,255);
        line(x1,y1,x2,y2); //Clipped Line

    } 
    else {
//         Rejected line
    } 
} 
