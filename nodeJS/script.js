#!/usr/bin/env node

const fs = require("fs");

console.log(
  fs.readdir(process.cwd(), (err, files) => {
    if (err) {
      console.log("Houston, we have a problem");
      console.log(err);
      throw new Error(err);
    }
    console.log(files);
  })
);
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

// const counterObject = require('./myscript')

// console.log(counterObject.getCounter())
// counterObject.incrementCounter()
// console.log(counterObject.getCounter())

// const newCounterObject = require('./myscript')

// console.log(newCounterObject.getCounter())
// counterObject.incrementCounter()

// const newestCounterObject = require('./myscript')
// console.log(newestCounterObject.getCounter())
