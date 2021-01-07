//Global initiation of important variables
var score = 0;
var dotWidth = 100;

//start button script
onEvent("startButton", "click", function( ) {
  setScreen("mainState");
  gameplay();
});

//restart button script
onEvent("restartButton", "click", function( ) {
  setScreen("mainState");
  score = 0;
  dotWidth = 100;
  gameplay();
});

//main gameplay script
function gameplay() {
  //Create a canvas to draw on
  createCanvas("mainCanvas", 320, 450);
  
  //script for blue dot
  onEvent("blueDot", "click", function( ) {
    score++;
    setText("scoreId", score);
    if (dotWidth >= 27) {
      dotWidth = dotWidth - 3;
    }
    setPosition("blueDot", randomNumber(60, 260), randomNumber(60, 390), dotWidth, dotWidth);
    setPosition("redDot", randomNumber(60, 260), randomNumber(60, 390), dotWidth, dotWidth);
    });
    
  //script for red dot
  onEvent("redDot", "click", function( ) {
    score--;
    setText("scoreId", score);
    setPosition("blueDot", randomNumber(60, 260), randomNumber(60, 390), dotWidth, dotWidth);
    setPosition("redDot", randomNumber(60, 260), randomNumber(60, 390), dotWidth, dotWidth);
  });
  
  //end the game after 15 seconds
  setTimeout(function() {
  setScreen("endState");
  setText("scoreLabel", score);
  }, 15000);
}
