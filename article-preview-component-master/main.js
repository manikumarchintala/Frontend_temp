document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#share");
  const list = document.querySelector("#list");
  const profile = document.querySelector("#profile");
  button.addEventListener("click", function () {
    list.classList.toggle("active");
  });
  console.log(profile);
  button.addEventListener("click", function () {
    profile.classList.toggle("active");
  });
});
