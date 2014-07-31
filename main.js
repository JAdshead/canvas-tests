window.onload = function () {

  var canvas  = document.getElementById('canvas'), 
      contain = document.getElementById('container'),
      context = canvas.getContext('2d'),
      mouse   = utils.captureMouse(canvas),
      touch   = utils.captureTouch(contain),
      arrow   = new Arrow(); 
     
  arrow.x = canvas.width  / 2;
  arrow.y = canvas.height / 2;

  (function drawFrame() {
    window.requestAnimationFrame(drawFrame, canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);


    var dx = mouse.x - arrow.x,
        dy = mouse.y - arrow.y;

    if (touch.isPressed) {
      dx = touch.x - arrow.x,
      dy = touch.y - arrow.y;
    };

    var radians = Math.atan(dy/dx);
    arrow.rotation = radians;
    arrow.draw(context);
  }());
};  










