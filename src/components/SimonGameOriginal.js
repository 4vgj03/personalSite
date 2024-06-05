import React, { useEffect } from 'react';
import $ from 'jquery';

const buttonColors = ["green", "red", "yellow", "blue"];
let userClickedPattern = [];
let randomChosenColor;
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
      }, [checkAnswer, nextSequence]);
      

  const nextSequence = () => {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    const randomNumber = Math.floor(Math.random() * 4);
    randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).delay(500).fadeIn(100).fadeOut(100).fadeIn(100);

    setTimeout(() => {
      playSound(randomChosenColor);
    }, 500);
  };

  const playSound = (name) => {
    var colorSound = new Audio(`sounds/${name}.mp3`);
    colorSound.play();
  };

  const animatePress = (currentColor) => {
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  };

  const checkAnswer = (currentLevel) => {
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
  };

  const startOver = () => {
    level = 0;
    gamePattern = [];
    started = false;
  };

  const handleButtonClick = () => {
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
  };

  return (
    <div className="simon-game">
      <h1 id="level-title">Press Any Key to Start</h1>
      <div className="btn green" onClick={handleButtonClick} id="green"></div>
      <div className="btn red" onClick={handleButtonClick} id="red"></div>
      <div className="btn yellow" onClick={handleButtonClick} id="yellow"></div>
      <div className="btn blue" onClick={handleButtonClick} id="blue"></div>
    </div>
  );
};

export default SimonGame;
