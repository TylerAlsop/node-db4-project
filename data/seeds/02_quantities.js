exports.seed = async function(knex) {
	await knex("quantities").insert([
    { quantity: 0.25 },
	{ quantity: 0.33 },
	{ quantity: 0.5 },
    { quantity: 0.66 },
    { quantity: 0.75 },
    { quantity: 1 },
	{ quantity: 2 },
	{ quantity: 3 },
    { quantity: 4 },
	{ quantity: 5 },
	])
}
