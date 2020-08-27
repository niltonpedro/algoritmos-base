var inputNumber = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button')

var numbers = [];

function addNumbers(){

  var inputValue = inputNumber.value;

  numbers.push(inputValue);
  inputNumber.value = '';

  console.log(numbers);

}

// buttonElement.onclick = addNumbers;


// #1- Numero primo

function primeNumber(n){

  if (n < 2) return 'Numero não é primo';

  for (var i = 2; i < n; i++) {

    if(n % i === 0)

    return 'Numero não é primo';
}
return 'Numero é primo';

}

var check = console.log(primeNumber(131))


// #2 - Sequencia Fibbonaci

const fibonacci = num => {

    if(num < 2) {
  return num

  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

// console.log(fibonacci(17))

// console.log(mdc(48, 30))

// #3 - Máximo divisor comum

function mdcDoisNumeros(m, n) {
  if ((typeof m !== 'number') || (typeof n !== 'number')) 
    return false;
  m = Math.abs(m);
  n = Math.abs(n);
  while(n) {
    var t = n;
    n = m % n;
    m = t;
  }
  return m;
}

// console.log(mdcDoisNumeros(40, 20));

// #4 Ordenação de um array com método Quicksort

function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [88, 23, -55, 11, 0, 21, 3 ];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);