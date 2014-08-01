window.onload = function () {
  var canvas  = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      angle   = 0,
      range   = -100,
      centerY = canvas.height,
      xspeed  = 0.05,
      yspeed  = 0.16,
      xpos    = 0,
      frame   = 0,
      frame1  = 0,
      ypos    = centerY,
      colors  = ["#fff","#000"];

  (function drawFrame(){
    window.requestAnimationFrame(drawFrame, canvas);
    frame1 +=1;
    if (frame1 % 10 == 0){
        
        context.lineWidth = Math.random()*(Math.random()+5);
        var colorPick = Math.min(Math.ceil(Math.random()*10), colors.length)
        context.strokeStyle = colors[colorPick];

        context.beginPath();
        context.moveTo(xpos, ypos);
        context.lineTo(ypos, xpos);
        if (frame %60 == 0) {
          xpos  += xspeed * Math.random()*10;
          angle += yspeed - Math.cos(angle*0.6);
          ypos  = centerY - Math.sin(angle) * range;
          xpos = Math.random()*canvas.width;
          ypos = Math.random()*canvas.height;
        } else {
          xpos  += xspeed;
          angle += yspeed;
          ypos  = centerY + Math.sin(angle) * range;
        }
        if (frame % 10 == 0) {
          context.clearRect(Math.random()*canvas.width,Math.random()*canvas.height, canvas.width/Math.random()*Math.random(), Math.random()*canvas.height/Math.random())
        }
        context.lineTo(xpos, ypos);
        context.stroke();
        frame +=1;
    };
  }());
}










