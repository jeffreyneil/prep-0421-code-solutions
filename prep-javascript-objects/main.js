
var person = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobbies: 'Banjo Playing'
};
person.job = 'Jerk';
person.previousJob = 'Amigo';
console.log(person);

var fullName = 'The person\'s name is:' + ' ' + person.firstName + ' ' + person.lastName;
console.log(fullName);

var currentJob = 'The person\'s current job is:' + ' ' + person.job;
console.log(currentJob);

var personsPreviousJob = 'The person\'s previous job is:' + ' ' + person.previousJob;
console.log(personsPreviousJob);

console.log('The complete person object:', person);

var myCar = {
  make: 'Chrysler',
  model: 'Le Baron',
  year: '1986'
};
myCar['owner'] = person.firstName + ' ' + person.lastName;
myCar['color'] = 'green';
console.log('Car information', myCar);

var carOwner = 'My name is' + ' ' + myCar['owner'] + ' ' + 'and I drive' + ' ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'];
console.log(carOwner);

console.log('My full car info:', myCar);
