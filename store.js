# Frank Anastasia 
# Practice unit testing 
# Online store order 

const order = {
	items: [
		{ name: 'Bird food', price: 8 },
		{ name: 'Bird cage (small)', price: 300 }
	]
}

const orderTotal = order => order.items
	.reduce((prev, cur) => prev + cur.price, 0)

result = orderTotal(order)
