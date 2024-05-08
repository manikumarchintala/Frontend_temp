document.addEventListener("DOMContentLoaded", function () {
  const date = document.getElementById("d");
  const month = document.getElementById("m");
  const year = document.getElementById("y");
  const dat = document.getElementById("da");
  const mont = document.getElementById("mo");
  const yea = document.getElementById("ye");
  const button = document.getElementById("on");
  const d = document.getElementById("years");
  const m = document.getElementById("months");
  const y = document.getElementById("dayss");
  button.addEventListener("click", valid);
  function valid() {
    let day = new Date().getDate();
    let mon = new Date().getMonth() + 1;
    let yer = new Date().getFullYear();
    dat.style.color = date.value > 31 ? "red" : "black";
    mont.style.color = month.value > 12 ? "red" : "black";
    yea.style.color = year.value > 2024 ? "red" : "black";
    const dob = new Date(`${year.value}-${month.value}-${date.value}`);
    const now = new Date();
    const diffMs = now - dob;
    const ageInYears = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
    const diffMsAfterYears =
      diffMs - ageInYears * (1000 * 60 * 60 * 24 * 365.25);
    const ageInMonths = Math.floor(
      diffMsAfterYears / (1000 * 60 * 60 * 24 * (365.25 / 12))
    );
    const diffMsAfterMonths =
      diffMsAfterYears - ageInMonths * (1000 * 60 * 60 * 24 * (365.25 / 12));
    const ageInDays = Math.floor(diffMsAfterMonths / (1000 * 60 * 60 * 24));
    d.textContent = ageInYears;
    m.textContent = ageInMonths;
    y.textContent = ageInDays;
  }
});
