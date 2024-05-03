document.addEventListener("DOMContentLoaded", revealcontent);
function revealcontent() {
  const headcontent = document.querySelectorAll(".accord");
  headcontent.forEach((head) => {
    head.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
}
