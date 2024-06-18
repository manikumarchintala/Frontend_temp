//

const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const body = document.querySelector(".body");
menu.addEventListener("click", () => {
  nav.classList.add("nav--visible");
  menu.classList.add("menu--hide");
  close.classList.add("close--show");
  body.classList.add("body--no-scroll");
});
close.addEventListener("click", () => {
  nav.classList.remove("nav--visible");
  menu.classList.remove("menu--hide");
  close.classList.remove("close--show");
  body.classList.remove("body--no-scroll");
});
//for contact form
const contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "sucess") {
      alert("Email sent");
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    }
    alert("something went wrong");
  };
  xhr.send(JSON.stringify(formData));
});
