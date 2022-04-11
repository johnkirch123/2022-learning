
let id: number = 5

let company: string = 'Crypto Cavemen'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'John', true]
// Tuple Array
let employee: [number, string][]

employee = [[1, 'John'], [2, 'Brad'], [3, 'Sarah']]

// Union
let pid: string | number
pid = '22'

// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

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
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

// console.log(addNum(3, 4))

// Void
function log(message: string | number): void {
    console.log(message)
}

// log('Crypto Cavemen da best')

// Interface
interface UserInterface {
    readonly id: number
    name: string
    age?: number
}


const user1: UserInterface = {
    id: 1,
    name: 'John'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes
class Person implements PersonInterface {
    // private id: number
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const john = new Person(1, 'John')
const mike = new Person(2, 'Mike')

// console.log(john.register())
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'John', 'CEO')

// console.log(emp.register())

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['house', 'boat', 'car'])

// numArray.push('hello')














