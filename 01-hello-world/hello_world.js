console.log('Hi there !')

/* Direct var */
const name = 'Bardok'
console.log(`Hello ${ name }, welcome!`)

/* From a function */
function getName(){
    return 'Golen'
}
console.log(`Hello ${ getName() }, welcome!`)

/* From another function */
const getNameLite = () => 'Kurt'
console.log(`Hello ${ getNameLite() }, welcome!`)

/* From terminal */
console.log(`Hello ${ process.argv[2] }, welcome!`)