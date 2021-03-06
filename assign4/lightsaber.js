$(document).ready(function() {
  var mainCanvas = document.querySelector("#myCanvas");
  var beamCanvas = document.querySelector("#beamCanvas");
  var hilt = mainCanvas.getContext("2d");
  var hiltDeco = mainCanvas.getContext("2d");
  var beam = beamCanvas.getContext("2d");
  var highlight = beamCanvas.getContext("2d");
  var scrollIcon = beamCanvas.getContext("2d");
  var canvasWidth = mainCanvas.width;
  var canvasHeight = mainCanvas.height;
  var soundFX = new Audio("coolsaber.wav")
  var timeline = anime.timeline();

  timeline
    .add({
      targets: '#myCanvas',
      translateX: [-1000, 0],
      //translateY: [200, 200],
      //scale: 1.2,
      easing: 'easeOutQuad',
      //offset: 1000 // Starts at 1000ms of the timeline
    })
    .add({
      targets: '#scrollIndicator',
      opacity: [0, 1],
      easing: 'easeOutQuad',
      //offset: 1000 // Starts at 1000ms of the timeline
    })
    .add({
      targets: '#beamCanvas',
      opacity: [0, 1],
      //scale: 1.2,
      easing: 'easeOutQuad',
      //offset: 2500 // Starts at 500ms of the timeline
    });
  /*
  var animBeam = anime({
    targets: '#beamCanvas',
    opacity: [0, 1],
    //scale: 1.2,
    easing: 'easeOutQuad',
    //delay: 500
  });
  */

  setTimeout(function() {
    playSound();
  }, 1000);
  function playSound() {
    var temp = soundFX.cloneNode();
    temp.loop = false;
    temp.play();
  }

  function drawLightSaber() {
    //draw beam
    beam.beginPath();
    beam.fillStyle = "#06adff";
    beam.fillRect(315, 125, 1275, 45);
    highlight.fillStyle = "#e9faff";
    beam.fillRect(315, 135, 1275, 25);
    beam.closePath();
    //draw scroll indicator
    /*
    scrollIcon.beginPath();
    scrollIcon.strokeStyle = "#b8b8b8"
    scrollIcon.lineWidth = 4;
    scrollIcon.moveTo(435, 100);
    scrollIcon.lineTo(485, 150);
    scrollIcon.stroke();
    scrollIcon.closePath();
    */
    //draw the hilt
    hilt.beginPath();
    hilt.fillStyle = "#e0e0e0";
    hilt.fillRect(20, 125, 250, 50);
    hilt.fillRect(280, 115, 25, 70);
    hilt.fillRect(0, 130, 15, 40);
    hilt.moveTo(315, 120);
    hilt.lineTo(355, 120);
    hilt.lineTo(325, 175);
    hilt.lineTo(315, 175);
    hilt.fill();
    hilt.closePath();
    //draw highlight
    highlight.beginPath();
    highlight.fillStyle = "#f7f7f7";
    highlight.fillRect(20, 135, 325, 5);
    highlight.closePath();
    //draw dark
    hilt.beginPath();
    hilt.fillStyle = "#1e2126";
    hilt.fillRect(140, 120, 50, 60);
    hilt.fillRect(15, 120, 100, 10);
    hilt.fillRect(15, 135, 100, 10);
    hilt.fillRect(15, 150, 100, 10);
    hilt.fillRect(230, 120, 40, 10);
    hilt.fillRect(145, 180, 40, 10);
    hilt.closePath();

  }
  var crystal = mainCanvas.getContext("2d");
  var arrow = mainCanvas.getContext("2d");
  var battery = mainCanvas.getContext("2d");

  drawLightSaber();
  //playSound();
})
