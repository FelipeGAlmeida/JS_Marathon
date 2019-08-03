let numberA = 11
let numberB = 31

/* Simple sum */
const total = numberA + numberB
console.log('Total: '+total)

/* Terminal sum (default) */
let sum = 0
process.argv.slice(2).forEach(element => {
    sum += Number(element)
});
console.log('The sum is '+sum)

/* Terminal sum (new way) */
const toInt = value => Number(value) // function that converts the values
const sum_all = (t, v) => t + v // function that sum the values, args are accumulator and value
const raw_values = process.argv.slice(2) // get the values
//console.log(raw_values)
const int_values = raw_values.map(toInt) // map them to int values
//console.log(int_values)
const red_values = int_values.reduce(sum_all) // reduce them to the sum
console.log('The sum is '+red_values)
