if(orderTotal({
	items: [
		{ name: 'Dog food', price 9 },
		{ name: 'Dog cage', price 55 }
	]	
}) !== 64) {
	throw new Error('Check Fail: Example 1')
}

if(orderTotal({
	items: [
		{ name: 'Dog collar', price 13 },
		{ name: 'Dog toy', price 7 }
	]	
}) !== 20) {
	throw new Error('Check Fail: Example 2')
}

function orderTotal() {
	return order.items.reduce((prev, cur) => cur.price + prev, 0)
}
