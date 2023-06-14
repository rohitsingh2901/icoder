function myFunction(e) {
  var buttons = document.querySelectorAll(".nav-link");
  buttons.forEach(function (button) {
    button.removeAttribute("style");
    button.classList.add("text-light");
  });
  e.classList.remove("text-light");
  e.style.color = "red";
}

const typewriter = document.getElementById("typewriter");
const words = ["Coding!", "HTML", "CSS", "JavaScript"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typewriter.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriter.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;
    if (wordIndex === words.length) {
      wordIndex = 0;
    }
    setTimeout(type, 500);
  } else {
    setTimeout(type, 100);
  }
}

type();

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

function openModal() {
  let n = document.getElementById("name");
  let e = document.getElementById("email");
  let m = document.getElementById("message");
  if (n.value !== "" && e.value !== "" && m.value !== "") {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        event.preventDefault();
        var targetOffset = target.offsetTop;
        var initialScrollStep = 5; // Initial scroll step size
        var increasedScrollStep = 40; // Increased scroll step size
        var delayDuration = 100; // Delay duration in milliseconds
        var currentPosition = window.scrollY;

        var delayTimeout = setTimeout(function () {
          var scrollInterval = setInterval(function () {
            if (currentPosition < targetOffset) {
              currentPosition += increasedScrollStep;
              if (currentPosition >= targetOffset) {
                currentPosition = targetOffset;
                clearInterval(scrollInterval);
              }
            } else {
              currentPosition -= increasedScrollStep;
              if (currentPosition <= targetOffset) {
                currentPosition = targetOffset;
                clearInterval(scrollInterval);
              }
            }

            window.scrollTo(0, currentPosition);
          }, 10);
        }, delayDuration);

        // Clear the delay timeout if the link is clicked again before the delay
        link.addEventListener("click", function () {
          clearTimeout(delayTimeout);
        });
      }
    });
  });
});
