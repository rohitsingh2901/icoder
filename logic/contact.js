window.addEventListener("DOMContentLoaded", () => {
  let currentNumber1 = 0;
  let currentNumber2 = 0;
  let currentNumber3 = 0;
  let currentNumber4 = 0;

  const numberElement1 = document.getElementById("number1");
  const numberElement2 = document.getElementById("number2");
  const numberElement3 = document.getElementById("number3");
  const numberElement4 = document.getElementById("number4");

  const increaseNumber = () => {
    if (currentNumber1 < 132) {
      currentNumber1++;
      numberElement1.textContent = currentNumber1;
      setTimeout(increaseNumber, 10);
    }
  };
  const increaseNumber2 = async () => {
    if (currentNumber2 < 12) {
      currentNumber2++;
      numberElement2.textContent = currentNumber2;
      setTimeout(increaseNumber2, 150);
    }
  };
  const increaseNumber3 = async () => {
    if (currentNumber3 < 90) {
      currentNumber3++;
      numberElement3.textContent = currentNumber3;
      setTimeout(increaseNumber3, 15);
    }
  };
  const increaseNumber4 = async () => {
    if (currentNumber4 < 26) {
      currentNumber4++;
      numberElement4.textContent = currentNumber4;
      setTimeout(increaseNumber4, 70);
    }
  };

  increaseNumber();
  increaseNumber2();
  increaseNumber3();
  increaseNumber4();
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const scrolled = window.pageYOffset > 0;

  if (scrolled) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("anim");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("anim");
  }

  if (scrolled && !navbar.classList.contains("animated")) {
    navbar.classList.add("animated");
  } else if (!scrolled && navbar.classList.contains("animated")) {
    navbar.classList.remove("animated");
  }
});
