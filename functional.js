// Frank 	
// Practice functional programming with JavaScript 

var animals = [
{ name: 'Fluff',  species: 'rabbit' },
{ name: 'Polo',   species: 'dog' },
{ name: 'Nikki',  species: 'dog' },
{ name: 'Nemo',   species: 'fish' },
{ name: 'Sneaky', species: 'cat'},
{ name: 'Fuzzy',  species: 'cat'}
]

// decoupled 
var isDog = function(animal) {
	return animal.species === 'dogs'
}

// filter will loop through each item in the array 
// and for each item it wilol pass it into the call back function 
// expect true or false if it should be in the new array
// returns new filtered array 
var dogs = animals.filter(isDog)

// map function on array object 
// takes a callback function to return any object 
var names = animals.map(function(animal) {
	return animal.name 
})
