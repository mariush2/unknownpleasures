let offsetWidth, offsetHeight, lineamount;
let lineSpacing = 15;

function setup() {
	createCanvas(windowWidth, windowHeight);
	lineamount = floor(windowHeight / lineSpacing);
	offsetWidth = floor(windowWidth / 3);
	offsetHeight = floor(windowHeight / 6);
	console.log(windowHeight);
}

function draw() {
	background(10);		
	translate(offsetWidth, offsetHeight);		 
	for(let i = 0; i * lineSpacing < windowHeight - offsetHeight * 2; i++) {
		Line(i * lineSpacing);
	}
}

function Line(y) {
	// Use bezier
	// bezier(firstx, firsty, controlpointx, controlpointy, secondx, secondy)
	stroke(255);
  bezier(0, y, 0, y, windowWidth - offsetWidth * 2, y, windowWidth  - offsetWidth * 2, y); 
}
