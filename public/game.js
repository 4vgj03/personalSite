// Original content of your game.js
var buttonColors = ["green", "red", "yellow", "blue"];
var userClickedPattern = [];
var randomChosenColor;
var gamePattern = [];
var started = false;
var level = 0;

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).delay(500).fadeIn(100).fadeOut(100).fadeIn(100);
  
  setTimeout(() => {
    playSound(randomChosenColor);
  }, 500);
}

function playSound(name) {
  var colorSound = new Audio(`sounds/${name}.mp3`);
  colorSound.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    var wrongSound = new Audio('sounds/wrong.mp3');
    wrongSound.play();

    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);

    setTimeout(() => {
      $("h1").text("Game Over, Press Any Key or click a button to Restart");
      startOver();
    }, 1000);
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

$(".btn").on("click", function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    return;
  }

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

document.addEventListener("keydown", function(event) {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    return;
  }

  var userChosenColorTemp = '';
  switch (event.key) {
    case "a":
      userChosenColorTemp = "green";
      break;
    case "s":
      userChosenColorTemp = "red";
      break;
    case "d":
      userChosenColorTemp = "yellow";
      break;
    case "f":
      userChosenColorTemp = "blue";
      break;
  }

  playSound(userChosenColorTemp);
  animatePress(userChosenColorTemp);
  userClickedPattern.push(userChosenColorTemp);
  checkAnswer(userClickedPattern.length - 1);
});
