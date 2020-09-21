import prices from "./prices.js";

const $checkbox = document.getElementById("checkbox");
const $allPrices = document.querySelectorAll(".price--cost--important-text");
const $themeButton = document.querySelector(".icon");
const $body = document.querySelector(".body");

let isDark = true;

if (!window.matchMedia("(prefers-color-scheme: dark)")?.matches) {
  isDark = false;
  $themeButton.innerText = "brightness_2";
} else {
  $body.classList.add("dark-mode");
}

$themeButton.addEventListener("click", function () {
  if (isDark) {
    this.innerText = "brightness_2";
    $body.classList.remove("dark-mode");
    isDark = false;
  } else {
    this.innerText = "flare";
    $body.classList.add("dark-mode");
    isDark = true;
  }
});

function changePrice(type) {
  Object.keys(prices[type]).forEach((price, i) => {
    $allPrices[i].innerHTML = prices[type][price];
  });
}

$checkbox.addEventListener("change", function (event) {
  this.checked ? changePrice("monthly") : changePrice("annually");
});
