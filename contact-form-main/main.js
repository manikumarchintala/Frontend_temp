let submit = document.getElementById("sub");
document
  .getElementById("ContactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let fNam = document.getElementById("fnam");
    let P1 = document.getElementById("p1");
    if (fNam.value === "") {
      P1.innerText = "This field is required";
    }
  });
