// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
sayHi(john);
sayHi(peter);
sayHi(names.john);
sayHi(names.peter);

// console.log(names);
console.log(data);

//invoke code (run all functions present with included variables)
require("./7-mind-grenade");
