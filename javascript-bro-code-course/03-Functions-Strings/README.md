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

### `length`
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
console.log(phoneNumber.padStart(15, "0"));  // output: 00123-456-7890
```
---

### `padEnd(targetLength, padString)`
###### Pads the end of a string until it reaches the specified length.
```js
let phoneNumber = "123-456-7890"; 
console.log(phoneNumber.padEnd(15, "0"));  // output: 123-456-789000
```
---

## 15 - String slicing

## 16 - Method chaining

## 22 - Functions

## 23 - Variable scope

## Projects

### 24 - ⭐ Temperature conversion program