import { Note } from "../models";

class NotesController {
  async store(req, res) {
    try {
      const { title, description, user_id} = req.body;
      //const { user_id } = req.params;

      const newNote = await Note.create({
        title,
        description,
        user_id,
      });



      return res.json(newNote);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  }

  async show(req, res) {
    const { id } = req.params;

    const note = await Note.findByPk(id)

    return res.json({
        ...note,
        tags,
        links
    });
  }

  // async delete(req, res) {
  //   try {
  //       const { id } = req.params;

  //       await knex("notes").where({ id }).delete();

  //       return res.json();

  //   } catch (error) {

  //   }
  // }

  // async index(req, res) {

  //   try {

  //       const { title, user_id, tags } = req.query;

  //       let notes;

  //       if(tags) {
  //           const filterTags = tags.split('.').map(tag => tag);

  //           notes = await knex("tags")
  //           .select([
  //               "notes.id",
  //               "notes.title",
  //               "notes.user_id"
  //           ])
  //           .where("notes.user_id", user_id)
  //           .whereLike("title", `%${title}%`)
  //           .whereIn("tags.name", filterTags)
  //           .innerJoin("notes", "notes.id", "tags.note_id")
  //           .orderBy("notes.title")
  //       }else {
  //           notes = await knex("tags")
  //           .where({ user_id })
  //           .whereLike("title", `%${title}%`)
  //           .orderBy("title")
  //       }

  //       const userTags = await knex("tags")
  //       .where({ user_id });

  //       const notesWithTags = notes.map(note => {
  //           const noteTags = userTags.filter(tag => tag.note_id === note.id);

  //           return {
  //               ...note,
  //               tags: noteTags
  //           }
  //       })



  //   } catch (error) {

  //   }
  // }


}

module.exports =  new NotesController();
