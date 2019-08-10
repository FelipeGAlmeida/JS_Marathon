const BMIService = require('./bmi.service')

const weight = 88;
const height = 1.81;
const prec = 2;

const bmi = BMIService.getIndex(weight, height).toFixed(prec)
console.log("Your BMI is "+bmi)