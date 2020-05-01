exports.seed = async function(knex) {
	await knex("recipes").insert([   
		{ name: "Peanutbutter & Banana Sandwiches" },
    { name: "Trail Mix" },
    { name: "Croissants From A Can" },
	])
}
