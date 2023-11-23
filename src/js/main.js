import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.set(".slider-track", {
//   x: "-52.5%",
// });

// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".slider-mask",
//     start: "top top",
//     //   endTrigger: ".slider-mask",
//     end: "+=3000",
//     //   end: "bottom 50%+=100px",
//   },
// });

// tl.to(".slider-track", {
//   x: "-85.7%",
//   delay: 2,
//   duration: 2,
// });

// tl.to(".slider-track", {
//   x: "-95.4%",
//   delay: 2,
//   duration: 6,
// });

// tl.to(".slider-track", {
//   x: "0",
//   delay: 2,
//   duration: 2,
// });

// tl.to(".slider-track", {
//   x: "-11.8%",
//   delay: 2,
//   duration: 4,
// });

// tl.to(".slider-track", {
//   x: "-26%",
//   delay: 2,
//   duration: 2,
// });

// gsap.to(".slider-track", {
//   scrollTrigger: {
//     trigger: ".slider-mask",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     markers: true,
//   },
//   x: "-75%",
//   ease: "sine.inOut",
// });

var button1 = document.querySelector("#button-1");
var button2 = document.querySelector("#button-2");
var button5 = document.querySelector("#button-5");

var lock1 = true;
var lock2 = true;
var lock5 = true;

// var tlMain = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".slider-mask",
//     start: "top top",
//     end: "800%",
//     pin: true,
//     // markers: true,
//     scrub: 1,
//   },
// });

// tlMain.set(".slider-track", {
//   x: "-50%",
// });

// tlMain.to(".slider-track", {
//   x: "-85.5%",
//   ease: "power1.inOut",
//   onComplete: () => {
//     if (lock5) {
//       html.style.overflow = "hidden";
//     }
//   },
// });

// tlMain.to(".slider-track", {
//   x: "-95.5%",
//   ease: "power1.inOut",
// });

// // Retour du slider totalement à gauche
// tlMain.to(".slider-track", {
//   x: "0%",
//   ease: "power1.inOut",
//   onComplete: () => {
//     if (lock1) {
//       // Si le verrou 1 est actif
//       html.style.overflow = "hidden"; // Le scroll est bloqué
//     }
//   },
// });

// // Déplacement du slider de 1 écran vers la droite
// tlMain.to(".slider-track", {
//   x: "-16.6666%",
//   ease: "power1.inOut",
//   onComplete: () => {
//     if (lock2) {
//       // Si le verrou 2 est actif
//       html.style.overflow = "hidden"; // Le scroll est bloqué
//     }
//   },
// });

// // Déplacement du slider de 1 écran vers la droite
// tlMain.to(".slider-track", {
//   x: "-33.3333%",
//   ease: "power1.inOut",
// });

// // Fin des déplacements

// // Au clic sur les boutons
// button5.addEventListener("click", () => {
//   html.style.overflow = "auto"; // Le scroll est débloqué
//   lock5 = false; // Le verrou 5 est désactivé
// });

// button1.addEventListener("click", () => {
//   html.style.overflow = "auto"; // Le scroll est débloqué
//   lock1 = false; // Le verrou 1 est désactivé
// });

// button2.addEventListener("click", () => {
//   html.style.overflow = "auto"; // Le scroll est débloqué
//   lock2 = false; // Le verrou 2 est désactivé
// });

// Création de la timeline principale
var tlMain = gsap.timeline({
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "2000%",
    pin: true,
    markers: true,
    scrub: 1,
  },
});

// Déplacement initial du slider
tlMain.set(".slider-track", {
  x: "-50%",
});

// Déplacement du slider de 1 écran vers la droite
tlMain.to(".slider-track", {
  x: "-85.5%",
  duration: 3,
  ease: "power1.inOut",
  onComplete: () => {
    if (lock5) {
      // Si le verrou 5 est actif
      html.style.overflow = "hidden"; // Le scroll est bloqué
    }
  },
});

tlMain.to({}, { duration: 1 });

// Déplacement du slider de 1 écran vers la droite
tlMain.to(".slider-track", {
  x: "-95.5%",
  duration: 3,
  ease: "power1.inOut",
});

// Retour du slider totalement à gauche
tlMain.to(".slider-track", {
  x: "0%",
  duration: 3,
  ease: "power1.inOut",
  onComplete: () => {
    if (lock1) {
      // Si le verrou 1 est actif
      html.style.overflow = "hidden"; // Le scroll est bloqué
    }
  },
});

tlMain.to({}, { duration: 1 });

// Déplacement du slider de 1 écran vers la droite
tlMain.to(".slider-track", {
  x: "-16.6666%",
  duration: 3,
  ease: "power1.inOut",
  onComplete: () => {
    if (lock2) {
      // Si le verrou 2 est actif
      html.style.overflow = "hidden"; // Le scroll est bloqué
    }
  },
});

tlMain.to({}, { duration: 1 });

// Déplacement du slider de 1 écran vers la droite
tlMain.to(".slider-track", {
  x: "-33.3333%",
  duration: 3,
  ease: "power1.inOut",
});

// Fin des déplacements

// Au clic sur les boutons
button5.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock5 = false; // Le verrou 5 est désactivé
});

button1.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock1 = false; // Le verrou 1 est désactivé
});

button2.addEventListener("click", () => {
  html.style.overflow = "auto"; // Le scroll est débloqué
  lock2 = false; // Le verrou 2 est désactivé
});
