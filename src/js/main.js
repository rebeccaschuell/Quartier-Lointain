import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".slider-track", {
  x: "-52.5%",
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    //   endTrigger: ".slider-mask",
    end: "+=3000",
    //   end: "bottom 50%+=100px",
  },
});

tl.to(".slider-track", {
  x: "-95.4%",
  delay: 2,
  duration: 6,
});

tl.to(".slider-track", {
  x: "0",
  delay: 2,
  duration: 2,
});

tl.to(".slider-track", {
  x: "-26%",
  delay: 2,
  duration: 6,
});

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
