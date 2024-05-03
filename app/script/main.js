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

// let circles = document.querySelectorAll(".hero__item--paper, .hero__item--scissors");
let rockIcon = document.querySelector(".hero__item--rock")
let paperIcon = document.querySelector(".hero__item--paper")
let scissorsIcon = document.querySelector(".hero__item--scissors")
let triangleImage = document.querySelector(".triangle")

rockIcon.onclick = function hideRandomButton() {

  let circles1 = document.querySelectorAll(".hero__item--paper, .hero__item--scissors");

  let randomIndex = Math.floor(Math.random() * circles1.length);
  let circleToHide1 = circles1[randomIndex];

  circleToHide1.style.display = 'none';
  triangleImage.style.display = 'none';
}
paperIcon.onclick = function hideRandomButton() {
  let circles2 = document.querySelectorAll(".hero__item--rock, .hero__item--scissors");

  let randomIndex = Math.floor(Math.random() * circles2.length);
  let circleToHide2 = circles2[randomIndex];

  circleToHide2.style.display = 'none';
  triangleImage.style.display = 'none';
}
scissorsIcon.onclick = function hideRandomButton() {
  let circles3 = document.querySelectorAll(".hero__item--rock, .hero__item--paper");

  let randomIndex = Math.floor(Math.random() * circles3.length);
  let  circleToHide3 = circles3[randomIndex];

  circleToHide3.style.display = 'none';
  triangleImage.style.display = 'none';
}

























