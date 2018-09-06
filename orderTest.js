if(orderTotal({
	items: [
		{ name: 'Dog food', price 9 },
		{ name: 'Dog cage', price 55 }
	]	
}) !== 64) {
	throw new Error('Check Fail')
}

function orderTotal() {
	
}
