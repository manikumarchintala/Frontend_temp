document.addEventListener("DOMContentLoaded", main);
function main() {
  let submit = document.getElementById("sub");
  let fNam = document.getElementById("fnam");
  console.log(fNam);
  submit.addEventListener("click", function () {
    console.log(fNam);
    if (fNam.value === "") {
      console.log("hi there");
    } else {
      console.log("hi");
    }
  });
}
