document.getElementById("calc").addEventListener("click", calculateBmi);
function calculateBmi() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("Weight").value;
  let BMI;
  BMI = (weight / (height * height)) * 10000;
  console.log(BMI);

  let Value = document.getElementById("value");
  Value.textContent = BMI;
  Value.style.fontWeight = "bold";
  Value.style.color = "red";
}
