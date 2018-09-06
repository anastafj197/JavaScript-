// Frank Anastasia 
// Practice unit testing 
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
		.filter(x => !x.shipping)
		.reduce((prev, cur) => prev + cur.price * cur.quantity, 0)
	const shippingItem = 
		order.items.find(x => !!x.shipping)
	const shipping = 
		totalItems > 1000 ? 0 : shippingItem .price 
	return totalItems + shipping 
}

result = orderTotal(order)
console.log(result)
