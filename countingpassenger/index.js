//document.getElementById("count").innerText = 5;
// function increment() {
//   console.log("button was clicked!!");
// }
let count = 0;

function increment() {
  count = count + 1;
  document.getElementById("count-el").innerText = count;
}

function decrement() {
  if (count != 0) {
    count = count - 1;
    document.getElementById("count-el").innerText = count;
  } else {
    document.getElementById("count-el").innerText = "opps !";
  }
}
