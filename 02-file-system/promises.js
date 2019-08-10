const fs = require('fs')

function getWeatherForecast(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Sunshine', 1000))
        setTimeout(() => reject('Sorry, cant get the forecast now'), 1000)
    })
}

getWeatherForecast().then(data => {
    console.log(data)
}).catch(error => console.log(error))

//Second part !

function readFile(filename){
    var extra = ""
    if(filename.includes('log')) extra = filename + " last saved at " + new Date().toISOString()
    else extra = "DM124 - Node.js"
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (error, fileContent) => {
            if(error) reject(error)
            resolve({filename, fileContent, extra})
        })
    })
}

function addToLog(data){
    const {filename, fileContent} = data
    return new Promise((resolve, reject) => {
        readFile('my-logfile2.txt').then(writeData)
    })
}

function writeData(data){
    const {filename, fileContent, extra} = data
    return new Promise((resolve, reject) => {
        const newContent = fileContent + "\n" + extra
        fs.writeFile(filename, newContent, (error) => {
            if(error) reject(error)
            resolve({filename, fileContent: newContent})
        })
    })
}

readFile('my-file.txt')
    .then(writeData)
    .then(addToLog)
    .then(a => console.log(a.msg))
    .catch(error => console.log(error))