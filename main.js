var inputNumber = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button')

var numbers = [];

function addNumbers(){

  var inputValue = inputNumber.value;

  numbers.push(inputValue);
  inputNumber.value = '';

  console.log(numbers);

}

buttonElement.onclick = addNumbers;


