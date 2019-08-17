const chalk = require('chalk')
const string = require('useful-string')
const _ = require('lodash/times')


const names = [
    "Felipe Godinho de Almeida",
    "Francine de Fátima Braga Amorim",
    "Gerson Lourenço de Carvalho",
    "Pereira da Conceição"
   ];
   
   console.log('id: '+chalk.red(string.guid()))

   const print = name => console.log(chalk.blue(name));
   
   names
     .map(string.hyphenate)
     .forEach(print);
   
    _(4, () => console.log("ABC"))
