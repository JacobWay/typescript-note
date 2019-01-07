/**
 * Basic Types
 * Variable Declarations
 * Interfaces
 * Classes
 * Functions
 * Generics
 * Enums
 * Type Inference
 * Type Compatibility
 * Advanced Types
 * Symbols
 * Iterators and Generators
 * Modules
 * Namespaces
 * Namespaces and Modules
 * Module Resolution
 * Declaration Merging
 * JSX
 * Decorators
 * Mixins
 * Triple-Slash Directives
 * Type Checking JavaScript Files
 */

 
 /**
  * Basic Types
  */

  

interface LabelledValue {
    name: string
}

function printLabel(labelObj: LabelledValue) {
    console.log(labelObj.name)
}

const labelObj = {
    name: 'labelName'
}

// printLabel(labelObj)

interface SquareConfig {
    color?: string,
    width?: number,
    [propName: string]: any
}

function createSquare(config: SquareConfig): {color: string, area: number} {
    let newSquare = {
        color: 'blue',
        area: 0
    }
    let {color, width} = config
    // console.log(color, width)

    if(config.color) {
        newSquare.color = color
    }
    if(config.width) {
        newSquare.area = width * width
    }

    return newSquare

}

let squareConfig = {
    colour: 'red',
    color: 'blue'
}

let mySquare = createSquare(squareConfig)

// console.log(mySquare)

interface Point {
    readonly x: number,
    readonly y: number
}

let p1: Point = {
    x: 10,
    y:20,
}

// console.log(p1.x)

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a


// Excess Property Checks


interface SearchFunc {
    (source: string, subString: string): boolean,
}

let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}


let result = mySearch('abc', 'ad')

// console.log(result)

// Indexable Types
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// console.log(myStr)

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}


// Class Types
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface
}
interface ClockInterface {
    tick(): any;
}
function createClock(ctor: ClockConstructor, h: number, m: number): ClockInterface{
    return new ctor(h, m)
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log('tick tock')
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log('beep beep')
    }
}

let digital = createClock(DigitalClock, 12, 17)
// console.log(digital.tick())

// Extending Interfaces
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square: Square = <Square>{}
square.color = "blue";
square.sideLength = 10;
// console.log(square)


// Hybrid Types
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {};
    counter.interval = 123;
    counter.reset = function() {};
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// console.log(c)


class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.
class Image_ extends Control implements SelectableControl {
    select() { }
}

class Location_ {

}

