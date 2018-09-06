// Frank Anastasia 
// Practice JavaScript unit testing 
// Online store order 

const order = {
	items: [
		{ name: 'Bird food',         price: 8,   quantity: 15 },
		{ name: 'Bird cage (small)', price: 300, quantity: 3 },
		{ name: 'Shipping',          price: 40,  shipping: true }
	]
}

//
const orderTotal = order => {
	const totalItems = order.items 
		// sum only items that arent shipping items 
		.filter(x => !x.shipping)
		.reduce((prev, cur) => prev + cur.price * cur.quantity, 0)
	const shippingItem = 
		// find shipping item in the array 
		order.items.find(x => !!x.shipping)
	const shipping = 
		// calculate shipping 
		// shipping is 0 if the total is over 1500
		// shipping is shipping price otherwise 
		totalItems > 1500 ? 0 : shippingItem .price 
	return totalItems + shipping 
}

result = orderTotal(order)
console.log(result)

