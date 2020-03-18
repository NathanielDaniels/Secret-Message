#!/usr/bin/env node

const fs = require("fs");
const util = require("util");
const chalk = require("chalk");

// METHOD #2
// const lstat = util.promisify(fs.lstat);

// METHOD #3
const { lstat } = fs.promises;

const targetDir = process.argv[1] || process.cwd();
// console.log(targetDir);

fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) {
    console.log("Houston, we have a problem");
    console.log(err);
  }

  for (let filename of filenames) {
    try {
      const stats = await lstat(filename);
      // console.log(filename, stats.isFile());
    } catch (err) {
      console.log("err0r:", err);
    }
  }
  const statPromises = filenames.map(filename => {
    // console.log(lstat(filename));
    return lstat(filename);
  });

  const allStats = await Promise.all(statPromises);
  console.log(allStats);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(chalk.blue(filenames[index]), stats.isFile());
    } else {
      console.log(chalk.bold(filenames[index]), stats.isFile());
    }
  }
});

// METHOD #1
// const lstat = filename => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err)
//       }

//       resolve(stats)
//     })
//   })
// }

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
