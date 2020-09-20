import prices from "./prices.js";

const $checkbox = document.getElementById("checkbox");
const $allPrices = document.querySelectorAll(".price--cost--important-text");

function changePrice(type) {
  Object.keys(prices[type]).forEach((price, i) => {
    $allPrices[i].innerHTML = prices[type][price];
  });
}

$checkbox.addEventListener("change", function (event) {
  this.checked ? changePrice("monthly") : changePrice("annually");
});
