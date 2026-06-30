// RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;


myButton.onclick = function () {
    label1.textContent = Math.floor(Math.random() * max) + min;
    label2.textContent = Math.floor(Math.random() * max) + min;
    label3.textContent = Math.floor(Math.random() * max) + min;
}
