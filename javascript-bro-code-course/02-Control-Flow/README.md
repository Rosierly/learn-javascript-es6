# 02 - Control Flow

## 10 - If statements

### `If` statements
###### An `if` statement executes a block of code only if a condition is `true`.

#### Basic Syntax
```js
if (condition) {
    // Code executed if the condition is true
}

// With an else block:
if (condition) {
    // Code executed if the condition is true
} else {
    // Code executed if the condition is false
}
```
#### Examples
```js
// Example 1: Checking Age
// Checks whether a user is old enough to enter a website.

let age = 13;

if (age >= 18) {
    console.log("You are old enough to enter this site.");
} else {
    console.log("You must be 18+ to enter this site.");
}

// Example 2: Greeting Based on Time
// Displays a greeting depending on the current time.

let time = 9;

if (time < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
```
#### Using Boolean Variables
```js
// Boolean variables already store either true or false, so you can use them directly as conditions.

let isStudent = false;

if (isStudent) {
    console.log("You're a student!");
} else {
    console.log("You are NOT a student!");
}
```
---

### Nested `if` Statements
###### A nested `if` statement is an `if` statement placed inside another `if` statement. This is useful when a second condition should only be checked after the first one is true.
```js
let age = 25; 
let hasLicense = false; 
if (age >= 16) { 
    console.log("You are old enough to drive."); 

    if (hasLicense) { 
    console.log("You have your license!"); 
    } 
    else { 
        console.log("You do not have your license yet!"); 
    } 
} 
else { 
    console.log("You must be at least 16 years old to drive."); 
}
// Output:
// You are old enough to drive.
// You do not have your license yet!
```
---

### `else if` Statements
###### Use `else if` when you want to check multiple conditions. JavaScript evaluates them from top to bottom and stops as soon as one condition is `true`.
```js
// Because JavaScript stops after the first matching condition, the age >= 100 check is never reached.

let age = 101;

if (age >= 18) {
    console.log("You are old enough to enter this site.");
} else if (age < 0) {
    console.log("Your age can't be below 0.");
} else if (age >= 100) {
    // This code never runs because age >= 18 is already true.
    console.log("You are TOO OLD to enter this site.");
} else {
    console.log("You must be 18+ to enter this site.");
}
// Output: You are old enough to enter this site.
```
```js
// Correct Order
// Always place the most specific conditions before more general ones.

let age = 101;

if (age >= 100) {
    console.log("You are TOO OLD to enter this site.");
} else if (age < 0) {
    console.log("Your age can't be below 0.");
} else if (age >= 18) {
    console.log("You are old enough to enter this site.");
} else {
    console.log("You must be 18+ to enter this site.");
}
// Output: You are TOO OLD to enter this site.
```
---

### Comparison Operators
###### Comparison operators compare two values and return either `true` or `false`.
| Operator | Meaning                        |
| -------- | ------------------------------ |
| `==`     | Equal (performs type coercion) |
| `===`    | Strictly equal (recommended)   |
| `!=`     | Not equal                      |
| `!==`    | Strictly not equal             |
| `>`      | Greater than                   |
| `<`      | Less than                      |
| `>=`     | Greater than or equal to       |
| `<=`     | Less than or equal to          |

> **Note:** = is the assignment operator. It assigns a value to a variable and does not compare values.

- #### Equality Example
    ###### Although `==` works, `===` is generally recommended because it also checks the data type.
    ```js
    let age = "18";

    console.log(age == 18);   // true
    console.log(age === 18);  // false
    ```
---

### Exercise: Age Checker
###### Reads the user's age, converts it to a number, and displays a message based on the entered value.
```html
<label for="myText">Enter your age:</label><br> 
<input type="text" id="myText"><br> 
<button type="button" id="mySubmit">Submit</button> 

<p id="resultElement"></p>
```
```js
const myText = document.getElementById("myText"); 
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement"); 
let age;
 
mySubmit.onclick = function () { 
    age = Number(myText.value); 

    if (age >= 100) { 
        resultElement.textContent = "You are TOO OLD to enter this site."; 
    } 
    else if (age < 0) { 
        resultElement.textContent = "Your age can't be below 0."; 
    } 
    else if (age >= 18) {
         resultElement.textContent = "You are old enough to enter this site.";
    } 
    else { 
        resultElement.textContent = "You must be 18+ to enter this site."; 
    } 
};
```
---

---

## 11 - Checked property

## 12 - Ternary operator

## 13 - Switches

## 17 - Logical operators

## 18 - Strict equality

## 19 - While loops

## 20 - For loops

## Projects

### 21 -  ⭐ Number guessing game