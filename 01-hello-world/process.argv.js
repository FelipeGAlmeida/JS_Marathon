const firstDataReceived = 2

console.log(process.argv) //Receives arguments from terminal

const payload = process.argv[firstDataReceived] || 'No data'
console.log(payload)