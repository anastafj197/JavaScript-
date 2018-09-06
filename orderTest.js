// Frank Anastasia 
// Test first approach based on order.js 

function orderTotal(order) {
	return order.items.reduce((prev, cur) => cur.price * (cur.quanitity || 1) + prev, 0)
}

// Adding quality support 
if(orderTotal ({
	items: [
		{ name: 'Dog bed', price: 17, quanitity: 3 }
	]
}) !== 51) {
	throw new Error('Check Fail: quanitity')
}

// No quanitity 
if(orderTotal ({
	items: [
		{ name: 'Dog bed', price: 17 }
	]
}) !== 17) {
	throw new Error('Check Fail: No quanitity specified')
}

// Example 1
if(orderTotal({
	items: [
		{ name: 'Dog food', price: 9, quanitity: 2 },
		{ name: 'Dog cage', price: 55, quanitity: 1 }
	]	
}) !== 73) {
	throw new Error('Check Fail: Example 1')
}

// Example 2
if(orderTotal({
	items: [
		{ name: 'Dog collar', price: 13, quanitity: 1 },
		{ name: 'Dog toy', price: 7, quanitity: 1 }
	]	
}) !== 20) {
	throw new Error('Check Fail: Example 2')
}
