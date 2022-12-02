"use strict";

let secret = Math.round(Math.random() * 20);
let currentScore = 20;
document.querySelector(".score").textContent = currentScore;
let highScore = 0;
document.querySelector(".highscore").textContent = highScore;
document.querySelector(".check").addEventListener("click", function () {
  let value = document.querySelector(".guess").value;
  if (value > 20 || value < 1) {
    document.querySelector(".message").textContent =
      "😒 The number should be between 1 and 20 !!!";
  } else {
    if (value < secret || value > secret) {
      if (currentScore > 0) {
        if (value < secret) {
          document.querySelector(".message").textContent = "👇 Too Low!";
        } else {
          document.querySelector(".message").textContent = "👆 Too High!";
        }
        currentScore = document.querySelector(".score").textContent;
        currentScore--;
        document.querySelector(".score").textContent = currentScore;
        if (currentScore === 0) {
          document.body.style.backgroundColor = "red";
          document.querySelector(".message").textContent =
            "😭 Game over, Try again!";
        }
      } else {
        document.body.style.backgroundColor = "red";
        document.querySelector(".message").textContent =
          "😭 Game over, Try again!";
      }
    } else {
      document.querySelector(".message").textContent = "Correct!";
      document.body.style.backgroundColor = "green";
      document.querySelector(".number").textContent = value;
      document.querySelector(".check").disabled = true;

      if (currentScore > highScore) {
        highScore = currentScore;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  let secret = Math.round(Math.random() * 20);
  currentScore = 20;
  document.querySelector(".score").textContent = currentScore;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".check").disabled = false;
  document.body.style.backgroundColor = "black";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
