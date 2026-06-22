# Fundamentals: Lessons 1-10

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

#### String
###### Represents textual data.
```js
"Hello"
"42"
```

#### Number
###### Represents both integers and decimal numbers. In JavaScript, integers and floats both belong to the **Number** data type.
```js
23      // Integer
3.1415  // Float (decimal number)
```

#### Boolean
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