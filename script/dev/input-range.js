const yearValue = document.getElementById("making-order-range-label");
const yearInput = document.getElementById("making-order-range");

yearValue.textContent = yearInput.value + ' %';
yearInput.addEventListener("input", (event) => {
  yearValue.textContent = yearInput.value + ' %';
});