# Fundamentals: Lessons 1–8 & 10–11

## Lesson 1 - Console Log

### Console Output
###### Print text in the console (output area).
```js
console.log("Hello");
console.log("A");
```
---

### Semicolons
###### Each JavaScript statement traditionally ends with a semicolon (`;`).
```js
// JavaScript uses **Automatic Semicolon Insertion (ASI)**, so semicolons are often optional.
console.log("Hello")
// However, using semicolons consistently is considered good practice.
```

#### Multiple Statements on One Line
```js
console.log("A"); console.log("B");
// While this is valid JavaScript, it is harder to read and is generally not recommended. Writing each statement on its own line is preferred.
```
---

### Strings & Quotes
###### There are multiple ways to include double quotes inside a string.
```js
// Using single quotes
console.log('My "String"'); // Output: My "String"

// Escaping double quotes
console.log("My \"String\""); // Output: My "String"
```
---

### HTML Entities
###### HTML entities are treated as plain text inside JavaScript strings and are not automatically converted into characters.
```js
console.log("My &quot;String&quot;"); // output: My &quot;String&quot;
```
---


## Lesson 2 - Commenting

### Comments
###### Comments are used to add notes to your code and are ignored by JavaScript.

#### Single-Line Comment
```js
// This is a comment
console.log("Hello");
console.log("Bye");  // This is an inline comment
```

#### Multi-Line Comment
```js
/*
This is a
multi-line comment
*/
console.log("Hello");
```

#### Shortcuts:
- Windows/Linux: `Ctrl + /`  
- macOS: `Cmd + /`
---

## Lesson 3 - Data Types

### Data Types

- #### String
    ###### Represents textual data.
    ```js
    "Hello"
    "42"
    ```

- #### Number
    ###### Represents both integers and decimal numbers. In JavaScript, integers and floats both belong to the **Number** data type.
    ```js
    23      // Integer
    3.1415  // Float (decimal number)
    ```

- #### Boolean
    ###### Represents one of two values: `true` or `false`.
    ```js
    true
    false
    ```
---

### The `typeof` Operator
###### Use `typeof` to check the data type of a value.
```js
typeof("Hello"); // "string"
typeof(42);      // "number"
typeof(true);    // "boolean"
```

```js
// Examples
console.log(typeof("3" + "2"));  // output: string
console.log(typeof(23 + 34 + 12));  // output: number
```
---

### Automatic Type Conversion (Coercion)
###### JavaScript can automatically convert values from one data type to another.

#### String Concatenation
###### When a string is combined with another value using the `+` operator, the result is a string.
```js
console.log("3" + 1);  // "31"
console.log(typeof("3" + 1));  // "string"

console.log(3.1415 + "2");  // "3.14152"
console.log(typeof(3.1415 + "2"));  // "string"
```

#### Mathematical Operations
###### Operators such as `-`, `*`, and `/` convert strings to numbers when possible.
```js
console.log("3" - 1);  // 2
console.log(typeof("3" - 1));  // "number"
```
---

### Manual Type Conversion
###### Convert values explicitly using built-in functions.
```js
Number("42");  // 42
String(123);   // "123"
Boolean(0);    // false
// Note: Conversion functions begin with a capital letter.
```
---

## Lesson 4 - Arithmetic Operators

### Basic Arithmetic Operators
###### JavaScript provides several operators for performing mathematical calculations.
```js
2 + 3; // Addition 
5 - 4; // Subtraction 
6 * 2; // Multiplication 
12 / 4; // Division
```
---

### Comments Inside Expressions
###### Comments can be placed inside expressions. They are ignored by JavaScript.
```js
console.log(/* 5 divided by 2 */);  // output: undefined
// Since no value is passed to console.log(), it logs undefined.
```
---

### The Remainder (Modulo) Operator %
###### The modulo operator returns the remainder after division.
```js
console.log(6 / 3); // 2
console.log(6 % 3); // 0

console.log(7 % 2); // 1
console.log(7 / 2); // 3.5

// Examples:
6 % 3  // → remainder is 0
7 % 2  // → remainder is 1
```
---

### Exponentiation Operator
###### The exponentiation operator raises a number to a power.
```js
5 ** 3; // 125
// Equivalent to:
5 * 5 * 5; // 125
```
---

### Operator Precedence (PEMDASLR)
###### JavaScript follows the standard order of operations:
- ###### Parentheses ()
- ###### Exponents **
- ###### Multiplication * and Division /
- ###### Addition + and Subtraction -
###### Operators with the same precedence are evaluated from left to right.
```js
console.log(5 + 4 / 2 * 3);  // output: 11

// Calculation:
// 4 / 2 = 2
// 2 * 3 = 6
// 5 + 6 = 11
```
---

### The prompt() Function
###### The prompt() function displays a dialog box that asks the user for input.
```js
prompt("What is your name?");

// Parameters
// Message to display
// (Optional) Default value
prompt("What is your name?", "John");

// Return Value
// Returns the text entered by the user as a string
// Returns null if the user clicks Cancel

const name = prompt("What is your name?");
console.log(name);
```
---

### `null` vs `undefined`
###### Both `null` and `undefined` represent the absence of a value, but they are used differently.

- ###### A variable is `undefined` when it has been declared but has not been assigned a value.
```js
let name;
console.log(name); // undefined
// Meaning: JavaScript expected a value, but none was provided.
```

- ###### `null` is an intentional assignment that represents "no value".
```js
let selectedUser = null;
console.log(selectedUser); // null
// Meaning: A value was deliberately set to nothing.
```

###### Comparison
```js
let a; 
let b = null; 
console.log(a); // undefined 
console.log(b); // null
// undefined -> JavaScript has not assigned a value
// null	-> A value was intentionally set to "nothing"
```

###### The `typeof` Operator
```js
typeof undefined; // "undefined"
typeof null;      // "object"
// typeof null returns "object" due to a long-standing JavaScript bug that remains for backward compatibility.
```

###### Equality Comparison
```js
null == undefined;  // true
null === undefined; // false
// == performs type coercion, so null and undefined are considered equal.
// === compares both value and type, so they are different.
```
---


## Lesson 5 - Variables

### Variable Naming Conventions
###### Different programming languages and situations use different naming conventions.
```js
// Python
my_variable_name  // snake_case

// JavaScript
myVariableName    // camelCase

// Classes
MyClass           // PascalCase

// Constants
MAX_USERS         // UPPER_SNAKE_CASE
```
- Use **camelCase** for variables and functions.
- Use **PascalCase** for class names.
- Use **UPPER_SNAKE_CASE** for constants and configuration values.
---

### Variable Naming Rules
- #### Rule 1: Must Start with a Letter, _, or $. 
###### Variable names cannot begin with a number.
```js
let myAge = 12;
let _counter = 0;
let $price = 5;

let 1stNumber = 12;  // ❌ Invalid
```

- #### Rule 2: Variable Names Are Case-Sensitive.
###### JavaScript treats uppercase and lowercase letters as different characters.
```js
let age = 12;
let Age = 20;

console.log(age);  // 12
console.log(Age);  // 20
// `age` and `Age` are different variables.
```

- #### Rule 3: Reserved Keywords Cannot Be Used
###### JavaScript keywords already have special meanings and cannot be used as variable names.
```js
let name = "Angela";

let let = 123;  // ❌ Invalid
let if = 5;     // ❌ Invalid
```
---

### Creating Variables
###### Variables are named containers used to store data.
```js
let age = 12;
let name = "Angela";
let isStudent = true;

// Storing Values in Variables (result of an expression)
let dataTypeOfHello = typeof("Hello");

console.log(dataTypeOfHello); // output: string
```
---

### Variable Reassignment
###### Variables declared with `let` can be assigned a new value later.
```js
let age = 12;

// Some time later...
age = 13;

console.log(age);  // output: 13
```
---

## Lesson 6 - Constants

### Constants - `const` Keyword
###### Constants are named containers whose values cannot be reassigned after they are created.
```js
const MY_NAME = "Angela";

// Attempting to assign a new value to a constant will result in an error.
MY_NAME = "Bella"; // ❌ TypeError
```
---

### Naming Constants
###### Constants are typically written using UPPER_SNAKE_CASE.
```js
const PI = 3.141592653589793;
const GOOGLE_URL = "https://www.google.com";
const MAX_USERS = 100;
// This naming convention makes constants easy to distinguish from regular variables.
```
---

### `let` vs `const`
- #### Reassignment
    ###### Variables declared with let can be reassigned, while constants declared with const cannot.
    ```js
    let x = 2;
    x = 3;

    const y = 2;
    y = 3; // ❌ TypeError
    ```

- #### Initialization
    ###### A let variable can be declared without a value. A const must be initialized when it is declared.
    ```js
    let username;
    username = "Angela";

    const username = "Angela";
    const username;  // ❌ SyntaxError
    ```
---

### The `var` Keyword
###### var is the older way of declaring variables in JavaScript. It was the primary method before let and const were introduced in ES6 (ECMAScript 2015).
```js
var name = "Angela";

// Unlike let and const, variables declared with var can be redeclared in the same scope.
var name = "Angela";
var name = "Bella";  // The second declaration replaces the first one

// Avoid `var` in modern code, use `let` and `const`.
```
---

## Lesson 7 - Strings

### Creating Strings
###### Strings represent textual data and can be created using double quotes, single quotes, or backticks.
```js
let doubleQuoteString = "This is a string";
let singleQuoteString = 'This is also a string';
let backtickString = `This is yet another string`;
// All three create strings. Backticks are special because they support interpolation and multi-line strings.
```

#### String Delimiters
```js
// JavaScript supports three string delimiters.
"Double Quotes"
'Single Quotes'
`Backticks`
```
---

### New Line (\n)
###### Inserts a line break inside a string.
```js
console.log("Hello\nWorld");
// Output:
// Hello
// World
```
---

### Tab Space (\t)
###### Inserts a horizontal tab space.
```js
console.log("Hello\tWorld");
```
---

### Backslash (`\\`)
###### Displays a literal backslash.
```js
console.log("C:\\Users\\Angela");  // output: C:\Users\Angela
```
---

### Escape Characters
###### A backslash (`\`) allows special characters to be inserted into strings.
```js
// Common Escape Characters
console.log("This \" contains a quote");
console.log("Hello\nWorld");
console.log("Hello\tWorld");
console.log("C:\\Users\\Angela");
```
---

### Template Literals 
###### Template literals are strings enclosed in backticks (`).
### Variable Interpolation
###### Insert variables directly into a string using ${}.
```js
let age = 12;

console.log(`I am ${age} years old.`);  // output: I am 12 years old.

// JavaScript expressions can be evaluated inside ${}.
console.log(`Five times three is ${5 * 3}`);  // output: Five times three is 15

// Note:
// ${} is treated as normal text when used inside single or double quotes.
```
---

### Multi-Line Strings
- #### Using Template Literals
    ###### Backtick strings can span multiple lines without escape characters.
    ```js
    `Template literals
    can be multi-line`
    ```

- #### Using New Line Characters
    ###### Multi-line output can also be created with \n.
    ```js
    console.log("I\nCan\nPrint\nMultiple\nLines");
    ```
---

### Template Literals vs Concatenation
###### Template literals are usually easier to read than string concatenation.

- #### Concatenation
    ```js
    let firstName = "Angela";
    let lastName = "Yu";

    console.log(firstName + " " + lastName);
    ```

- #### Template Literal
    ```js
    let firstName = "Angela";
    let lastName = "Yu";

    console.log(`${firstName} ${lastName}`);
    ```
---

### Additional Notes
- #### Accessing Characters
    ```js
    let name = "Angela";

    console.log(name[0]);  // A
    console.log(name[1]);  // n
    ```

- #### Strings Are Immutable
    ```js
    let name = "Angela";

    name[0] = "B";

    console.log(name);  // Angela
    ```
---

## Lesson 8 - Arrays

### Storing Individual Pieces of Data
###### A variable can store a single value, such as a string, number, or boolean.
```js
const child1 = "Jane";
console.log(child1);
```
---

### Storing Multiple Related Pieces of Data
###### Arrays store multiple values in a single variable. Arrays can contain different data types, although it's usually best practice to keep related data of the same type together.
```js
const children = ["Jane", "Ben", "Tom"];
const mixedArray = ["Jane", 25, true];  // Valid JavaScript
```
---

### Accessing Array Items (Using Indexes)
###### Arrays use zero-based numbering, meaning the first item starts at index 0.
```js
let children = ["Jane", "Ben", "Tom"];
//               0       1      2

const tom = children[2];
console.log(tom);  // "Tom"
```
---

### Accessing Non-Existing Indexes
###### If you try to access an index that doesn't exist, JavaScript returns undefined.
```js
const fruits = ["Apple", "Pear", "Orange"];

const lastFruit = fruits[2 + 1];  // calculations can be placed inside the brackets []
console.log(lastFruit);  // undefined
```
---

### Modifying Items in an Array
###### You can change individual items by assigning a new value to a specific index.
```js
const grades = ["A", "A", "B"];

grades[2] = "A";

console.log(grades);  // ["A", "A", "A"]
```
---

### Arrays and `const`
###### Using const makes the array reference constant, not the contents of the array.
```js
const grades = ["A", "A", "B"];

// ✅ Allowed:
grades[2] = "A";
grades.push("B");  // add an item


// ❌ Not Allowed:
grades = "Hello";
grades = [1, 2, 3];
```
---

## Lesson 9 - Inputs

### Using `.length` with Strings
###### The `.length` property returns the number of characters in a string.
```js
const name = "Jane";

console.log(name.length);  // output: 4
```
---

### `.length` with Arrays
###### `.length` can also be used on arrays to get the number of items.
```js
let inputs = ["Tom", "Angela", "Emma"];

console.log(inputs.length);  // output: 3
```
---

## Lesson 11 - Randomness

### Pseudo-Random Numbers
###### Computers do not generate truly random numbers. Instead, they use mathematical formulas called Pseudo-Random Number Generators (PRNGs).
---

### `Math.random()`
###### Returns a random number in the range `[0, 1)`.
```js
let randomNumber = Math.random();
console.log(randomNumber);
// Example outputs:
// 0.123456789
// 0.987654321
// 0.000001234

// Math.random() will never return 1.
```

#### Random Number Between 0 and 100
```js
// Multiply the result by 100
console.log(Math.random() * 100);
// Examples:
// 34.56
// 89.12
// 0.45

// Range:
// 0 <= number < 100
```
---

### Math.floor()
###### Removes the decimal portion of a number and rounds down to the nearest integer.
```js
let n = 36.9999999999999999;
let integer = Math.floor(n);
console.log(integer);  // 36

// Examples:
Math.floor(5.9);  // 5
Math.floor(5.1);  // 5
Math.floor(5.0);  // 5
```

#### Example - Get Random Whole Number Between 1 and 36.
```js
let num = Math.floor(Math.random() * 36) + 1
```
---

### Selecting a Random Item from an Array
###### Use a random integer as an array index.
```js
// Example 1
let fruitsArray = ["Apple", "Banana", "Cherry"];

let randomIndex = Math.floor(Math.random() * fruitsArray.length);

let randomFruit = fruitsArray[randomIndex];

console.log(randomFruit);
// Possible outputs:
// Apple
// Banana
// Cherry
```

```js
// Example 2
let friends = ["Angela", "Mary", "Tony", "John"];

let randomIndex = Math.floor(Math.random() * friends.length);

console.log(`${friends[randomIndex]} will pay the bill.`);
// Possible outputs:
// Angela will pay the bill.
// Tony will pay the bill.
// Mary will pay the bill.
```
---

