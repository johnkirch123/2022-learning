// Basic Types
let id: number = 5;
let company: string = 'John Kirch Media';
let isPublished: boolean = true;
let x: any = 'What?';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, [1, 2, 3], 'House', true];

// Tuple
let person: [number, string, boolean] = [1, 'John', true];
// Tuple Array
let employee: [number, string][] = [
  [1, 'John'],
  [2, 'Ashley'],
  [3, 'Bill']
];

// Union
let pid: string | number = 22;

// Enum - can set to strings as well
enum Directions {
  North = 1,
  South,
  East,
  West
}

console.log(`South: ${Directions.South}`);

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John'
};

console.log(user);

let cid: any = 5;
let customerId = cid as string;
customerId = '5';

function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(5, 8));
console.log(addNum(7, 9));

function log(message: string | number): void {
  console.log(message);
}

log('Hello');

// Interfaces - question mark is optional
interface UserInterface {
  readonly id: number;
  name?: string;
}

const user1: UserInterface = {
  id: 1,
  name: 'John'
};

const user2: UserInterface = {
  id: 1
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes - private, public, or protected variables
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Bob', 'Manager');

console.log(emp.name);
console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'John', 'Jill']);

// numArray.push('hello');
strArray.push('hello');
numArray.push(5);
