exports.seed = async function(knex) {
	await knex("recipes").insert([   
    { recipe_id: 1, step_number: 1, directions: "Lay slices of bread next to each other." },
		{ recipe_id: 1, step_number: 2, directions: "Spread peanutbutter onto the slices of bread." },
		{ recipe_id: 1, step_number: 3, directions: "Slice banana into many slices and place them on on of the pieces of bread with peanut butter on it." },
		{ recipe_id: 1, step_number: 4, directions: "Place other slice of bread, peanutbutter side down, on top of the banana slices." },
		{ recipe_id: 1, step_number: 5, directions: "Enjoy" },
    { recipe_id: 2, step_number: 1, directions: "Empty the contents of all the packages of ingredients into a large bowl." },
		{ recipe_id: 2, step_number: 2, directions: "Mix all of the indredients together." },
		{ recipe_id: 2, step_number: 3, directions: "Enjoy" },
		{ recipe_id: 3, step_number: 1, directions: "Open can of croissant dough." },
		{ recipe_id: 3, step_number: 2, directions: "Follow the directions on the croissant dough packaging." },
	])
}
