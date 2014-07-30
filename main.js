window.onload = function () {
  var frame = 0;

  // Trigger animation using requestAnimationFrame not setInterval()
  // (function drawFrame() {
  //   window.requestAnimationFrame(drawFrame, canvas);
  // }());

  var canvas = document.getElementById('canvas'), 
      mouse = utils.captureMouse(canvas),
      touch = utils.captureTouch(canvas);

  canvas.addEventListener('mousedown', function () {
    console.log("x:  " + mouse.x +", y: "+mouse.y);
  }, false);


  function onTouchEvent (event) {
    if (touch.isPressed) {
      console.log("x: "+ touch.x+", y: "+touch.y);
    }
  };

  canvas.addEventListener('touchstart', onTouchEvent, false);
  canvas.addEventListener('touchend', onTouchEvent, false);
  canvas.addEventListener('touchmove', onTouchEvent, false);

  

};  
