# Frank Anastasia 
# Practice unit testing 
# Online store order 

const order = {
	items: [
		{ name: 'Bird food',         price: 8,   quantity: 15 },
		{ name: 'Bird cage (small)', price: 300, quantity: 3 }
	]
}

# 
const orderTotal = order => order.items
	.reduce((prev, cur) => prev + cur.price * cur.quantity, 0)

result = orderTotal(order)
