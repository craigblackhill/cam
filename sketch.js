let gra;
let url = "https://coolors.co/f7f7f7-527caa-f76954-ffe62d-5fb49c";
let cols;

let deltaSec = 0;
let rote = 0;
let cap;


function setup() {
	createCanvas(1112, 834);
	cap = createCapture(VIDEO);
	cap.hide();
	cols = createCols(url);	
	init();
}

function draw()
{
	rote += 0.0025 + sin(frameCount/100)*0.001;
	
	//reset layout
	let pSec = deltaSec;
	deltaSec = Math.floor(millis()/1000);
	if(pSec != deltaSec && deltaSec % 5 == 0)init();
	
	//gra
	let triH = gra.width*0.5 * pow(3,0.5);

	gra.clear();
	gra.background(0);
	gra.push();
	gra.translate(gra.width/2,triH/2);
	gra.rotate(rote);
	gra.imageMode(CENTER);
	let ratio = gra.width/min(cap.width,cap.height)*1.5;
	gra.image(cap,0,0,cap.width*ratio,cap.height*ratio);	
	gra.pop();
	
	//mask
	gra.erase();
	gra.triangle(0,triH,0,0,gra.width/2,triH);
	gra.triangle(gra.width,triH,gra.width,0,gra.width/2,triH);
	gra.rect(0,triH,gra.width,gra.height-triH);
	gra.noErase();
	
	
	// tiling gra
	clear();
	let offY = 0; 
	let size = dist(0,0,width,height);
	translate(width/2,height/2);
	rotate(rote);
	for(let x = -size/2-gra.width; x < size/2 + gra.width; x += gra.width*1.5)
	{
		for(let y = -size/2-triH; y < size/2 + triH; y+= triH*2){drawHexa(x,y+offY);}
		offY = offY == 0 ? triH : 0;
	}
}


function init(){
	let graSize = Math.floor(max(width,height)/random(3,15));
	gra = createGraphics(graSize,graSize);
	gra.noStroke();
}

function drawHexa(cx,cy,triGra = gra,radius = gra.width)
{	
	push();
	translate(cx,cy);

	for(let rad = 0; rad < TWO_PI; rad += TWO_PI/3)
	{
		push();
		rotate(rad);
		image(triGra,0,0);
		scale(1,-1);
		image(triGra,0,0);
		pop();
	}
	pop();
}

function createCols(_url) {
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = '#' + arr[i];
  }
  return arr;
}
