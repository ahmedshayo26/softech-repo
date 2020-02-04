const laptop = require('../Models/Laptop/laptop');

let myLaptop = require("../index")

test ("test that a string version of the object is returned", () =>{
    expect(myLaptop.checkRam()).toBe(true)
})
