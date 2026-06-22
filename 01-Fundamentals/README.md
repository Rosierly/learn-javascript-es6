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

