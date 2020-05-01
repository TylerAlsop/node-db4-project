exports.seed = async function(knex) {
	await knex("recipes_ingredients").truncate()
  await knex("ingredients").truncate()
	await knex("quantities").truncate()
  await knex("recipes").truncate()
	await knex("steps").truncate()
}