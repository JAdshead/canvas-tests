window.onload = function () {

  var canvas  = document.getElementById('canvas'), 
      context = canvas.getContext('2d'),
      mouse   = utils.captureMouse(canvas),
      ball    = new Ball(80),
      bounce  = 100,
      angle   = 0;

  ball.x = 0;
  ball.y = canvas.height/ 2;

  (function drawFrame(){
    window.requestAnimationFrame(drawFrame, canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);

    ball.x += 0.5;
    ball.y = canvas.height / 2 + Math.sin(angle) * bounce;
    angle   += 0.05;
    ball.draw(context);
  }());

};  










