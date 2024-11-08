document.addEventListener("DOMContentLoaded", () => {
  const manu = document.querySelector(".normal-manu");
  const confetti = document.querySelector(".confetti");
  const coins = document.querySelector(".coins");

  manu.addEventListener("animationend", (event) => {
    if (event.animationName === "jump") {
      manu.src = "/assets/Manu2.png"; // Resmi 'manu2.png' olarak değiştirir

      confetti.style.animation = "confettiFall 6s ease-in-out infinite";
      coins.style.animation = "coinsFall 3s ease-in-out infinite";
      coins.style.animationDelay = "2s";
    }
  });
});
