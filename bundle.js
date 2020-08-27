"use strict";

var inputNumber = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var numbers = [];

function addNumbers() {
  var inputValue = inputNumber.value;
  numbers.push(inputValue);
  inputNumber.value = '';
  console.log(numbers);
} // buttonElement.onclick = addNumbers;
// #1- Numero primo


function primeNumber(n) {
  if (n < 2) return 'Numero não é primo';

  for (var i = 2; i < n; i++) {
    if (n % i === 0) return 'Numero não é primo';
  }

  return 'Numero é primo';
}

var check = console.log(primeNumber(131)); // #2 - Sequencia Fibbonaci

var fibonacci = function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}; // console.log(fibonacci(17))
// console.log(mdc(48, 30))
// #3 - Máximo divisor comum


function mdcDoisNumeros(m, n) {
  if (typeof m !== 'number' || typeof n !== 'number') return false;
  m = Math.abs(m);
  n = Math.abs(n);

  while (n) {
    var t = n;
    n = m % n;
    m = t;
  }

  return m;
}

console.log(mdcDoisNumeros(40, 20));
