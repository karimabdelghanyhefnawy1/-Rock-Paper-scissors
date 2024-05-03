let theRules = document.getElementById("rulesButton");
let immageRules = document.querySelector(".imageRuels")

theRules.onclick = function () {
    if (immageRules.style.display === 'none') {
        immageRules.style.display = 'block';
      } else {
        immageRules.style.display = 'none';
      }
}

let theRest = document.getElementById("resetButton")

theRest.onclick = function () {
  window.location.reload();
}

let rockIcon = document.querySelector(".hero__item--rock")
let paperIcon = document.querySelector(".hero__item--paper")
let scissorsIcon = document.querySelector(".hero__item--scissors")
let triangleImage = document.querySelector(".triangle")


rockIcon.onclick = function hideRandomButton() {

  let circles1 = document.querySelectorAll(".hero__item--paper, .hero__item--scissors");
  let resultWin1 = document.querySelector(".you-win")
  let resultLose1 = document.querySelector(".you-lose")
  let playAgain1 = document.getElementById("play-again")

  let randomIndex = Math.floor(Math.random() * circles1.length);
  let circleToHide1 = circles1[randomIndex];

  circleToHide1.style.display = 'none';
  triangleImage.style.display = 'none';

  if (circleToHide1 === paperIcon) {
    resultWin1.style.display = 'block';
    playAgain1.style.display = 'block';
  }else {
    resultLose1.style.display = 'block';
    playAgain1.style.display = 'block';
  }
}

paperIcon.onclick = function hideRandomButton() {
  let circles2 = document.querySelectorAll(".hero__item--rock, .hero__item--scissors");
  let resultWin2 = document.querySelector(".you-win")
  let resultLose2 = document.querySelector(".you-lose")
  let playAgain2 = document.getElementById("play-again")

  let randomIndex = Math.floor(Math.random() * circles2.length);
  let circleToHide2 = circles2[randomIndex];

  circleToHide2.style.display = 'none';
  triangleImage.style.display = 'none';

  if (circleToHide2 === scissorsIcon) {
    resultWin2.style.display = 'block';
    playAgain2.style.display = 'block';
  }else {
    resultLose2.style.display = 'block';
    playAgain2.style.display = 'block';
  }
}
scissorsIcon.onclick = function hideRandomButton() {
  let circles3 = document.querySelectorAll(".hero__item--rock, .hero__item--paper");
  let resultWin3 = document.querySelector(".you-win")
  let resultLose3 = document.querySelector(".you-lose")
  let playAgain3 = document.getElementById("play-again")

  let randomIndex = Math.floor(Math.random() * circles3.length);
  let  circleToHide3 = circles3[randomIndex];

  circleToHide3.style.display = 'none';
  triangleImage.style.display = 'none';

  if (circleToHide3 === rockIcon) {
    resultWin3.style.display = 'block';
    playAgain3.style.display = 'block';
  }else {
    resultLose3.style.display = 'block';
    playAgain3.style.display = 'block';
  }
}
let playAgain = document.getElementById("play-again")
let resultWin = document.querySelector(".you-win")
let resultLose = document.querySelector(".you-lose")


playAgain.onclick = function () {
  rockIcon.style.display = 'block';
  paperIcon.style.display = 'block';
  scissorsIcon.style.display = 'block';
  triangleImage.style.display = 'block';
  resultWin.style.display = 'none';
  resultLose.style.display = 'none';
  playAgain.style.display = 'none';
}


























