function mousePressed() {

    let fs = fullscreen();

    fullscreen(!fs); 
}
function setup() { 
  createCanvas(700, 600);
  img = createCapture(VIDEO);
	img.hide();


}
function draw() {
	img.loadPixels();
  for (var y=img.height ; y>0; y-=10)
  {
    for (var x=img.width; x>0; x-=10)
    {
      var p = img.pixels[(y*img.width-x)*4];
      if (p < 255 & p > 200 )
      {
        fill(p*2,p,p*3);
				
		 ellipse(x, y, 11, 11);
      }
           if (p < 200 & p > 100 )
      {
        fill(p,255,p);
       ellipse(x, y, 22, 22);

      }
			          if (p < 100 & p > 0 )
      {
        fill(0,p,0);
       ellipse(x, y, 6, 6);

      }
    }
  }
}
