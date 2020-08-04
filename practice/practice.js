/* target.js
"use strict";

const praScreen = document.querySelector(".jsScreen");

const windowSize = function () {
  praScreen.innerText = `Screen Width : ${screen.width}, Screen Height : ${screen.height}
  Outer Width : ${outerWidth}, Outer Height : ${outerHeight}
  Inner Width : ${innerWidth}, Inner Height : ${innerHeight}
  Client Width : ${document.documentElement.clientWidth}, Client Height : ${document.documentElement.clientHeight}
  `;
};

window.addEventListener("resize", windowSize);

windowSize();
*/

/* size.js
"use strict";

const praScreen = document.querySelector(".jsScreen");

const windowSize = function () {
  praScreen.innerText = `Screen Width : ${screen.width}, Screen Height : ${screen.height}
  Outer Width : ${outerWidth}, Outer Height : ${outerHeight}
  Inner Width : ${innerWidth}, Inner Height : ${innerHeight}
  Client Width : ${document.documentElement.clientWidth}, Client Height : ${document.documentElement.clientHeight}
  `;
};

window.addEventListener("resize", windowSize);

windowSize();
*/

/* find Rabbit
const find = document.querySelector(".imgs__text");
const rabbit = document.querySelector(".rabbit");

find.addEventListener("click", () => {
  const top = rabbit.getBoundingClientRect().top;
  rabbit.scrollIntoView({ behavior: "smooth", block: "center" });
});
*/

/* coordinate.js 
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
*/
