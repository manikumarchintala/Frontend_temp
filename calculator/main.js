let screen = document.querySelector(".screen");
let val = document.querySelector(".val");
let clear = document.querySelector(".b");
let plus = document.querySelector(".o");
let minus = document.querySelector(".k");
let mul = document.querySelector(".g");
let div = document.querySelector(".c");
let equals = document.querySelector(".q");
let cancel = document.querySelector(".a");
let remove = document.querySelector(".b");
var arr1 = new Array();
let boo1 = true;
var arr2 = [0];
let boo2 = false;
let add;
var obj = [
  ["", false],
  ["", false],
  ["", false],
  ["", false],
];
val.addEventListener("click", function (event) {
  if (boo1 === true) {
    arr1.push(parseInt(event.target.value));
    screen.innerText = parseInt(arr1.join(""));
  } else {
    arr2.push(parseInt(event.target.value));
    screen.innerText = parseInt(arr2.join(""));
  }
});
plus.addEventListener("click", function (event) {
  boo1 = false;
  obj[0][1] = true;
  screen.innerText += event.target.value;
});
minus.addEventListener("click", function (event) {
  boo1 = false;
  obj[1][1] = true;
  screen.innerText -= event.target.value;
});
mul.addEventListener("click", function (event) {
  boo1 = false;
  obj[2][1] = true;
  screen.innerText -= event.target.value;
});
div.addEventListener("click", function (event) {
  boo1 = false;
  obj[3][1] = true;
  screen.innerText -= event.target.value;
});
equals.addEventListener("click", function () {
  for (var i = 0; i < obj.length; i++) {
    if (obj[0][1] == true) {
      add = parseInt(arr2.join("")) + parseInt(arr1.join(""));
      obj[i][0] = parseInt(add);
      screen.innerText = parseInt(obj[i][0]);
    } else if (obj[1][1] == true) {
      add = parseInt(arr1.join("")) - parseInt(arr2.join(""));
      obj[i][0] = parseInt(add);
      screen.innerText = parseInt(obj[i][0]);
    } else if (obj[2][1] == true) {
      add = parseInt(arr1.join("")) * parseInt(arr2.join(""));
      obj[i][0] = parseInt(add);
      screen.innerText = parseInt(obj[i][0]);
    } else if (obj[3][1] == true) {
      add = parseInt(arr1.join("")) / parseInt(arr2.join(""));
      obj[i][0] = parseInt(add);
      screen.innerText = parseInt(obj[i][0]);
    }
  }
});
cancel.addEventListener("click", function (event) {
  arr1 = new Array();
  arr2 = [0];
  screen.innerText = parseInt(arr1.join(""));
});
remove.addEventListener("click", function (event) {
  if (boo1 === true) {
    arr1.pop();
    screen.innerText = parseInt(arr1.join(""));
  } else {
    arr2.pop();
    screen.innerText = parseInt(arr2.join(""));
  }
});
