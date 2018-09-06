// Frank 	
// Practice functional programming with JavaScript 
// list transformations (map, flter, find, regect)

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
// returns an array of same length with each item in array transformed 
var names = animals.map(function(animal) {
	return animal.name 
})

var orders = [
	{ amount: 843 },
	{ amount: 436 },
	{ amount: 555 },
	{ amount: 234 }
]

// reduce fucntion on array object 
// takes a callback functions 
// reduce wants an object (starting point for sum)
// passed as first argument for reduce callback 
// reduce also recieves iterated item 
var totalAmount = orders.reduce(function(sum, order) {
	return sum + order.amount
}, 0)
