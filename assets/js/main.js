const btns = document.querySelectorAll("button");
const result = document.querySelector(".result");
const calculation = document.querySelector(".calculation");
const equality = document.getElementById("equality");
const mainCard = document.querySelector(".main-card");
const downPart = document.querySelector(".down-part");
const dayMode = document.querySelector(".day-mode");
const operationsDivs = document.querySelectorAll(".grey-backg");

// create calculator functionality
let calculation1 = [];
let acc;
function calculateBybtn(button) {
  let value = button.textContent;
  if (value === "AC") {
    calculation1 = [];
    result.textContent = " ";
  } else if (value === "=") {
    acc = acc.replace(/x/g, "*").replace(/÷/g, "/");
    result.textContent = eval(acc);
    calculation.value = " ";
  } else {
    calculation1.push(value);
    acc = calculation1.join("");
    calculation.value = acc;
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => calculateBybtn(btn));
});

function calculationBykeyboard(e) {
  const value = e.target.value;
  calculation1.push(value);
  acc = calculation1.join("");
  calculation.value = acc;
  equality.addEventListener("click", () => {
    result.textContent = eval(acc);
  });
}
calculation.addEventListener("change", calculationBykeyboard);

// night mode

function darkMode(e) {
  document.body.classList.toggle("body-night");
  mainCard.classList.toggle("main-card-night");
  downPart.classList.toggle("down-part-night");
  btns.forEach((btn) => btn.classList.toggle("btn-night"));
  calculation.classList.toggle("calculation-night");
  operationsDivs.forEach((i) => i.classList.toggle("pink"));
  result.classList.toggle("result-night");
  e.target.classList.toggle("night-mode");
}
dayMode.addEventListener("click", darkMode.bind(null));
