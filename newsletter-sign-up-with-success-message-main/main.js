const userName = document.getElementById("user");
let button = document.getElementById("bon");
let button1 = document.getElementById("diss");
let err = document.getElementById("errer");
let id = document.getElementById("answer");
let answer = document.getElementById("answer");
let dismiss = document.getElementById("diss");
let c1 = document.getElementById("container");
let c2 = document.getElementById("container2");

button.addEventListener("click", wrong);
button1.addEventListener("click", rever);

function wrong() {
  let validRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (userName.value.match(validRegex)) {
    msg.textContent = userName.value;
    c1.style.display = "none";
    c2.style.display = "flex";
  } else {
    userName.style.border = "1px solid hsl(4, 100%, 67%)";
    userName.style.color = "hsl(4, 100%, 67%)";
    userName.style.backgroundColor = "hsl(4, 100%, 88%)";
    err.textContent = "Valid email required";
  }
}
function rever() {
  c1.style.display = "flex";
  c2.style.display = "none";
  userName.value = "";
}
