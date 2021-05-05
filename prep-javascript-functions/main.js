function addTwoNumbers(x, y) {
  return x + y;
}
var sum = addTwoNumbers(2, 2);
console.log(sum);

function convertHoursToMinutes(hour) {
  return hour * 60;
}
var inMinutes = convertHoursToMinutes(2);
console.log(inMinutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return ((num1 + num2) * 5);
}
var resultOfAddAndMultiplyBy5 = addAndMultiplyBy5(10, 5);
console.log(resultOfAddAndMultiplyBy5);

function multiplyAndDividedBy5(num1, num2) {
  return ((num1 * num2) / 5);
}
var resultOfMultiplyAndDividedBy5 = multiplyAndDividedBy5(35, 10);
console.log(resultOfMultiplyAndDividedBy5);

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}
var resultOfSubtractTwoNumbers = subtractTwoNumbers(22, 7);
console.log(resultOfSubtractTwoNumbers);

function getCircleCircumference(radius) {
  return ((2 * 3.14) * radius);
}
var resultOfGetCircleCircumference = getCircleCircumference(5);
console.log(resultOfGetCircleCircumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var resultOfGetFullName = getFullName('Juan', 'Ramirez');
console.log(resultOfGetFullName);

function cube(number) {
  return ((5 * 5) * number);
}
var resultOfCube = cube(5);
console.log(resultOfCube);
