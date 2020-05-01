exports.up = async function(knex) {

/////////////// recipies ///////////////

    await knex.schema.createTable("recipies", (table) => {
        table.increments("id")
        table.text("name").notNullable()
    })

/////////////// quantities ///////////////

    await knex.schema.createTable("quantities", (table) => {
        table.increments("id")
        table.float("amount").notNullable()
    })

/////////////// ingredients ///////////////

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("name").notNullable()
        table.float("quantity_id")
            .references("id")
            .inTable("quantities")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
    })

/////////////// ingredients_recipies ///////////////

    await knex.schema.createTable("ingredients_recipies", (table) => {
        table.integer("recipe_id")
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")

        table.integer("ingredients_id")
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")

        table.primary(["recipe_id", "ingredients_id"])
    })

/////////////// steps ///////////////

    await knex.schema.createTable("steps", (table) => {
        table.increments("id")
        table.text("instructions")
    })


};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("ingredients_recipies")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("quantities")
    await knex.schema.dropTableIfExists("recipies")

};
