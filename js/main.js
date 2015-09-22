// triggers a pop up message
//alert("javascript has been loaded!");

// console.log("your secret message");

//document.getElementById('result').innerHTML = "Jeff Passetti";

// terms: 
// variables, strings, integers, boolean, 
// arrays, objects

var age = 33;
var oldMan = age + 50;
var firstName = "Jeff";
var lastName = "Passetti";
var enrolled = true;

var oldCars = ["CrossTrek", "Impreza", "Escort"];
var newCars = ["Mercedes", "BMW", "Ferrari"];

console.log(newCars[1]);

var carLibrary = [oldCars, newCars];

var profile = {
	firstName : "Gary",
	lastName : "Passetti",
	hometown : "Elmira",
	age : 32,
	homestate : "New York",
	birthday : "02/16/82"
};

//console.log(profile.homestate);

//profile.age === 45;

//console.log(profile.age >= 45);

if (profile.age < 30) {
	console.log(profile.firstName + " you're still young");
} else if (profile.age >= 30 || profile.age < 60) {
	console.log(profile.firstName + " you're getting older");
} else {
	console.log("you're really old");
}

var newAge = 32;

if (profile.age === newAge) {
	console.log("age match!");
} else {
	console.log("ages don't match");
}


function addNumbers(firstNum, secondNum) {
	return firstNum + secondNum;
}

console.log(addNumbers(57,100));


