let y=20
let x=10
const dy=10
const dx=8
let a=0
let b=0
let check=false
let xinc=0
let yinc=0
console.log(x,y)
if (dy>=dx){
    a=dx
    b=dy
    yinc=1
}
else {
    a=dy
    b=dx
    xinc=1
    check=true
}
let p=2*a-b
console.log(p)
for (let index = 0; index <b; index++) {
    if(p<0){
        
        p +=2*a
        
        x+=xinc
        y+=yinc
        console.log(x,y)
        
        //console.log(p)
    }
    else{
        p +=(2*a)-(2*b)
        x+=1
        y+=1
        console.log(x,y)
    }
    //console.log(p)
}
console.log(p)
 