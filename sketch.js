function setup() { 
  createCanvas(400, 300);
  img = createCapture(VIDEO);
	img.hide();
  img.size(800, 600);

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
        fill(22,p,p);
       ellipse(x, y, 22, 22);

      }
			          if (p < 100 & p > 0 )
      {
        fill(220,p,222);
       ellipse(x, y, 6, 6);

      }
    }
  }
}
