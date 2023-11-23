import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// CURSEUR
document.querySelector(".cursor");
gsap.set(".ball", { xPercent: -50, yPercent: -50 });

const ball = document.querySelector(".cursor");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.2;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

gsap.ticker.add(() => {
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

// FRISE
var html = document.querySelector("html");
var button1 = document.querySelector(".button-8-2");
var button2 = document.querySelector(".button-15-3");
var button3 = document.querySelector(".button-3-3");
var button4 = document.querySelector(".button-6-2");
var cursor1 = document.querySelector(".cursor");

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
    if (lock1) {
      html.style.overflow = "hidden";
      cursor1.classList.add("hidden"); // Afficher le texte
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
      cursor1.classList.add("hidden"); // Afficher le texte
    }
  },
});

tlMain.to({}, { duration: 0.5 });

tlMain.to(".slider-track", {
  x: "-94%",
  duration: 8,
  ease: "power1.inOut",
});

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
      cursor1.classList.add("hidden"); // Afficher le texte
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
      cursor1.classList.add("hidden"); // Afficher le texte
    }
  },
});

tlMain.to({}, { duration: 2 });

// // Fin des déplacements

// Au clic sur les boutons
button1.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock1 = false; // Le verrou 5 est désactivé
  cursor1.classList.remove("hidden");
});

button2.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock2 = false; // Le verrou 1 est désactivé
  cursor1.classList.remove("hidden");
});

button3.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock3 = false; // Le verrou 2 est désactivé
  cursor1.classList.remove("hidden");
});

button4.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock4 = false; // Le verrou 2 est désactivé
});
