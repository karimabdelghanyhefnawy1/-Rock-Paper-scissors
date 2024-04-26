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

rockIcon.onclick = function () {
  paperIcon.style.display = 'none';
  scissorsIcon.style.display = 'none';
  triangleImage.style.display = 'none';
}
paperIcon.onclick = function () {
  rockIcon.style.display = 'none';
  scissorsIcon.style.display = 'none';
  triangleImage.style.display = 'none';
}
scissorsIcon.onclick = function () {
  paperIcon.style.display = 'none';
  rockIcon.style.display = 'none';
  triangleImage.style.display = 'none';
}














