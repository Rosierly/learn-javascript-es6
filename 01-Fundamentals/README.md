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
