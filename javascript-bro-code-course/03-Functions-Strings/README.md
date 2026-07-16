# 03 - Functions & Strings

## 14 - String methods

### `charAt(index)`
###### Returns the character at the specified index of a string.
```js
let userName = "BroCode"; 
console.log(userName.charAt(0));  // output: B
```
---

### `indexOf(value)`
###### Returns the index of the first occurrence of a character or substring. Returns -1 if it is not found.
```js
let userName = "BroCode"; 
console.log(userName.indexOf("o"));  // output: 2
```
---

### `lastIndexOf(value)`
###### Returns the index of the last occurrence of a character or substring.
```js
let userName = "BroCode"; 
console.log(userName.lastIndexOf("o"));  // output: 4
```
---

### `length` property
###### Returns the total number of characters in a string.
```js
let userName = "BroCode"; 
console.log(userName.length);  // output: 7
```
---

### `trim()`
###### Removes whitespace from the beginning and end of a string.
```js
let userName = " BroCode "; 
console.log(userName.trim());  // output: BroCode
```
---

### `toUpperCase()`
###### Converts all letters in a string to uppercase.
```js
let userName = "BroCode"; 
console.log(userName.toUpperCase());  // output: BROCODE
```
---

### `toLowerCase()`
###### Converts all letters in a string to lowercase.
```js
let userName = "BroCode"; 
console.log(userName.toLowerCase());  // output: brocode
```
---

### `repeat(count)`
###### Repeats a string a specified number of times.
```js
let userName = "BroCode"; 
console.log(userName.repeat(3));  // output: BroCodeBroCodeBroCode
```
---

### `startsWith(value)`
###### Checks whether a string starts with a specified character or substring. Returns `true` or `false`.
```js
let userName = " BroCode"; 
console.log(userName.startsWith(" "));  // output: true
```
---

### `endsWith(value)`
###### Checks whether a string ends with a specified character or substring. Returns `true` or `false`.
```js
let userName = "BroCode "; 
console.log(userName.endsWith(" "));  // output: true
```
---

### `includes(value)`
###### Checks whether a string contains a specified character or substring. Returns `true` or `false`.
```js
let userName = "Bro Code"; 
console.log(userName.includes(" "));  // output: true
```
---

### `replaceAll(oldValue, newValue)`
###### Replaces every occurrence of a specified value with another value.
```js
let phoneNumber = "123-456-7890"; 
console.log(phoneNumber.replaceAll("-", ""));  // output: 1234567890
```
---

### `padStart(targetLength, padString)`
###### Pads the beginning of a string until it reaches the specified length.
```js
let phoneNumber = "123-456-7890"; 
console.log(phoneNumber.padStart(15, "0"));  // output: 000123-456-7890
```
---

### `padEnd(targetLength, padString)`
###### Pads the end of a string until it reaches the specified length.
```js
let phoneNumber = "123-456-7890"; 
console.log(phoneNumber.padEnd(15, "0"));  // output: 123-456-7890000
```
---

## 15 - String slicing

### `slice(start, end)`
###### Creates a substring by extracting a portion of a string. The `start` index is included, but the `end` index is excluded.
```js
const fullName = "Bro Code"; 

let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 8);

console.log(firstName);  // output: Bro 
console.log(lastName);  // output: Code
```
---

### `slice(start)`
###### If the `end` index is not provided, `slice()` extracts the string from the starting index until the end.
```js
const fullName = "Bro Code"; 

let lastName = fullName.slice(4); 

console.log(lastName);  // output: Code
```
---

### Using negative indices
###### `slice()` supports negative indices, which count from the end of the string.
```js
const fullName = "Bro Code";

let firstChar = fullName.slice(0, 1); 
let lastChar = fullName.slice(-1); 
let twoLastChar = fullName.slice(-2); 

console.log(firstChar);    // output: B 
console.log(lastChar);     // output: e 
console.log(twoLastChar);  // output: de
```
---

### Using `slice()` with `indexOf()`
###### Combining `slice()` with `indexOf()` allows us to dynamically extract parts of a string without knowing the exact index.
```js
const fullName = "Broseph Code";

let firstName = fullName.slice(0, fullName.indexOf(" ")); 
let lastName = fullName.slice(fullName.indexOf(" ") + 1); 
// indexOf(" ") finds the position of the space
// +1 starts slicing after the space
// remember: the start index is inclusive

console.log(firstName);  // output: Broseph 
console.log(lastName);   // output: Code
```

#### Example: Extracting a username and extension from an email
```js
const email = "Bro1@gmail.com"; 

let userName = email.slice(0, email.indexOf("@")); 
let extension = email.slice(email.indexOf("@") + 1); 

console.log(userName);   // output: Bro1 
console.log(extension);  // output: gmail.com
```
---

## 16 - Method chaining

### Method Chaining
###### A programming technique that lets you call multiple methods on the same value in a single line of code.
```js
// Get user input and format the username 
// (remove leading/trailing spaces & convert it to title case)
let username = window.prompt("Enter your username:");

// --------- Without Method Chaining ---------
username = username.trim();

let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars;
console.log(username);

// --------- With Method Chaining ---------
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
```
---

## 22 - Functions

## 23 - Variable scope

## Projects

### 24 - ⭐ Temperature conversion program