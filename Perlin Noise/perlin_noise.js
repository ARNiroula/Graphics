
let cols
let rows
let scale = 10

let increment = 0.1
let currentFrameRate
let zOffset = 0
let particles = []
let flowfield

let sliderR
let sliderG
let sliderB
let sliderFlowFieldSpeed
let sliderMag
let sliderSpeed

let flowfieldVisible = false



function setup() {
	let canvas = createCanvas(800, 600)
	canvas.parent('sketch-holder')
	if (!flowfieldVisible) {
		background(220)
	}
    frameRate(30)
   

    //Sliders to change the behaviour of the flow field
    //createP('Red        Green          Blue').parent('controls')
    sliderR = createSlider(0, 255, 0, 1).parent('controls')
    //createP('Green').parent('controls')
    sliderG = createSlider(0, 255, 0, 1).parent('controls')
    //createP('Blue').parent('controls')
	sliderB = createSlider(0, 255, 0, 1).parent('controls')
	createP('Speed of flowfield change').parent('controls')
	sliderFlowFieldSpeed = createSlider(0.00005, 0.005, 0.0005, 0.00001).parent('controls')
	createP('Magnitude of flowfield vector:').parent('controls')
	sliderMag = createSlider(0.1, 3, 0.7, 0.1).parent('controls')
	createP('Speed of the particles').parent('controls')
	sliderSpeed = createSlider(0.1, 4, 2, 0.1).parent('controls')
	createP('Framerate:').parent('controls')
	currentFrameRate = createP('').parent('controls')
	createP('Press \'s\' to save the image').parent('controls')

	cols = floor(width / scale)
	rows = floor(height / scale)
	flowfield = new Array(cols * rows)

	for (let i = 0; i < 1500; i++) {
		particles[i] = new Particle()
	}

	//Toggle between particles and flowfield when button is clicked
	document.querySelector(".flowfield-button").onclick = () => {
		restartSketch()
        flowfieldVisible = flowfieldVisible ? false : true
        console.log(flowfieldVisible)
	}

	//Restart the sketch
	document.querySelector(".clear-canvas").onclick = () => {
		restartSketch()
    }
    
    createLoop({duration:7, gif:{download:true}})

}


function restartSketch() {
	clear()
    background(220)
	particles = []
	for (let i = 0; i < 1500; i++) {
		particles[i] = new Particle()
	}
}


function draw() {
	if (flowfieldVisible) {
		background(220)
	}
	let yoff = 0
	for (let y = 0; y < rows; y++) {
		let xoff = 0
		for (let x = 0; x < cols; x++) {
			let index = x + y * cols
			let angle = noise(xoff, yoff, zOffset) * TWO_PI * 4
			let vec = p5.Vector.fromAngle(angle)
			vec.setMag(sliderMag.value())
			flowfield[index] = vec
			xoff += increment

			//draw the flowfield depending on whether the button has been clicked
			if (flowfieldVisible) {
                stroke(0, 50)
                strokeWeight(2)
				push()
				translate(x * scale, y * scale)
				rotate(vec.heading())
				strokeWeight(1)
				line(0, 0, scale, 0)
				pop()
			}
		}
		yoff += increment

		zOffset += sliderFlowFieldSpeed.value()
	}

	for (let particle of particles) {
		particle.follow(flowfield)
		particle.update()
		particle.edges()
		particle.show()
	}

	currentFrameRate.html(floor(frameRate()))
}



keyReleased = function () {
	if (key == 's' || key == 'S') {save('myCanvas.jpg')}
}