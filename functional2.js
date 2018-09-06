// Frank Anastasia 
// Chaining fucntions together 
// Uses data.txt to format a tab seperated datafile 

import fs from 'fs'

// reduce using object literal 
var output = fs.readFileSync('data.txt', 'utf8')
	.trim()
	.split('\n')
	.map(line => line.split('\t'))
	.reduce((customer, line) => {
		// reuse existing array if there is one else otherwise assign new 
		customers[line[0]] = customers[line[0]] || []
		customers[line[0]].push({
			name: line[1],
			price: line[2],
			quantity: line[3]
		})
		return customers
	}, {})

// Create a JSON string with the output with 2 spaces for indentation 
console.log('output', JSON.stringify(output, null, 2))
