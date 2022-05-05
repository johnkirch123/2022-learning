"use strict";
// Basic Types
let id = 5;
let company = 'John Kirch Media';
let isPublished = true;
let x = 'What?';
let ids = [1, 2, 3, 4, 5];
let arr = [1, [1, 2, 3], 'House', true];
// Tuple
let person = [1, 'John', true];
// Tuple Array
let employee = [
    [1, 'John'],
    [2, 'Ashley'],
    [3, 'Bill']
];
// Union
let pid = 22;
// Enum - can set to strings as well
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 1] = "North";
    Directions[Directions["South"] = 2] = "South";
    Directions[Directions["East"] = 3] = "East";
    Directions[Directions["West"] = 4] = "West";
})(Directions || (Directions = {}));
console.log(`South: ${Directions.South}`);
const user = {
    id: 1,
    name: 'John'
};
console.log(user);
let cid = 5;
let customerId = cid;
customerId = '5';
function addNum(x, y) {
    return x + y;
}
console.log(addNum(5, 8));
console.log(addNum(7, 9));
function log(message) {
    console.log(message);
}
log('Hello');
const user1 = {
    id: 1,
    name: 'John'
};
const user2 = {
    id: 1
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes - private, public, or protected variables
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const john = new Person(1, 'John');
const brad = new Person(2, 'Brad');
console.log(john, brad);
console.log(john.register());
// Sub Class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Bob', 'Manager');
console.log(emp.name);
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'John', 'Jill']);
// numArray.push('hello');
strArray.push('hello');
numArray.push(5);
