let output = document.getElementById("output");

function calculateCelcius() {
  let temp = Number(document.getElementById("input").value);
  let celcius = ((temp - 32) * 5) / 9;

  output.textContent = celcius.toFixed(2) + " °C";
}
