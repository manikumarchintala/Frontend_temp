document.addEventListener("DOMContentLoaded", function () {
  const con1 = document.getElementById("container-1");
  const bon = document.getElementById("submit");
  const con2 = document.getElementById("container-2");
  const rate = document.querySelectorAll("ratings");
  let dummy = document.getElementsByClassName("rate");
  for (var i = 0; i < rate.length; i++) {
    rate[i].addEventListener("click", function () {
      console.log(hi);
      console.log(this.value);
    });
  }
  bon.addEventListener("click", function () {
    con2.classList.toggle("active");
    con1.classList.toggle("active");
  });
});
