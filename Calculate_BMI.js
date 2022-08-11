function bmi(weight, height) {
    const bmi1 = weight/(height*height);
    if (bmi1 <= 18.5) return "Underweight"
    if (bmi1 <= 25 && bmi1 > 18.5) return "Normal"
    if (bmi1 <= 30 && bmi1 > 25) return "Overweight"
    if (bmi1 > 30) return "Obese"
}