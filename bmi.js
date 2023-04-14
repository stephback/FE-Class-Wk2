let weight = 480; // lbs
let height = 78; // inches 
const METRIC_CONVERSION = 703;

/* Take weight / height^2
Then divide by 703? <-- what is this?! <Metric conversion>
Something about magic numbers? */

let bmi = (weight/height * height) * 703;
// alt route Math.pow(height, 2)

console.log("Your weight is: " + weight + "lbs");
console.log("Your height is: " + weight + "in");
console.log("BMI: " + bmi);

// If less than 18.5, then underweight
if(bmi < 18.5) {
    console.log("You are underwieght.");
} else if (bmi < 24.9 && bmi >= 18.5){
    console.log("You are a healthy weight!");
} else if (bmi < 29.9 && bmi >= 25.0){
    console.log("You are overweight.");
} else if (bmi > 30 && bmi >= 30.0){
    console.log("You are obese.")
} else {
    console.log("You are morbidly obese.")
}
