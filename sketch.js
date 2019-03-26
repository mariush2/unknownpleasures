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
	let middlewidth = ((windowWidth - offsetWidth) - (windowWidth - offsetWidth) / 3) - ((windowWidth - offsetWidth) / 3);
	let amountofpeaks = floor(random(0, 2));
	let reachedTop = false;
	let reachedBot = false
	let incline = -(middlewidth / (amountofpeaks * 100)) * random(0.25, 1.25);
	let top = y - random(10, 80);
	for (let x = 0; x < windowWidth - offsetWidth; x++) {
		let n;		
		if (x >= (windowWidth - offsetWidth) / 3 && x <= (windowWidth - offsetWidth) - (windowWidth - offsetWidth) / 3) {
			if (!reachedTop && amountofpeaks > 0) {
				// Climb till we reach the next peak
				n = incline;
				if (prev + n <= top) {
					reachedTop = true;
				}
			} else if (!reachedBot && amountofpeaks > 0) {
				n = -incline
				if (prev + n >= y) {
					reachedBot = true;
				}		
			} else {
				if (amountofpeaks > 0) {
					amountofpeaks -= 1;
					reachedTop = false;
					reachedBot = false;
				}
				n = random(-0.5, 0.5);
			}
		} else {
			n = random(-0.5, 0.5);
		}
		point(x, prev + n);
		prev = prev + n
	}
}
