# 01 - Fundamentals

## JavaScript tutorial for beginners

### Console Output
###### `console.log()` prints messages to the browser's developer console.
```js
console.log("Hello"); 
console.log("I like pizza!");
```
---

### Alert Pop-up
###### `window.alert()` displays a pop-up alert box in the browser.
```js
window.alert("This is an alert!");
```
---

### Updating HTML Content Using JavaScript
###### `getElementById()` finds an HTML element, and `textContent` changes its text. You can assign a string, variable, or template literal.
```html
<h1 id="myH1"></h1>
<p id="myP"></p>

<p id="p1"></p>
<p id="p2"></p>
```
```js
// Using strings
document.getElementById("myH1").textContent = "Hello"; 
document.getElementById("myP").textContent = "I like pizza!";

// Using a variable or template literal
let fullName = "Bro Code"; 
document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = `Welcome, ${fullName}!`;
```
---

## Variables

### Variable
###### A variable is a container that stores a value.
```js
// 1. Declaration
let x;
// 2. Assignment
x = 100;
// 3. Reassignment
x = 200;

// Declaration and assignment together
let y = 100;
console.log(y);  // output: 100;

// Variable names must be unique within the same scope.
```
---

### Data Types

#### - Number
###### Stores numeric values (integers and floats).
```js
let age = 25; 
let price = 10.99; 
console.log(age);  // output: 25 
console.log(price);  // output: 10.99
```

#### - String
###### Stores text (a series of characters).
```js
let firstName = "Bro"; 
let favoriteFood = "Pizza"; 

console.log(firstName); 
console.log(favoriteFood);
```

#### - Boolean
###### Stores either `true` or `false`.
```js
let online = true; 
let isStudent = false; 

console.log(online); 
console.log(isStudent);
```
---

### Template Literals
###### Use backticks (``) to insert variables into strings with `${}`.
```js
let price = 10.99; 
let firstName = "Bro"; 

console.log(`The price is $${price}.`);  // output: The price is $10.99.
console.log(`Your name is ${firstName}.`);  // output: Your name is Bro.
```
---

### Checking a Variable's Data Type
###### Use `typeof` to check a variable's data type.
```js
let age = 25;
let firstName = "Bro";
let online = true;

console.log(typeof age);        // "number"
console.log(typeof firstName);  // "string"
console.log(typeof online);     // "boolean"
```
---

## Arithmetic Operators

### Arithmetic Operators
###### Operators used to perform calculations on values and variables.
```js
let students = 30; 
console.log(students);  // output: 30
```

#### Basic Operations
```js
// Increase or decrease by 1 
students = students + 1;  // 31
students = students - 1;  // 30 
 
// Multiply or divide 
students = students * 2;  // 60 
students = students / 2;  // 15 
 
// Exponents  
students = students ** 2;  // 900
```
---

### Modulo Operator
###### Returns the remainder of a division. Useful for checking even or odd numbers.
```js
let students = 30;
let extraStudents = students % 2;
console.log(extraStudents);  // output: 0

students = 31;
extraStudents = students % 2;
console.log(extraStudents);  // output: 1
```
---

### Augmented Assignment Operators
###### Shortcut operators for updating variables.
```js
let students = 30; 

students += 1;   // 31 
// same as: 
students = students + 1;  // 31

students -= 1;   // 30 
students *= 2;   // 60 
students /= 2;   // 15 
students **= 2;  // 900 
students %= 2;   // 0
```
---

### Increment and Decrement Operators
###### Increase or decrease a value by 1.
```js
students++;  // +1 
students--;  // -1
```
---

### Operator Precedence (PEMDASLR)
1. Parentheses ()
2. Exponents **
3. Multiplication, Division, Modulo (* / %)
4. Addition, Subtraction (+ -)
5. Left to right
```js
let result = 1 + 2 * 3 + 4 ** 2; 
console.log(result);  // output: 23 

let newResult = 12 % 5 + 8 / 2; 
console.log(newResult);  // output: 6
```
---

## Accept user input

### 1. Easy Way (window prompt)
###### Uses a browser pop-up to get input from the user (simple but outdated).
```js
let username; 

username = window.prompt("What's your username?"); 
console.log(username);
```
---

### 2. Professional Way (HTML Textbox)
###### Uses an input field and button for user interaction.
```html
<input id="myText" type="text">
<button id="mySubmit">Submit</button>

<p id="result"></p>
```
```js
let username;

document.getElementById("mySubmit").onclick = function () {
    // get text from textbox
    username = document.getElementById("myText").value;

    // display text on screen
    document.getElementById("result").textContent = `Hello ${username}`;
};
```
---

## Type Conversion 

### Type Conversion
###### The process of converting a value from one data type to another (string, number, boolean).

#### - Example 1: String to Number
```js
let age = window.prompt("How old are you?"); // always a string
age = Number(age); // convert string to number 
age += 1; 

console.log(age, typeof age);
```

#### - Example 2: Number, String, Boolean Conversion Rules
```js
let x = "pizza"; 
let y = "0"; 
let a = "";
let b;
```

String → Number
```js
x = Number(x);
console.log(x, typeof x);  // output: NaN "number"

// Explanation:
// Non-numeric strings become NaN
// NaN means “Not a Number”
// The type is still "number"
```

String → Boolean
```js
x = Boolean(x);
console.log(x, typeof x);  // output: true "boolean"

y = Boolean(y);
console.log(y, typeof y);  // output: true "boolean"

// Rule:
// Any non-empty string → true
```

Empty String Conversion
```js
a = Number(a);
console.log(a, typeof a);  // output: 0 "number"

// Rule:
// "" → 0 when converted to Number
// "" → false when converted to Boolean
```

Undefined Conversion
```js
b = Number(b);
console.log(b, typeof b); // output: NaN "number"

b = String(b);
console.log(b, typeof b); // output: "undefined" "string"

b = Boolean(b);
console.log(b, typeof b); // output: false "boolean"

// Rules:
// undefined → NaN (Number)
// undefined → "undefined" (String)
// undefined → false (Boolean)
```

#### Key Rules Summary
- `"text"` → NaN (when converted to Number)
- `""` → 0 (Number), false (Boolean)
- Any non-empty string → true (Boolean)
- `undefined` → NaN / "undefined" / false depending on conversion
---

## Constants 

### Constant
###### A constant is a variable whose value cannot be changed after it is assigned. Use the `const` keyword.

```js
const PI = 3.14159;  // cannot be reassigned

console.log(PI); // output: 3.14159

PI = 420.69; // TypeError: Assignment to constant variable.
```

#### Example: Calculate the Circumference of a Circle
```html
<h1 id="myH1">Enter the radius of a circle:</h1>

<label>Radius:</label>
<input type="text" id="myText"><br><br>

<button id="mySubmit">Submit</button>

<h3 id="myH3"></h3>
```

```js
// Get the radius from a textbox, calculate the circumference, and display the result.

const PI = 3.14159;

let radius;
let circumference;

document.getElementById("mySubmit").onclick = function () {

    radius = Number(document.getElementById("myText").value);

    circumference = 2 * PI * radius;

    document.getElementById("myH3").textContent = circumference + "cm";
};
```
---

### Constant Naming Convention
###### By convention, constants are written in **UPPER_SNAKE_CASE** to make them easy to recognize.

```js
const PI = 3.14159;
const MAX_USERS = 100;
const APP_NAME = "My App";

// This is a naming convention and is not required by JavaScript.
```
---

## Math Object

### Math Object
###### The `Math` object is a built-in JavaScript object that provides mathematical constants and functions.
```js
// Example: Getting the value of pi
console.log(Math.PI);  // output: 3.141592...
```
---

### Rounding Numbers

#### Math.round()
###### Rounds a number to the nearest integer.

```js
console.log(Math.round(3.21));  // output: 3
console.log(Math.round(3.99));  // output: 4
```

#### Math.floor()
###### Always rounds down.

```js
console.log(Math.floor(3.99));  // output: 3
```

#### Math.ceil()
###### Always rounds up.

```js
console.log(Math.ceil(4.12));  // output: 5
```

#### Math.trunc()
###### Removes the decimal part (cuts off).

```js
console.log(Math.trunc(3.99));  // output: 3
```
---

### Power & Roots

#### Math.pow()
###### Raises a number to a power.

```js
console.log(Math.pow(3, 2));  // output: 9
// same as: 3 ** 2
```

#### Math.sqrt()
###### Returns the square root of a number.

```js
console.log(Math.sqrt(81));  // output: 9
```
---

### Logs & Trigonometry

#### Math.log()
###### Returns the natural logarithm of a number.

```js
console.log(Math.log(10));  // output: 2.302585092994046
```

#### Math.sin() / Math.cos() / Math.tan()
###### Trigonometric functions (use radians).

```js
console.log(Math.sin(1));  // output: 0.8414709848078965
console.log(Math.cos(1));  // output: 0.5403023058681398
console.log(Math.tan(1));  // output: 1.5574077246549023
```
---

### Absolute & Sign

#### Math.abs()
###### Returns the absolute value (distance from 0).

```js
console.log(Math.abs(-9));  // output: 9
```

#### Math.sign()
###### Returns the sign of a number.

```js
console.log(Math.sign(-3));  // output: -1  (negative)
console.log(Math.sign(5));   // output: 1   (positive)
console.log(Math.sign(0));   // output: 0
```
---

### Min & Max
###### `Math.max()` returns the largest number, and `Math.min()` returns the smallest number.

```js
console.log(Math.max(3, 2, 1));  // output: 3
console.log(Math.min(3, 2, 1));  // output: 1
```
---

### Random Numbers
###### `Math.random()` returns a number between 0 and 1 (not including 1).

```js
console.log(Math.random());  // output: 0.234567... (example)
```

#### Generating Random Integers

- ##### Basic random number (0–5)
    ```js
    let randomInt = Math.floor(Math.random() * 6);
    // Math.random() gives a number between 0 and 1 (example: 0.73)
    // Multiplying by 6 changes the range to 0–5.999...
    // Math.floor() removes the decimal part

    console.log(randomInt);  // output: 0–5
    ```

- ##### Random number (1–6)
    ```js
    console.log(Math.floor(Math.random() * 6) + 1);  // output: 1–6 (any integer)
    ```

- ##### Random number (50–100)
    ```js
    const min = 50;
    const max = 100;

    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(randomNum);  // output: 50–100 (any integer)
    ```

- ##### Key Formula
    ```js
    Math.floor(Math.random() * (max - min + 1)) + min;
    ```
---

## Projects

### ⭐ Counter Program Project
###### A simple program that increases, decreases, and resets a number using buttons.

### ⭐ Random Number Generator Project
###### A program that generates three random numbers using `Math.random()` and math formulas.
---
