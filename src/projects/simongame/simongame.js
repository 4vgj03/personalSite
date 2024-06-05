import React, { useEffect } from 'react';
import $ from 'jquery';
import './stylessimon.css'; // Importing CSS styles

const buttonColors = ["green", "red", "yellow", "blue"];
let userClickedPattern = [];
let gamePattern = [];
let started = false;
let level = 0;

const SimonGame = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
        return;
      }

      let userChosenColorTemp = '';
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
        default:
          break;
      }

      playSound(userChosenColorTemp);
      animatePress(userChosenColorTemp);
      userClickedPattern.push(userChosenColorTemp);
      checkAnswer(userClickedPattern.length - 1);
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const nextSequence = () => {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); // Flash the button
    playSound(randomChosenColor); // Play sound
  };

  const playSound = (name) => {
    var colorSound = new Audio(`../sounds/${name}.mp3`); // Adjust the path if needed
    colorSound.play();
  };

  const animatePress = (currentColor) => {
    if (currentColor) {
      $("#" + currentColor).addClass("pressed");
      setTimeout(() => {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
    } else {
      console.error("Invalid color:", currentColor);
    }
  };
  

  const checkAnswer = (currentLevel) => {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(() => {
          nextSequence();
        }, 1000);
      }
    } else {
      var wrongSound = new Audio('../sounds/wrong.mp3'); // Adjust the path if needed
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
  };

  const startOver = () => {
    level = 0;
    gamePattern = [];
    started = false;
  };

  const handleButtonClick = (color) => {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
      return;
    }

    userClickedPattern.push(color);

    playSound(color);
    animatePress(color);
    checkAnswer(userClickedPattern.length - 1);
  };

  return (
    <div className="simon-game">
      <h1 id="level-title">Press Any Key to Start</h1>
      <div className="button-container">
        {buttonColors.map((color, index) => (
          <div
            key={index}
            className={`btnSimon ${color}`}
            onClick={() => handleButtonClick(color)}
            id={color}
          ></div>
        ))}
      </div>
    </div>
  );
  
};

export default SimonGame;
