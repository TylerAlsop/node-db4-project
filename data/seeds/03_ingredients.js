exports.seed = async function(knex) {
	await knex("ingredients").insert([
		{ name: "Slices of Bread", quantities_id: 7 },
    { name: "Tablespoons of Peanutbutter", quantities_id: 10 },
		{ name: "Banana", quantities_id: 3 },
		{ name: "Bag of Pretzels", quantities_id: 3 },
		{ name: "Bag of M&M's", quantities_id: 6 },
		{ name: "Box of Raisins", quantities_id: 6 },
		{ name: "Bag of Assorted Nuts", quantities_id: 6 },
		{ name: "Can of Croissant Dough", quantities_id: 6 },
	])
}
