// document.getElementById("count").textContent = 5;
// function increment() {
//   console.log("button was clicked!!");
// }
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
  count += 1;
  countEl.textContent = count;
}

function decrement() {
  if (count != 0) {
    count -= 1;
    countEl.textContent = count;
  }
}

function save() {
  let countNum = count + " - ";
  saveEl.textContent += countNum;
  console.log(count);
}

// let welcomeEl = document.getElementById("welcome-el");
// let username = "Rimi";
// let greeting = "Welcome Back ! ";

// welcomeEl.innerText = greeting + username;
// welcomeEl.innerText += "👋";
