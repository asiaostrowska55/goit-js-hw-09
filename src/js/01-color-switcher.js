const jsStart = document.querySelector("[data-start]");
const jsStop = document.querySelector("[data-stop]");
const body = document.querySelector("body");
let timerID;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

jsStart.addEventListener("click", () => {
  jsStart.disabled = true;
  timerID = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
});

jsStop.addEventListener("click", () => {
  jsStop.disabled = true;
  jsStart.disabled = false;
  clearInterval(timerID);
});
