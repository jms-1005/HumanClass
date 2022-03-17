"use strict";
/*
    OOP
    1. Cohesiveness (Encapsulation)
    2. Abstration (access control)
    3. Inheritance (extend to a child)

    Class have:
    1. Properties
    2. Methods
    3. Constructor
*/
exports.__esModule = true;
var human_module_1 = require("./Modules/human.module");
var Steve = new human_module_1.HumanBeing({
    name: 'Stephen J Junior',
    eyeColor: 'brown',
    hairColor: 'blonde',
    height: 6,
    weight: 85,
    birthdate: 10
});
console.log(Steve.health());
// let Mary = new HumanBeing('Mary Ann Matthew', 'green', 'brown', 6, 75, 20);
// console.log(Mary.health());
// President inherits all the properties and methods of HumanBeing
var BillClinton = new human_module_1.President({
    name: 'Bill J Clinton',
    eyeColor: 'black',
    hairColor: 'red',
    height: 6.2,
    weight: 76,
    birthdate: 25
});
console.log(BillClinton.health());
console.log(BillClinton.signAgreement());
.gitignore
