const laptop = require('./Models/Laptop/laptop')

let dell = new laptop(500,4,1.6,8,18,"Dell","25000","Ubuntu",334012);

console.log(dell.printString())

module.exports = dell 