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

## 11 - Checked property

### `.checked` Property
###### The `.checked` property determines the checked state of an HTML checkbox or radio button element. It returns:
- ###### `true` if the element is checked.
- ###### `false` if the element is not checked.
```html
<input type="checkbox" id="myCheckBox"/>
<label for="myCheckBox">subscribe</label><br/><br/>

<!-- To group the radio buttons so that only one can be selected at a time, 
    give them the same name attribute (e.g., name="card"). -->
<input type="radio" id="visaBtn" name="card"/>
<label for="visaBtn">Visa</label><br/>
<input type="radio" id="masterCardBtn" name="card"/>
<label for="masterCardBtn">MasterCard</label><br/>
<input type="radio" id="payPalBtn" name="card"/>
<label for="payPalBtn">PayPal</label><br/><br/>

<button type="submit" id="mySubmit">submit</button>

<p id="subResult"></p>
<p id="paymentResult"></p>
```
```js
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmitBtn = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmitBtn.onclick = function() {
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with a Visa.`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with a MasterCard.`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with Paypal.`;
    }
    else{
        paymentResult.textContent = `You must select a payment type.`;
    }
}
```
---

## 12 - Ternary operator

### Ternary Operator (`? :`)
###### The ternary operator is a shorthand way to write simple `if...else` statements in JavaScript. It is commonly used when you want to assign a value to a variable based on a condition.

#### Syntax
```js
condition ? valueIfTrue : valueIfFalse;
// condition → The expression being evaluated.
// valueIfTrue → Returned if the condition is true.
// valueIfFalse → Returned if the condition is false.
```
```js
let age = 21;

let message = age >= 18 ? "You're an adult" : "You're a minor";

console.log(message);  // output: You're an adult

// ============= Equivalent `if...else` =============
let message;

if (age >= 18) {
    message = "You're an adult";
} else {
    message = "You're a minor";
}
```
#### Examples
```js
// Example 1: Greeting Based on Time
let time = 16;

let greeting = time < 12 
    ? "Good morning!" 
    : "Good afternoon!";

console.log(greeting);  // output: Good afternoon!
```
```js
// Example 2: Student Status
let isStudent = true;

let message = isStudent ? "You are a student" : "You are NOT a student";

console.log(message);  // output: You are a student
```
```js
// Example 3: Discount Calculation
let purchaseAmount = 125;

let discount = purchaseAmount >= 100 ? 10 : 0;
// If the purchase amount is $100 or more, assign a 10% discount.
// Otherwise, assign a 0% discount (no discount).

console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);  // output: Your total is $112.5
```
---

## 13 - Switches

### Switch Statement (`switch`)
###### The `switch` statement is an alternative to multiple `if...else if` statements. It compares different cases and executes the matching one.
###### `switch` statements are often cleaner and easier to read when checking one variable against many possible values.

#### Using `if...else if`
```js
let day = 1;

if (day == 1) {
    console.log("It is Monday.");
}
else if (day == 2) {
    console.log("It is Tuesday.");
}
else if (day == 3) {
    console.log("It is Wednesday.");
}
else if (day == 4) {
    console.log("It is Thursday.");
}
else if (day == 5) {
    console.log("It is Friday.");
}
else if (day == 6) {
    console.log("It is Saturday.");
}
else if (day == 7) {
    console.log("It is Sunday.");
}
else {
    console.log(`${day} is not a day.`);
}
```
#### Using a `switch`
```js
let day = 1;

switch (day) {
    case 1:
        console.log("It is Monday.");
        break;

    case 2:
        console.log("It is Tuesday.");
        break;

    case 3:
        console.log("It is Wednesday.");
        break;

    case 4:
        console.log("It is Thursday.");
        break;

    case 5:
        console.log("It is Friday.");
        break;

    case 6:
        console.log("It is Saturday.");
        break;

    case 7:
        console.log("It is Sunday.");
        break;

    default:
        console.log(`${day} is not a day.`);
}
```
---

### The `break` Keyword
###### The `break` statement immediately exits the `switch` once a matching case has been executed.
###### Without `break`, JavaScript continues executing every case below the matched one. This is called fall-through.
```js
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
        // Exits the switch statement once a matching case has been found.

    case 2:
        console.log("Tuesday");
        break;
}
```
---

### The `default` Case
###### The `default` case runs when none of the cases match the expression. Think of it as the `else` block of a switch statement.
```js
let day = 9;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    default:
        console.log(`${day} is not a day.`);
}
```
---

### Using `switch(true)` for Conditions
###### `switch(true)` allows each case to contain a boolean expression. The first expression that evaluates to true is executed.
```js
let testScore = 33;
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = "A";
        break;

    case testScore >= 80:
        letterGrade = "B";
        break;

    case testScore >= 70:
        letterGrade = "C";
        break;

    case testScore >= 60:
        letterGrade = "D";
        break;

    default:
        letterGrade = "F";
}

console.log(letterGrade);  // output: F
```
---

## 17 - Logical operators

### Logical Operators
###### Used to combine or manipulate boolean (`true` or `false`) values.

#### Operators
- AND = `&&`
- OR  = `||`
- NOT = `!`

#### Examples
```js
// =========== Example 1 ===========
const temp = 20;

// Both conditions must be true
if (temp > 0 && temp <= 30) {
    console.log("The weather is GOOD.");
}
else {
    console.log("The weather is BAD.");
}

// =========== Example 2 ===========
const isSunny = true;

// Reverses a boolean value
if (!isSunny) {
    console.log("It is CLOUDY.");
}
else {
    console.log("It is SUNNY.");
}
```
---

## 18 - Strict equality

### Operators
- `=` Assignment operator
- `==` Equality operator (compares values)
- `===` Strict equality operator (compares values and data types)
- `!=` Inequality operator
- `!==` Strict inequality operator
---

### Strict Equality
###### Compares both the value and the data type of two operands.
```js
const PI = 3.14;

// =========== Example 1 ===========
// == compares values only
if (PI == "3.14") {
    console.log("That is Pi.");
}
else {
    console.log("That is NOT Pi.");
}
// Output: That is Pi.

// =========== Example 2 ===========
// !== compares both values and data types
if (PI !== "3.14") {
    console.log("That is NOT Pi.");
}
else {
    console.log("That is Pi.");
}
// Output: That is NOT Pi.
```
> **Note:** Note: User input from `window.prompt()` is always stored as a string, so `==` can be useful when comparing input values.
---

## 19 - While loops

### `while` Loop
###### Repeats a block of code as long as a condition is `true`.
```js
let username = "";

// Keep asking for a username until valid input is entered
while (username === "" || username === null) {
    username = window.prompt("Enter your name");
    // The prompt keeps appearing until the user enters a value
}

console.log(`Hello ${username}`);

// Without the second condition (`username === null`),
// clicking Cancel sets `username` to `null`.
// Output: Hello null
```
---

### Infinite Loop
###### A loop that continues running forever because its condition never becomes `false`.
```js
let username = "";

// Repeats while the username is empty
while (username === "") {
    console.log("You didn't enter your name.");
}
// This creates an infinite loop because `username` never changes.

// This line executes only after the loop finishes, in this case never
console.log(`Hello ${username}`);
```
---

### `do...while` Loop
###### Executes the code once, then repeats while the condition is `true`.
```js
let username;

// The loop body runs at least once
do {
    username = window.prompt("Enter your name");
} while (username === "" || username === null);

console.log(`Hello ${username}`);
```
---

### `while` vs. `do...while` Comparison
```js
// ============ While Loop ============
let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if (username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in!");
    }
    else {
        console.log("Invalid credentials! Please try again.");
    }
}

// =========== Do..While Loop ===========
let loggedIn = false;
let username;
let password;

// The loop body runs at least once
do {
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if (username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in!");
    }
    else {
        console.log("Invalid credentials! Please try again.");
    }
} while (!loggedIn);

// =========== Difference ===========
// A do...while loop executes the code once before checking the condition.
// Even if `loggedIn` starts as `true`, the loop still runs one time.
```
---

## 20 - For loops

## `for` loops
###### A `for` loop repeats a block of code a limited number of times. It is commonly used when you know exactly how many times you want the loop to run.

#### Syntax
```js
for (initialization; condition; increment/decrement) {
    // Code to execute
}
```
| Part | Description |
|------|-------------|
| `initialization` | Runs once before the loop starts. |
| `condition` | The loop continues while this condition is `true`. |
| `increment/decrement` | Updates the loop variable after each iteration. |


#### Examples
- ##### Basic `for` Loop
    ```js
    for (let i = 0; i <= 2; i++) {
        console.log("Hello");
        console.log(i);
    }
    // Output:
    // Hello
    // 0
    // Hello
    // 1
    // Hello
    // 2
    ```
- ##### Increment by More Than 1
    ```js
    for (let i = 1; i <= 10; i += 2) {
        console.log(i);
    }
    // Output:
    // 1
    // 3
    // 5
    // 7
    // 9
    ```
- ##### Countdown
    ```js
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }

    console.log("HAPPY NEW YEAR!");
    // Output:
    // 10
    // 9
    // 8
    // 7
    // 6
    // 5
    // 4
    // 3
    // 2
    // 1
    // HAPPY NEW YEAR!
    ```
---

### `continue` keyword
###### The `continue` keyword skips the current iteration and immediately moves to the next one.
```js
for (let i = 1; i <= 20; i++) {

    if (i === 13) {
        continue;
    }

    console.log(i);
}
// `13` is skipped because `continue` tells the loop to ignore the rest of that iteration.
```
---

### `break` keyword
###### The `break` keyword exits the loop completely.
```js
for (let i = 1; i <= 20; i++) {

    if (i === 13) {
        break;
    }

    console.log(i);
}
// The loop stops as soon as `i` becomes `13`.
```
---

### Quick Reference
| Statement | Meaning |
|-----------|---------|
| `i++` | Increase by 1 |
| `i--` | Decrease by 1 |
| `i += 2` | Increase by 2 |
| `continue` | Skip the current iteration |
| `break` | Exit the loop immediately |
---


## Projects

### 21 -  ⭐ Number guessing game
###### A game where the user guesses a randomly generated number until they find the correct answer with input validation and attempt tracking.
---
