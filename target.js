const body = document.querySelector("body");
const img = document.querySelector(".jsImg");
const target = document.querySelector(".jsTarget");
const x = document.querySelector(".jsX");
const y = document.querySelector(".jsY");

addEventListener("load", () => {
  const imgHalf = img.getBoundingClientRect();
  const imgHalfWidth = imgHalf.width / 2;
  const imgHalfHeight = imgHalf.height / 2;

  body.addEventListener("mousemove", (event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;
    img.style.transform = `translate(${clientX - imgHalfWidth}px,${
      clientY - imgHalfHeight
    }px)`;
    target.style.transform = `translate(${clientX + 30}px,${clientY + 30}px)`;
    target.innerText = `${clientX}px, ${clientY}px`;
    x.style.transform = `translate(${clientX}px)`;
    y.style.transform = `translate(0,${clientY}px)`;
  });
});
