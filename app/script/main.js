let theRules = document.getElementById("rulesButton");
let immageRules = document.querySelector(".imageRuels")

theRules.onclick = function () {
    if (immageRules.style.display === 'none') {
        immageRules.style.display = 'block';
      } else {
        immageRules.style.display = 'none';
      }
}











