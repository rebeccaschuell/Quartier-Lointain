import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var html = document.querySelector("html");
var button1 = document.querySelector(".button-8-2");
var button2 = document.querySelector(".button-15-3");
var button3 = document.querySelector(".button-3-3");
var button4 = document.querySelector(".button-6-2");

var lock1 = true;
var lock2 = true;
var lock3 = true;
var lock4 = true;

// Création de la timeline principale
var tlMain = gsap.timeline({
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "3000%",
    pin: true,
    scrub: 1,
  },
});

tlMain.set(".slider-track", {
  x: "-50%",
});

tlMain.to(".slider-track", {
  duration: 0,
  onComplete: () => {
    console.log("salut");
    if (lock1) {
      html.style.overflow = "hidden";
    }
  },
});

tlMain.to(".slider-track", {
  x: "-84.8%",
  duration: 10,
  ease: "power1.inOut",
  onComplete: () => {
    if (lock2) {
      html.style.overflow = "hidden";
    }
  },
});

tlMain.to({}, { duration: 0.5 });

tlMain.to(".slider-track", {
  x: "-94%",
  duration: 8,
  ease: "power1.inOut",
});

// // Retour du slider totalement à gauche
// tlMain.to(".slider-track", {
//   x: "0%",
//   duration: 2,
//   ease: "power1.inOut",
//   onComplete: () => {
//     if (lock3) {
//       // Si le verrou 1 est actif
//       html.style.overflow = "hidden"; // Le scroll est bloqué
//     }
//   },
// });

tlMain.to(".slider-track", {
  x: "0%",
  duration: 8,
  ease: "power1.inOut",
});

tlMain.to({}, { duration: 0.5 });

tlMain.to(".slider-track", {
  x: "-9.7%",
  duration: 8,
  ease: "power1.inOut",
  onComplete: () => {
    if (lock3) {
      html.style.overflow = "hidden";
    }
  },
});

tlMain.to({}, { duration: 0.5 });

tlMain.to(".slider-track", {
  x: "-24.8%",
  duration: 8,
  ease: "power1.inOut",
  onComplete: () => {
    if (lock4) {
      html.style.overflow = "hidden";
    }
  },
});

tlMain.to({}, { duration: 2 });

// // Fin des déplacements

// Au clic sur les boutons
button1.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock1 = false; // Le verrou 5 est désactivé
});

button2.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock2 = false; // Le verrou 1 est désactivé
});

button3.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock3 = false; // Le verrou 2 est désactivé
});

button4.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock4 = false; // Le verrou 2 est désactivé
});
