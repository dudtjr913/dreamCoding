"use strict";

const box = document.querySelector(".jsBox");
const scrollMid = document.querySelector(".jsMidBtn");
const scrollSpecial = document.querySelector(".jsSpecialBtn");
const scrollY = document.querySelector(".jsYBtn");

const boxRect = box.getBoundingClientRect();

box.addEventListener("click", (event) => {
  console.log(boxRect);
  console.log(`ClientX : ${event.clientX}, ClientY : ${event.clientY}`);
  console.log(`  PageX : ${event.pageX}, PageY : ${event.pageY}`);
});

scrollMid.addEventListener("click", () =>
  window.scrollTo({
    top: 200,
    behavior: "smooth",
  })
);

scrollSpecial.addEventListener("click", () => {
  box.scrollIntoView();
});

scrollY.addEventListener("click", () =>
  window.scrollBy({
    top: 100,
    behavior: "smooth",
  })
);
