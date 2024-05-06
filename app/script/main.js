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
let counterElement = document.querySelector(".h2");


rockIcon.onclick = function hideRandomButton() {

  let circles1 = document.querySelectorAll(".hero__item--paper, .hero__item--scissors");
  let resultWin1 = document.querySelector(".you-win")
  let resultLose1 = document.querySelector(".you-lose")
  let playAgain1 = document.getElementById("play-again")
  let counterElement = document.querySelector(".h2");

  let randomIndex = Math.floor(Math.random() * circles1.length);
  let circleToHide1 = circles1[randomIndex];

  circleToHide1.style.display = 'none' ;
  triangleImage.style.display = 'none';

  if (circleToHide1 === paperIcon) {
    let currentCount = parseInt(counterElement.textContent);
    let newCount = currentCount + 1;
    counterElement.textContent = newCount;
    resultWin1.style.display = 'block';
    playAgain1.style.display = 'block';
  }else {
    let currentCount = parseInt(counterElement.textContent);
    let newCount = currentCount - 1 ;
    if (newCount < 0) {
      newCount = 0;
    }
    counterElement.textContent = newCount;
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
    let currentCount = parseInt(counterElement.textContent);
    let newCount = currentCount + 1;
    counterElement.textContent = newCount;
    resultWin2.style.display = 'block';
    playAgain2.style.display = 'block';
  }else {
    let currentCount = parseInt(counterElement.textContent);
    let newCount = currentCount - 1 ;
    if (newCount < 0) {
      newCount = 0;
    }
    counterElement.textContent = newCount;
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
    let currentCount = parseInt(counterElement.textContent);
    let newCount = currentCount + 1;
    counterElement.textContent = newCount;
    resultWin3.style.display = 'block';
    playAgain3.style.display = 'block';
  }else {
    let currentCount = parseInt(counterElement.textContent);
    let newCount = currentCount - 1 ;
    if (newCount < 0) {
      newCount = 0;
    }
    counterElement.textContent = newCount;
    resultLose3.style.display = 'block';
    playAgain3.style.display = 'block';
  }
}
let playAgain = document.getElementById("play-again")
let resultWin = document.querySelector(".you-win")
let resultLose = document.querySelector(".you-lose")


playAgain.onclick = function () {
  rockIcon.style.cssText = "opacity: 1;";
  paperIcon.style.cssText = "opacity: 1;";
  scissorsIcon.style.cssText = "opacity: 1;";
  triangleImage.style.cssText = "opacity: 1;";
  resultWin.style.display = 'none';
  resultLose.style.display = 'none';
  playAgain.style.display = 'none';
}


























