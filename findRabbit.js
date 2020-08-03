const find = document.querySelector(".imgs__text");
const rabbit = document.querySelector(".rabbit");

find.addEventListener("click", () => {
  const top = rabbit.getBoundingClientRect().top;
  rabbit.scrollIntoView({ behavior: "smooth", block: "center" });
});
