// variables
let name = 'Perez';
console.log(name);

// cannot be a reserved keyword
// should be meaningful
// cannot start with a number (1name)
// cannot contain a space or hyphen (-)
// case sensitive
let firstName = 'Perez';
lastName = 'Chris';

//Constants
const interestRate = 0.3;
interestRate = 1
console.log(interestRate);
//if you dont need to reassign,constant should be your default choice and if you need to reassign a variable, use let

//primitive types
let name = 'Perez'; //string literal
let age = 30; //Number literal
let isApproved = false; //Boolean literal
let firstName = undefined;
let selectedColor = null;

//Dynamic Typing
let name = 'Perez';
let age = 22;
let isApproved = false;
let firstName = undefined;
let selectedColor = null;

//objects
let name = 'Mosh';
let age = 30;
let person = {
    name: 'Mosh',
    age: 30
};

// Dot notation
person.name ='John';

//Bracket notation
person['name'] = 'Mary';

console.log(person.name);

//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = '1';
console.log(selectedColors[1]);

//Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + '' + lastName);
}

//Calculates a value
function square(number) {
    return number *number;
}

console.log(square(2));

