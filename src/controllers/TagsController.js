const knex = require("../database/db");

class TagsController {
    async index( req, res) {
        try {
             const { user_id } = req.params;

             const tags = await knex("tags")
             .where({ user_id });

             return res.json(tags);
             
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
        
    }
}

module.exports = TagsController;