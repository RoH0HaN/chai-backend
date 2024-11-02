# JavaScript Notes

console.log(”Hello world”)

JavaScript is Dynamically Typed Language, because we don’t specify the type of data, it automatically recognise it

## Variable types:

Variable an be written a follows:

```jsx
const name = "Rohan Debnath"
let userId = 25900122052
var age = 22
hobby = "coding" // This is also a way, but please don't use it.. it is a dirty way
let jobDesignation
let anotherJobDesignation = undefined // Both are same, JavaScript auto add 'undefined'

/*
The 'const' means a constant variable, means which we cannot
be changed after we initialize it once

'let' and 'var' is simillar but there is a slight difference, thts why we dont use
'var' in codes.. because the 'var' does'nt have any control over the BlockScope or Scope

So, please do not use 'var' because of issue in block scope and functional scope

in the last one 'jobDesignation' we not assign any value to the variable, so its value
will be 'undefined'
*/

console.table([name, userId, age, hobby, jobDesignation])
// **This prints all the values in a tabular format
```

## User Input in JavaScript

### 1. **In a Browser (using `prompt`)**:

You can use the `prompt()` function to capture user input in a browser environment.

```jsx
let name = prompt("What is your name?");
let age = prompt("What is your age?");

console.log(`Hello ${name}, you are ${age} years old.`);
```

**`prompt()`**: Displays a dialog box asking for user input. The input is always returned as a string.

### 2. **In Node.js (using `readline` module)**:

In a Node.js environment, the `readline` module is commonly used to capture user input from the command line.

```jsx
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("What is your name? ", (name) => {
  readline.question("What is your age? ", (age) => {
    console.log(`Hello ${name}, you are ${age} years old.`);
    readline.close();
  });
});
```

**`readline.question()`**: Takes user input in the terminal and passes it to a callback function.

## Datatypes:

Datatypes in JavaScript are as follows:

`“use strict”`  If we put this in the fist line of code file, then the compiler will treat our whole file codes as newer JavaScript version codes.

Officially Datatypes are divided into two categories, The division criteria is:

> How the data is stored in memory & how the data is accessed from memory
> 

### The two categories are:

1. **Primitive
Uses Stack Memory**
The case with primitive datatype is that, it uses ‘call by value’ means every time i we use it or assign it to other the value get copies every time. The exact memory path is not provided. If we modify it then it will be on copied value not the exact one

There are 7 types of primitive datatypes:
String, Number, Boolean, null, undefined, Symbol, BigInt
2. Non-Primitive (Reference)
Uses Heap Memory
The case with reference type is that, it uses ‘call by reference’ so that the actual memory path will be assigned, so any changes will affect the original value

There are 3 types of reference datatypes
Array, Objects, Functions

```jsx
/*
number => All the numbers (Integer, Float, Double), Max Range is 2**53
bigint => also a number but the capacity is big
string => Everything in double quots "" is a string
boolean => true/false
undefined => If we don't define any value of some variable, then it will be undefined
null => It is a standalone value, it referes 'Empty', Empty & undefined are not same thing
symbol => Referes to some unique thing, no mathher if the value is same
object => Some <Key, Value> paires

**if we print the type of null, it will print 'object' but for undefined prints 'undefined'
*/

let id = Symbol('123')
let anotherId = Symbol('123')
// Prints 'false' because value might be same but both are unique itself
console.log(id === anotherId)

let isLoggedIn = true
console.log(typeof isLoggedIn) // It prints the type of variable
console.log(typeof(isLoggedIn)) // Another way of using 'typeof' function

// Arrays
let programingLanguages = ['java', 'dart', 'python']

// Objects
let user = {
	name: "Rohan Debnath",
	id: 25900122052,
	hobby: "Coding",
}
console.log(user.name) // Access data using "." dot

// Function Expression
let MyFunction = function() {
	console.log("Hello World")
}

// **String Interpolation
let name = "Rohan"
let age = 22
console.log(`My name is ${name} and my age is ${age}`) // Use Back Tick [`]
```

## Datatype Conversion:

Datatypes can be converted in JavaScript:

```jsx
let score = "33"
let numberScore = Number(score) // This Number() converts any String value to Number

let anotherScore = "33abc"
let anotherNumberScore = Number(anotherScore)
/*
But for the second one there is a catch, here some alphabets are attached to the number
so the JavaScript tries to convert it to number
*/
console.log(typeof(anotherNumberScore)) // Output will be number
console.log(anotherNumberScore) // The output will be 'NaN'
/*
The compiler converts it to number but its 'Not a Number' or 'NaN' because some
aplphabets are attached with it.
*/

// so like Number(), we have also String(), Boolean() methods for conversion

let someNumber = 1
let convertedBoolean = Boolean(someNumber)
console.log(convertedBoolean) // Prints 'true' because 1 means 'true' & 0 means 'false'

let string1 = ""
let string2 = "Hello"
let boolValue = Boolean(string1) // will be 'false' because the String is empty
let boolValue = Boolean(string2) // Will be 'true' because String is not empty
```

## Comparison of datatypes:

All the basic Relational Operators are used in comparison:

```jsx
/* 
<, <=, >, >=, ==, != [These are the basic operators]
*/

let check = "2" > 1 // Here "2" will be converted in Number automatically in runtime
										// Answer will be in Boolean
console.log(null > 0) // Prints 'false'
console.log(null == 0) // Prints 'false'
console.log(null >= 0) // Prints 'true'

/*
The reason why the '>=' is true because, an Equality check '==' and Comparisons
'>, <, >=, <=' works differently.
*Comparisons converts 'null' as a number, treating it as '0'
*/

/*
Strict check, '===' this Equal check operator not only the values but also the Datatype
if the valus are same but the Datatype is not same then it will return 'false'
*/

console.log("2" == 2) // Prints 'true' beacuse it converts string to number in runtime
console.log("2" === 2) // Print false because the datatype is not same
```

## Arrays:

```jsx
// Arrays are written within '[]', can consists different types of elements
const myArr = ['Rohan', 'Debnath', 22, true]
const newArr = new Array(1,2,3,4)

// It is an 'Object', in JS arrays can be resizeable.

/*
Whenever we copies an array, it makes shallow copies.

Shallow Copy: A shallow copy an object is a copy whose properties share the same references
Deep Copy: A deep copy an object is a copy whose properties do not share the same references
*/

myArr.push("Codeing") // Insert elements at array at end.
myArr.pop() // Removes the last value from array.

myArr.unshift(0) // Add 0 at the start of the array, and shifts other values
myArr.shift() // Remove the first element and shift others

myArr.includes(22) // Returns Boolean, check if includes or not
myArr.indexOf(22) // Returns the index if exists, otherwise returns '-1'

const newArr2 = myArr.join() // It joins all the elements seperated by ',' and makes a single string

/* Slice and Splice */

// Slice: Returns a copy of a section of an array
const arr = [0,1,2,3,4,5]
console.log('A ', arr)
const sliceArr = arr.slice(1, 3) // Begin copy from index 1, and excludes 3
console.log(sliceArr)
console.log('B ', arr)

/* Output: Dont affect the original array, insted changes are made on a copied
	A [ 0, 1, 2, 3, 4, 5]
	[ 1, 2 ]
	B [ 0, 1, 2, 3, 4, 5 ]
*/

// Splice: Remove the elements from orif=ginal array, and returns new array with removed elements
const arr2 = [0,1,2,3,4,5]
console.log('A ', arr2)
const spliceArr = arr2.splice(1, 3) // Begin remove from index 1, and includes 3
console.log(spliceArr)
console.log('B ', arr2)

/* Output: Original array is affected, elements are removed from the original array
	A [ 0, 1, 2, 3, 4, 5]
	[ 1, 2, 3 ]
	B [ 0, 4, 5 ]
*/

const meArr = ["Rohan", "Debnath"]
const friendArr = ["Sumanta", "Biswas"]
const friendArr2 = ["Zunaid", "Ahammed"]
const languages = ["web", ["JavaScript", "HTML", "CSS"], "android", ["Flutter", "Java", "Python"]]

// concat fuction merges two arrays and returns a new array
const concatedArr = myArr.concat(friendArr)

// But in Concat function we can merge only two arrays, insted of that there is a new operator that can helps to merge more than 2 arrays
const mergedArr = [...meArr, ...friendArr, ...friendArr2]

// Flat() function can destructure nested arrays like 'languages'
/*
	Flat takes a parameter of 'depth' means how many nesting depth is there array inside array is '1'
	array inside array inside array is '2', or we can simply say 'Infinity' to automatic aqqire the depth
*/
const destructArr = languages.flat(Infinity) 
console.log(destructArr)

/* Output:
	["web", "JavaScript", "HTML", "CSS", "android", "Flutter", "Java", "Python"]
*/
```

## Objects:

Objects can be declared in JavaScript as two types:

1. Constructor

`Object.create` The Constructor way
By using constructor way, objects are created as ‘Singleton’
⇒ The Singleton Pattern ensures that a class can only have a single instance throughout the lifetime of an application. 
2. Literal

By using literal way, multiple instances are created

```jsx
// Objects Literals
// Objects are consists of <Key, Value> pair, Behind the scenes the keys are considerd as 'Strings'

const user = {
	name: "Rohan",
	"full name" : "Rohan Debnath"
	age: 22,
	location: "Krishnanagar"
	email: "rohan251@outlook.com",
	isLoggedIn: false,
	lastLogin: ["Monday", "Friday"]
}

// How to acces objects
/*
	There are two ways of accesing an object,
	1. objectname.key
	2. objectname["key"]

	The second method has some extra, why?
	Example:
	const user = {
		name: "Rohan",
		"full name": "Rohan Debnath",
	}
	Behind the scene the keys are treated as a string, but what if we explicitly defined it as a string?
	then using '.' method we can't acces it, we need to use the 2nd way

	**But in general we will use the the 1st method, but for some special cases we will use 2nd method
*/

// console.log(user.full name) / console.log(user."full name") These ways are not possible
console.log(user.name)
console.log(user.["full name"])

// How Symbols are used in Objects as keys?
const mySym = Symbol("Key1")
const user = {
	name: "Rohan",
	"full name": "Rohan Debnath",
	[mySym] : "Key1", // Using '[]' we can use sybmbol as key in objects, otherwise it will be treated a a String
}

console.log(user[mySym]) // No Single/Double quotes are needed

// we can also assign new values to keys,
user.age = 12
user["age"] = 12

// We can also stopes reassigning new values by freezing the object
Object.freeze(user)

// After that if we tries to change the calues of the key, no error will be thrown But no changes will happen
user.age = 18 // No Error, but changes are not applied

// we can add new keys aslo, and also can assign function() as values
user.greetings = function() {
	console.log("Hello User")
}
console.log(user.greetings) // Gives the reference of the function
console.log(user.greetings()) // Executes the function

// We can also refer some values of the object inside object function, using 'this' method
// try to refer the user name in another method

user.welcome = function() {
	console..log(`Welcome, ${this.name}`)
}
console.log(user.welcome())
```

## Some methods related to objects:

```jsx
// Objects Constructor
// Objects are consists of <Key, Value> pair, Behind the scenes the keys are considerd as 'Strings'

const user = new Object()

const user = {}
user.id = "123abc"
user.name = "Rohan"

const regUser = {
	email: "rohan251@outlook.com",
	names: {
		username: "rohan251",
		name: {
			first: "Rohan",
			last: "Debnath",
		}
	}
}
console.log(regUser.names.name.first) // Access first name 

// Merge one or more Objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2}, Wrong way cause it will nest the objects
const obj3 = Object.assign({}, obj1, obj2, obj4)
// The '{}' parameter ensures that result will be definetly an Object, also the '{}' parameter acts as a target, so all the source value copied to a new empty object and avoid ovwerwriting. 
console.log(obj3);

//Otherwise
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target); // Overwrite the target Object
// Expected output: true

// **This thing can also be done using spread operator '...'
const newObj = {...obj1, ...obj2, ...obj4}

// We can access all the keys and values by two methods, and the **output will be returned as an array
//keys()
console.log(Object.keys(user)) // Output: ['id', 'name']
//values()
console.log(Object.values(user)) // Output: ['123abc', 'Rohan']

// entries() can return a nested list and an element of the list is another list with single <Key, Value> index 0=>key, index 1=>value
console.log(Object.entries(user)) // Output: [['id', '123abc'], ['name', 'Rohan']]

// There is also another method to avoid errors in Object, such as if we want to acces a key thaat is not exist, so we can check first wheather it exists or not
console.log(user.hasOwnProperty('name')) // Returns Boolean
```

## Objects destructuring:

```jsx
const user = {
	name: "Rohan Debnath",
	email: "rohan251@outlook.com",
}

/* 
	So everytime we need to acces a value from object we need to type 'objectName.key', sometimes this can be an overhead for large scale codes
	so, to avoid that edstructuring comes in place
*/

// Syntax
const {name} = user
// Now, the value of the key 'name' can dow directly accesed by 'name' only
console.log(name)

// And if we need to store it some other variable we can also do that using destructuring
const {name: fullName} = user // Now the value of key 'name' is stored in a variable called 'fullName'

/*
This is aslo comes in very handy in react.js, Because there suppose navbar holds a method that draws somethig on screen
and it takes any name or some other parameters.
Example: 
const navbar = ({company}) => {
}
navbar (company = "Rohan Ltd.")

..({company}) So, here every time we need to write prop.company.. rather than that destructuring helps alot
*/
```

## Functions and rest operator:

```jsx
// The spread operator '...' is also called rest operator if it used in a function parameter

// Function syntax
function calculatePrice(num) {
	return num
}

console.log(calculatePrice(200,300,400)) // Only the '200' will be printed, cause there is only on parameter and multiple arguments

// Using rest operator
function calculatePrice(...nums) {
	return nums
}

console.log(calculatePrice(200,300,400)) // Returns an array of arguments, so the rest operator converts multiple arguments in an array

function calculatePrice(val1, val2, ..nums) {
	return num
}

console.log(calculatePrice(200,300,400,500,600)) // Output: [400, 500, 600] because 'val1' and 'val2' takes first 2 arguments and rests are converted into array because of rest operator
```

## This keyword and Arrow function:

```jsx
const user = {
	username: "ROhan",
	price: 999,
	welcomeMessage: function() {
		console.log(`${this.username}, welcome to website`);
	}
}

// This keyword refers to corrent context, here 'this' referes the contents of the 'user' object

// **If we print 'this' inside the method, it wll prints the whole 'user' object, because it is it's current context

/*
	**If we print 'this' outside of everything, then it will prints an empty object '{}'
	but this will happen in only node environment, or any other environment eg: dino, bun etc.
	but if we print it in any bowser's console then it will print the 'window' object,
	Because inside browser the global object is 'window object'

	**And if we print 'this' inside any function then will returns a Global object, not empty object
	**This keyword can only be used inside an object, Inside methods we cant refere any variables using 'this', 
	but can print 'this' and it will return a Global object

	Example:
	const name = function () {
		console.log(this)
	}
	name()
*/

name()
function name () {
	console.log("Rohan")
}
// Here i am calling the function before defining it as per code lines, but it is ok. the function still executes

name()
const name = function () {
	console.log("Rohan")
}
// But in this case it will not work, because now we are storing it inside a variable

// Arrow Function
//Basic syntax
() => {}
// Can hold it in a variable aslo
const name = () => {
	console.log(this)
}
// If we remove the 'function' keyword and add an arrow '=>' after function sign then it becomes an arrow function
// **But, inside Arrow function if we print this keyword, it prints an empty object '{}'

// Exaple of 'Explicit return'
const addNum = (n1, n2) => {
	return n1+n2
}
console.log(addNum(10, 20))

// Exaple of 'Implicit return' **No need to use 'return', if it is a single line statement then we can use it
const addNum = (n1, n2) => n1+n2
console.log(addNum(10, 20))

// **2nd way also for implicit return, can wrap using first paranthesis '()'
const addNums = (n1, n2, n3) => (n1+n2+n3)
console.log(addNum(10, 20, 30))

// **Curly bracis '{}' also referes objects thats why if we need to return a object with Implicit return then we need to use '()' first paranthesis
```

## **Immediately Invoked Function Expressions IIFE**

An **IIFE** (Immediately Invoked Function Expression) is a [J](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript)avaScript function that runs as soon as it is defined.

### Uses of IIFE:
Avoid polluting the global namespace

Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern.

```jsx
// Syntax to writing IIFE

(function dbConnect () {
	console.log('DB CONNECTED')
})(); // => This semicolon
/*
	First we wrap the function in first parenthesis '()' then just after that we add another
	first parenthesis '()', the socd one actually executes it just after declaration.
	
	**Compiler actually start the executuion, but don't know when to stop.. that's why if we write
	teo IIFE one after another, then it shows some error, so the best practice is always put a semicolon ';'
	after the execution part
*/

// We caln also write Arrow function as an IIFE
(() => {
	console.log('DB CONNECTED AGAIN')
})();

/*
	We can also pass arguments to the IIFE, where actually we call a function we pass arguments there, so in this case
	the second first parenthesis '()' actually call the IIFE so, we can pass the arguments there.
*/

((name) => {
	console.log(`DB CONNECTED AGAIN ${name}`)
})("Rohan");
```

## High Order Array Loops

```jsx
/*
For...Of loop is a high order loop, it gives directly values.. means, if i use it on an array
then it directly give the values not the index. This loop is aslo used to iterate Map().
Can't be used on Objects{}
*/

const arr = [1,2,3,4,5]
// For of loop
for (const num of arr){
	console.log(num)
}

const greetings = "Hello World"
// For of loop
for (const greet of greetings){
	console.log(greet)
}

/*
For...In loop is a high order loop, it gives the keys only.. means, if i use it on an array
then it directly give the the index which is keys for array. This loop can't be used to iterate Map(),
cause it is not iterable. Object{} can be iterated by this, but only keys can be get
*/
const arr = [1,2,3,4,5]
// For in loop
for (const num in arr){
	console.log(num)
}
// Output: 0 1 2 3 4 // The Index Value
// For in loop
for (const num in arr){
	console.log(arr[num])
}
// Output: 1 2 3 4 5

const myMap = {
  py: "Python",
  kt: "Kotlin",
  js: "JavaScript",
};
// For in loop
for (const value in myMap) {
  console.log(myMap[value]);
}
// Output: Python, Kotlin, JavaScript

/*
For...Each loop is a high order loop, The forEach() method is an iterative method. 
It calls a provided callbackFn function once for each element in an array in ascending-index order.
*/
const arr = ["Python", "Kotlin", "Dart", "Swift"]
// For each loop
arr.forEach((item) => {
	console.log(item)
})
// Output: Python, Kotlin, Dart, Swift
// Second Way:---
function print(item){
	console.log(item)
}
arr.forEach(print)
// Output: Python, Kotlin, Dart, Swift

// For each also provides index, and the array itself with the item inside callBack function
// For each loop
arr.forEach((item, index, array) => {
	console.log(`Item: ${item}, Index: ${index}, Array: ${array}`)
})
/* Output:
Item: Python, Index: 0, Array: Python,Kotlin,Dart,Swift
Item: Kotlin, Index: 1, Array: Python,Kotlin,Dart,Swift
Item: Dart, Index: 2, Array: Python,Kotlin,Dart,Swift
Item: Swift, Index: 3, Array: Python,Kotlin,Dart,Swift
*/
```

## Map

`Map` objects are collections of key-value pairs. A key in the `Map` **may only occur once**; it is unique in the `Map`'s collection. A `Map` object is iterated by key-value pairs — a `for...of` loop returns a 2-member array of `[key, value]` for each iteration. Iteration happens in *insertion order*, which corresponds to the order in which each key-value pair was first inserted into the map by the `set()` method (that is, there wasn't a key with the same value already in the map when `set()` was called).

```jsx
const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
console.log(map);
/* Output:
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'FR' => 'France'
}
*/

map.set('FR', "France")
console.log(map);
/* Output: No Duplicate Value
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'FR' => 'France'
}
*/

// For of loop
for (const data of map) {
  console.log(data);
}
/* Output: will be in separate array for each key, value pair
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'France' ]
*/

// For of loop
for (const [key, value] of map) {
  console.log(key, ":-", value);
}
/* Output: here i can specify key and value separately
IN :- India
USA :- United States of America
FR :- France
*/
```

## Filter(), Map(), Reduce() and CHAINING

```jsx
// FILTER
/*
The filter() method is an iterative method. It calls a provided callbackFn function 
once for each element in an array, and constructs a new array of all the values for 
which callbackFn returns a truthy value. Array elements which do not pass the callbackFn 
test are not included in the new array.
*/

// For Each won't return anything, for that if we need a values based on condition so we can filter()
// filter() also provides index, and the array itself with the item inside callBack function
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
//Output: Array ["exuberant", "destruction", "present"]

// MAP
/*
The map() method is an iterative method. It calls a provided callbackFn function once for
each element in an array and constructs a new array from the results.
*/
// reduce() provides currentIndex, accumulator and the array itself with the currentValue inside callBack function
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Output: Array [2, 8, 18, 32]

// REDUCE
/*
The reduce() method of Array instances executes a user-supplied "reducer" callback 
function on each element of the array, in order, passing in the return value from the 
calculation on the preceding element. The final result of running the reducer across all 
elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous 
calculation". If supplied, an initial value may be used in its place. Otherwise the 
array element at index 0 is used as the initial value and iteration starts from the next 
element (index 1 instead of index 0).

initialValue (Optional)
A value to which accumulator is initialized the first time the callback is called. If 
initialValue is specified, callbackFn starts executing with the first value in the array 
as currentValue. If initialValue is not specified, accumulator is initialized to the 
first value in the array, and callbackFn starts executing with the second value in the 
array as currentValue. In this case, if the array is empty (so that there's no first 
value to return as accumulator), an error is thrown.
*/
// reduce() also provides index, and the array itself with the item inside callBack function
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Output: 10

// CHAINING
const nums = [, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = nums
  .map((num) => num * 10) // all nums as input
  .map((num) => num + 1) // first map's output as input
  .filter((num) => num >= 41) // second map's output as input

// After filter() values stored in 'newNums'
console.log(newNums);
// Output: [41, 51, 61, 71, 81, 91, 101]
```

## DOM (Document Object Model)

![Untitled](Untitled.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>DOM learning</title>
    <style>
        .bg-black{
            background-color: #212121;
            color: #fff;
        }
    </style>
</head>
<body class="bg-black">
    <div >
        <h1  id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">test text</span></h1>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <input type="password" name="" id="">

        <ul>
            <li class="list-item">one</li>
            <li class="list-item">two</li>
            <li class="list-item">three</li>
            <li class="list-item">four</li>
        </ul>
    </div>
</body>
</html>

<!-- All below DOM commands are based on above HTML file -->
```

```jsx
document.getElementById('title')
/* Output: Via this any element can be retrived using just its ID
<h1 id="title" class="heading">
	DOM learning on Chai aur code 
	<span style="display: none;">test text</span>
</h1>
*/

document.getElementById('title').className // By this we can check what is the class name of that element
document.getElementById('title').getAttribute('class') // Can get any attribute values, just by its name

document.getElementById('title').getAttribute('class')
// Output: 'heading'
document.getElementById('title').setAttribute('class', 'test') // Can set any attribute like key-value
// Output: undefined
document.getElementById('title').getAttribute('class')
// Output: 'test' // But it will override the previous values

const title = document.getElementById('title') // We can store the element inside an variable to do furture use
// Output: undefined
title
/* Output: printing the variable's value
<h1 id="title" class="heading">
	DOM learning on Chai aur code 
	<span style="display: none;">test text</span>
</h1>
*/

// Styles of an elevent also can be changes using style option, accecsed by '.'
title.style.backgroundColor = 'green'
// Output: 'green'
title.style.padding = '15px'
// Output: '15px'

title.innerHTML // Prints the inside HTML of that ID's tag
// Output: 'DOM learning on Chai aur code <span style="display: none;">test text</span>'

title.innerText // The hidden content is not visible here, refers to the current visible inner text
// Output: 'DOM learning on Chai aur code'

title.textContent // The hidden content is visible here, referes to the all text content visible & hidden
// Output: 'DOM learning on Chai aur code test text'

const htmlColl = document.getElementsByClassName('list-item')
/* Output: Provides HTMLCollection
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
0: li.list-item
1: li.list-item
2: li.list-item
3: li.list-item
	length: 4
	[[Prototype]]: HTMLCollection
*/

// **Convert HTMLCollection to an Array for further tasks
const htmlCollArray = Array.from(htmlColl)
// Output: undefined
htmlCollArray
/* Output:
(4) [li.list-item, li.list-item, li.list-item, li.list-item]
0: li.list-item
1: li.list-item
2: li.list-item
3: li.list-item
	length: 4
	[[Prototype]]: Array(0)
*/

/* Query Selectors */ //Supports CSS also, can search using css eg: 'p:first-child'
// **document.querySelector() just gives the first element it founds, means only a single value
document.querySelector('#title') // For ID add '#' before ID name
// Output: <h1 id="title" class="test" style="background-color: green; padding: 15px;">…</h1>
document.querySelector('.list-item') // For Class add '.' before Class name
// Output: <li class="list-item">…</li>
document.querySelector('h2') // For Tag's just write tag name
// Output: <h2>Lorem ipsum dolor sit.</h2>

// **document.querySelectorAll() just gives the all values it can find over the page
document.querySelectorAll('li')
/* Output: Privides a 'NodeList' which is not exactly array but very similler
NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]
0: li.list-item
1: li.list-item
2: li.list-item
3: li.list-item
	length: 
	4[[Prototype]]: NodeList
*/
```

### Relations in DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM | Chai aur code</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <div class="parent">
        <!-- this is a comment -->
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
    </div>
</body>
</html>
<!-- All below DOM commands are based on above HTML file -->
```

```jsx
const parent = document.querySelector('.parent')
console.log(parent)
/* Output:
<div class="parent">
    <!-- this is a comment -->
    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">Thursday</div>
</div>
*/
console.log(parent.children)
/* Output:
HTMLCollection(4) [div.day, div.day, div.day, div.day]
0: div.day
1: div.day
2: div.day
3: div.day
	length: 4
	[[Prototype]]: HTMLCollection
*/

for (let i = 0; i < parent.children.length; i++) {
	console.log(parent.children[i]);
	parent.children[i].style.color = 'green'
}

console.log(parent.firstElementChild);
// Output: <div class="day">Monday</div>
console.log(parent.lastElementChild);
// Output: <div class="day">Thursday</div>

const dayOne = document.querySelector('.day')
console.log(dayOne.parentElement)
/* Output:
<div class="parent">
    <!-- this is a comment -->
    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">Thursday</div>
</div>
*/
console.log(dayOne.nextElementSibling)
// Output: <div class="day">Tuesday</div>
```

### Add Element DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chai aur code </title>
</head>
<body style="background-color: #212121; color: #fff;">
    
</body>
</html>
<!-- All below DOM commands are based on above HTML file -->
```

```jsx
const div = document.createElement('div') // Create a div element, but not added in the web page
console.log(div);
// Output: <div></div>
div.className = "main" // add an class attribute named 'main' to the created div
div.id = Math.round(Math.random() * 10 + 1) // add an ID with random()
div.setAttribute("title", "generated title") // add title attribute
div.style.backgroundColor = "green" // added background color
div.style.padding = "12px" // add padding
// div.innerText = "Chai aur code" // method 1: to add contents inside div
const addText = document.createTextNode("Chai aur code")
div.appendChild(addText) // method 2: to add content to div

document.body.appendChild(div) // atlast append the 'div' to the documents 'body'
```

### Edit and Remove element in DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chai aur code | DOM</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <ul class="language">
        <li>Javascript</li>
    </ul>
</body>
</html>
<!-- All below DOM commands are based on above HTML file -->
```

```jsx
//ADD
function addLanguage(langName){
	const li = document.createElement('li'); // Create an ListItem element
	li.innerHTML = `${langName}` // add the language name to the inside of ListItem
	document.querySelector('.language').appendChild(li) // find the 'Ul' and append the 'Li' to it
}
addLanguage("python")
addLanguage("typescript")

//EDIT
const secondLang = document.querySelector("li:nth-child(2)") // select the second 'li' from 'ul'
const newli = document.createElement('li') // create new 'li'
newli.textContent = "Mojo" // add textContent to the 'li'
secondLang.replaceWith(newli) // now replace with the second 'li' which is selected first

// other method to change element
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = '<li>TypeScript</li>' // change the whole HTML to replace existing HTML with new HTML

//REMOVE
const lastLang = document.querySelector('li:last-child')
lastLang.remove() // remove the child
```

## Events

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>htnml Events </title>
</head>
<body style="background-color: #414141; color: aliceblue;">
    <h2>Amazing image</h2>
    <div >
        <ul id="images">
            <li><img width="200px" id="photoshop" src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="photoshop"></li>
            <li><img width="200px" id="japan" src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><img width="200px" id="river" src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" ></li>
            <li><img width="200px" id="prayer" src="https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><a style="color: aliceblue;" href="https://google.com" id="google">Google</a></li>
        </ul>
   </div>
</body>
</html>
<!-- All below JavaScript are based on above HTML file -->
```

```jsx
// It is an approach to add onClick() listener to elements, but not a good approach
document.getElementById('owl').onclick = function() {
  alert('OWL')
}

// Best approach to use EventListener
document.getElementById('owl').addEventListener('click', function () {
  alert('OWL')
})

document.getElementById('owl').addEventListener('click', function (event) {
  console.log(event);
}, false)
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// EVENT BUBBLING
document.getElementById('images').addEventListener('click', function(e){
	console.log("clicked inside the ul");
}, false)

document.getElementById('owl').addEventListener('click', function(e){
	console.log("owl clicked");
	e.stopPropagation() // this method stops the BUBBLING
}, false)
/* Output:
owl clicked
clicked inside the ul
*/

// EVENT CAPTURING
document.getElementById('images').addEventListener('click', function(e){
	console.log("clicked inside the ul");
}, true)

document.getElementById('owl').addEventListener('click', function(e){
	console.log("owl clicked");
}, true)
/* Output:
clicked inside the ul
owl clicked
*/

document.getElementById('google').addEventListener('click',function(e){
	e.preventDefault() // Prevent the default action
	e.stopPropagation()
	console.log("google clicked");
}, false)

// REMOVE ELEMENT
document.querySelector('#images').addEventListener('click', function(e){
	console.log(e.target.tagName);
	if (e.target.tagName === 'IMG') {
		console.log(e.target.id);
		let removeIt = e.target.parentNode
		removeIt.remove()
	}
})
```

## Asynchronous Code

![Untitled](Untitled%201.png)

![Untitled](Untitled%202.png)

```html
<!--SET TIMEOUT FUNCTION EXAMPLE-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Rohan Debnath</h1>
    <button id="stop">Stop</button>
</body>
<script>
    const changeText = function () {
	    document.querySelector('h1').textContent = "Best JavaScript Code" 
    }
    const changeMe = setTimeout(changeText, 2000) // Start the function after 2sec

    document.querySelector('#stop').addEventListener('click', function () {
      clearTimeout(changeMe) // stop the function by clearing the timeout before execute
      console.log('STOPPED'); 
    })
</script>
</html>
```

```html
<!--SET INTERVAL FUNCTION EXAMPLE-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Rohan Debnath</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script>
    let intervalID
    
    const date = (txt) => {
        console.log(txt, Date.now());
    }

    document.querySelector('#start').addEventListener('click', function () {
        if (!intervalID) {
             intervalID = setInterval(date, 1000, "Hello, JS"); 
             // Interval method runs continiously after a time interval
         }
    })
    

    document.querySelector('#stop').addEventListener('click', function () {
        clearInterval(intervalID); // Stops anytime by clearing the interval
        intervalID = null
        console.log('STOPPED');
    })
</script>
</html>
```

### Send API Request and Parse the Response

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTTP Request</title>
</head>
<body>
    <button id="send">Send Request</button>
    
</body>
<Script>
    function addDetailsToCard (res) { // Create a card and show information from response
        const div = document.createElement('div')
        div.className = 'card'
        const img = document.createElement('img')
        img.setAttribute('src', res.avatar_url)
        img.setAttribute('alt', 'Avatar')
        const containerDiv = document.createElement('div')
        containerDiv.className = 'container'
        containerDiv.innerHTML = `<h4><b>${res.name}</b></h4><p>Followers: ${res.followers}</p>`

        div.appendChild(img)
        div.appendChild(containerDiv)
        document.body.appendChild(div)

    }
    function sendRequest() { // Sending API request using XMLHttpRequest()
        const uri = 'https://api.github.com/users/hiteshchoudhary'
        const xhr = new XMLHttpRequest()
        let apiResponse
        xhr.open('GET', uri)
        /* STATES:
          0	UNSENT	Client has been created. open() not called yet.
					1	OPENED	open() has been called.
					2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
					3	LOADING	Downloading; responseText holds partial data.
					4	DONE	The operation is complete.
        */
        xhr.onreadystatechange = function (){ // This monitor the states 
            console.log(xhr.readyState)
            if (xhr.readyState === 4) {
                apiResponse = JSON.parse(this.responseText)
                console.log(apiResponse);
                addDetailsToCard(apiResponse)
            }
        }
        xhr.send()
        
    }
    document.querySelector('#send').addEventListener('click', function(event){
        
       const data = sendRequest()
       
    })
    
</Script>
</html>
```

## Promises

```jsx
/*
    Promises can be explicitly created by using a promise object promise object accepts a callback function which 
    have two parameters resolve and reject these 2 are functions itself so an api or an promise can either be resolved 
    or be rejected so it is dependent on the api calls or whatever calls you have done like file manipulation calls and
    other network calls so whenever the calls is finished and the promises is resolved then the resolve function executed 
    and resolve function also accept some arguments so that can be forwarded to the caller the response from the api and 
    the reject part accepts some arguments also it can be some kind of error which has occur while calling or executing 
    the functions asynchronously
*/

const promiseOne = new Promise((resolve, reject) => {
  const error = false;
  setTimeout(() => {
    console.log("Timeout Done");
    if (!error) {
      resolve({ name: "Rohan Debnath", hobby: "Coding" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

/*
    Here promises are executed by an assing await method where we are using try catch method so 
    that if resolve executed and the promise is done resolved so then the try method will execute 
    and if any error occurs in that and the reject executes then the promise is rejected so then 
    the catch will handle it properly
*/
async function runPromise() {
  try {
    const response = await promiseOne;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

runPromise();

/*
    Another way of executing promises is the fetch method the fetch method helps us to call an 
    api or a web url then it fetch the response that the API returns if there is no conflict so 
    the 'then' method is called and it receives and response then if we want to pass this response 
    or we can do the chaining method so from the first then method we can 'return' the 'response.json()' 
    so because the response is come as a string so we have to convert it into object for parsing Then 
    the second then method receives what first then method returns after that we can parse and do whatever 
    we need to do with that objection object and if there is any conflict or error occurs then the catch 
    method will definitely catch it and we can handle there the error properly and after that we have an 
    finally method so it will execute whether it occur conflict or not
*/

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("The name is: ", data.name);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("The promise is either 'Resolved' or 'Rejected'");
  });

// Another way to create and consume promise
const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseTwo
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));
```

## Fetch ()

![Untitled](Untitled%203.png)

## Objects and Prototypes

```jsx
// We can explicitly add some prototype functionality to anything, it will act as default functionalities

function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
```

## Call() and This

```jsx
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // Here we are calling an additional funtion to do some task
																	   // We also pass the 'this' current context of this function,
																	   // so that the outsource function can actually use this function's
																	   // context and update this function's parameters
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
```

## Bind()

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <button>Button Clicked</button>
</body>
<script>
    class React {
        constructor(){
            this.library = "React"
            this.server = "https://localhost:300"

            //requirement
            document
                .querySelector('button')
                .addEventListener('click', this.handleClick.bind(this))
                /*
                Here by default the query selector button is selected and the button 
                is calling a function or a handler which prints button clicked and 
                there is also a thing called this dot server so whenever I pass this 
                through the function that this belongs to the button itself because 
                the button is calling the function and button is inside a class 
                constructor and inside the class there is some methods but the 
                this keyword which button is passed passing is only referred 
                button so we have to use bind function to bind the constructor 
                variables and the button variables altogether and then forward it to 
                the handler class
                */

        }
        handleClick(){
            console.log("button clicked");
            console.log(this.server);
        }
    }

    const app = new React()
</script>
</html>
```

## How to change Object’s default private properties

```jsx
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', { // On the key 'name' some default operations has been modified
    writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
```
