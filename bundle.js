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
// 1- Numero primo


function primeNumber(n) {
  if (n < 2) return 'Numero não é primo';

  for (var i = 2; i < n; i++) {
    if (n % i === 0) return 'Numero não é primo';
  }

  return 'Numero é primo';
}

var check = console.log(primeNumber(131));
