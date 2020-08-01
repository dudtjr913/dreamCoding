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
