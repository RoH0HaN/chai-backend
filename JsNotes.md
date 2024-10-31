# Chai aur JavaScript

console.log(”Hello world”)

JavaScript is Dynamically Typed Language, because we don’t specify the type of data, it automatically recognize it

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

Datatypes in JavaScript are as follows:

## Datatypes:

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

// Function
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
Item: Python, Index: 0, Array: Python,