const swi = document.getElementById("toggle");
const thee = document.querySelector("html");

function fed() {
  let em = thee.getAttribute("data-theme");
  console.log(em);
  let val = em === "dark" ? "light" : "dark";
  console.log(val);
  thee.setAttribute("data-theme", val);
}
swi.addEventListener("change", fed);
