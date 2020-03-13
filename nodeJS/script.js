// function(exports, require, module, __filename, __dirname) {
// const message = require('./myscript')
// console.log(message) //Hi There!

// }

//========================
// console.log(arguments)
// console.log(require)
// console.log(module)
// console.log(__filename)
// console.log(__dirname)
//========================

const counterObject = require('./myscript')

console.log(counterObject.getCounter())
counterObject.incrementCounter()
console.log(counterObject.getCounter())

const newCounterObject = require('./myscript')

console.log(newCounterObject.getCounter())
counterObject.incrementCounter()

const newestCounterObject = require('./myscript')

console.log(newestCounterObject.getCounter())
