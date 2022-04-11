"use strict";
let id = 5;
let company = 'Crypto Cavemen';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'John', true];
// Tuple Array
let employee;
employee = [[1, 'John'], [2, 'Brad'], [3, 'Sarah']];
// Union
let pid;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Up);
// Objects
// type User = {
//     id: number,
//     name: string
// }
// const user: User = {
//     id: 1,
//     name: 'John'
// }
// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'John'
// }
// console.log(user)
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(3, 4))
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const john = new Person(1, 'John');
const mike = new Person(2, 'Mike');
// console.log(john.register())
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'John', 'CEO');
console.log(emp.register());
