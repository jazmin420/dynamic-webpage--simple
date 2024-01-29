function calculateBMI() {
  // Get user input
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;

  // Calculate BMI
  let bmi = weight / (height * height);
  let category;
            if (bmi < 18.5) {
                category = "Underweight";
            } else if (bmi < 25) {
                category = "Normal weight";
            } else if (bmi < 30) {
                category = "Overweight";
            } else {
                category = "Obese";
            }

  // Display the result
 if(weight == "" || height == ""){
alert("please enter your height and weight!!")
}
else {
  document.getElementById('resultBmi').innerText = `Your BMI is ${bmi.toFixed(2)} which is considered ${category}`;
}
 
}


