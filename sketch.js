"use strict";
let capture;

function setup() {
	createCanvas(640, 480);
	capture = createCapture(VIDEO);
	capture.hide();
	capture.size(640, 480);
}

function draw() {
	background(0);
	noStroke();
	fill(255);
	

	if (capture.width > 0) {
		let img = capture.get(0, 0, capture.width, capture.height);
		img.loadPixels();

		const step = 10;
		for (var y = step; y < img.height; y += step) {
			for (var x = step; x < img.width; x += step) {
				var  i = y * img.width + (img.width-x-1);	
				// const darkness = (255 - img.pixels[i * 4]) / 255;
				
				const darkness = (255 - img.pixels[i * 4]) / 255;
				
				let sX = x * width / img.width;
				let sY = y * height / img.height;
				if (darkness > 0.75) {
					fill('#ededc5');
					circle(sX, sY, step);
				}else
				if (darkness > 0.5) {
					fill('#1a1a19');
					circle(sX, sY, step);
				}
								
			}
		}
	}
	
}
