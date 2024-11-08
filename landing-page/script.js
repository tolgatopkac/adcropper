document.addEventListener("DOMContentLoaded", function () {
  const personManu = document.querySelector(".person-manu");
  const confetti = document.querySelector(".confetti");
  const kingManu = document.querySelector(".king-manu");
  const confettiElements = document.querySelectorAll(".confetti");
  const coinElements = document.querySelectorAll(".coins");

  const coins = document.querySelectorAll(".coin");

  personManu.addEventListener("animationend", function (event) {
    if (event.animationName === "jumpNormalManu") {
      personManu.src = "/assets/king-manu.png";
      personManu.classList.add("king-manu");
      personManu.classList.remove("normal-manu");

      setTimeout(() => {
        // add animation style to confetti class
        showConfetti();
      }, 2000);

      setTimeout(() => {
        showCoins();
      }, 5000);
    }
  });

  function showConfetti() {
    confettiElements.forEach((confetti) => {
      confetti.style.opacity = 1;
    });
  }

  function showCoins() {
    coinElements.forEach((coin) => {
      coin.style.opacity = 1;
    });

    coins.forEach((coin) => {
      coin.style.opacity = 1;
    });
  }
});
