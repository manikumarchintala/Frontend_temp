document.addEventListener("DOMContentLoaded", revealcontent);
function revealcontent() {
  const headcontent = document.querySelectorAll(".HeaderContent");
  const hideencontent = document.querySelectorAll(".riddle");
  //console.log(headcontent);
  headcontent.forEach((head) => {
    head.addEventListener("click", function () {
      //const para = document.getElementsByClassName(".riddle");
      //console.log(para);
      //console.log(hideencontent);
      if (head.classList.contains("riddle")) {
        head.classList.remove("riddle");
      } else {
        head.classList.add("riddle");
      }
    });
  });
}
