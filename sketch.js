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
	let p = random(3, 4.5);
	let a = 20;
	for (let x = 0; x < windowWidth - offsetWidth; x++) {
		let n;		
		if (x >= (windowWidth - offsetWidth) / 3 && x <= (windowWidth - offsetWidth) - (windowWidth - offsetWidth) / 3) {
			let newx = map(x, (windowWidth - offsetWidth) / 3, (windowWidth - offsetWidth) - (windowWidth - offsetWidth) / 3, 0, PI * 2);
			n =  ((2 * a) / PI) * asin(sin(((2 * PI) / p) * newx));
			n += random(-0.5, 0.5);
			point(x, prev + n);
		} else {
			n = random(-0.5, 0.5);
			point(x, prev + n);
			prev = prev + n
		}
	}
}
