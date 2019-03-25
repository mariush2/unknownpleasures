let offsetWidth, offsetHeight, lineamount;
let lineSpacing = 15;

function setup() {
	createCanvas(windowWidth, windowHeight);
	lineamount = floor(windowHeight / lineSpacing);
	offsetWidth = floor(windowWidth / 3) * 2;
	offsetHeight = floor(windowHeight / 6) * 2;
	frameRate(0.5);
}

function draw() {
	background(15);		
	translate(offsetWidth / 2, offsetHeight / 2);		 
	for(let i = 0; i * lineSpacing < windowHeight - offsetHeight; i++) {
		Line(i * lineSpacing);
	}
}

function Line(y) {
	stroke(255);
	// Create points along the line we are on now, with noise
				let prev = y;
	for (let x = 0; x < windowWidth - offsetWidth; x++) {
		let n;		
		if (x >= (windowWidth - offsetWidth) / 3 && x <= (windowWidth - offsetWidth) - (windowWidth - offsetWidth) / 3) {
			if (x >= (windowWidth - offsetWidth) / 2) {
				n = random(-0.5, sin((x / 16) + random(1, 10))*3) + 0.22;
			} else {
 				n = random(-sin((x / 16) + random(1, 10))*3, 0.5) - 0.22;	
			}
										
		} else {
			n = random(-0.5, 0.5);
		}
		point(x, prev + n);
		prev = prev + n
	}
}
