const db = require("../data/config")

function getRecipes(){
    return db("recipes")
}

function getShoppingList(recipe_id){
    return db("recipes_ingredients as ri")
    .join("recipes as r", "r.id", "ri.recipe_id")
    .join("ingredients as i", "i.id", "ri.ingredients_id")
    .join("quantities as q", "q.id", "i.quantities_id")
    .where("ri.recipe_id", recipe_id)
    .select(
        "r.name",
        "i.ingredient",
        "q.quantity",
    )
}

function getInstructions(recipe_id){
    return db("steps as s")
    .join("recipies as r", "r.id", "s.recipe_id")
    .where("r.id", recipe_id)
    .select(
        "s.recipe_id",
        "s.step_number",
        "s.directions"

    )
}


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}