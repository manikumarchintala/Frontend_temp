document.addEventListener("DOMContentLoaded", function () {
  const userName = document.getElementById("user");
  let button = document.getElementById("bon");
  //   console.log(userName.value);
  //   console.log(button);
  button.addEventListener("click", function () {
    const data = userName.value;
    console.log(data);
  });
});
