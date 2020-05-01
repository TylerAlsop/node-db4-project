exports.seed = async function(knex) {
	await knex("ingredients").insert([
		{ ingredient: "Slices of Bread", quantities_id: 7 },
    { ingredient: "Tablespoons of Peanutbutter", quantities_id: 10 },
		{ ingredient: "Banana", quantities_id: 3 },
		{ ingredient: "Bag of Pretzels", quantities_id: 3 },
		{ ingredient: "Bag of M&M's", quantities_id: 6 },
		{ ingredient: "Box of Raisins", quantities_id: 6 },
		{ ingredient: "Bag of Assorted Nuts", quantities_id: 6 },
		{ ingredient: "Can of Croissant Dough", quantities_id: 6 },
	])
}
