document.addEventListener("DOMContentLoaded", total);
const Data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];
function total() {
  let final = 0;
  let len = Data.length;
  for (let i = 0; i < len; i++) {
    final = Data[i].score + final;
    document.getElementsByClassName("`${Data[i].category}`").innerText =
      Data[i].category;
    console.log(Data[i].category);
  }

  var out = Math.floor(final / len);
  document.getElementById("mark").innerText = out;
}
