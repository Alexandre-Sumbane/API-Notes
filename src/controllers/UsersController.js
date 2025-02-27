import bcrypt from "bcrypt";
import User  from "../models/user";

class UsersController {
    async store(req, res) {
        try {

           const newUser = await User.create(req.body)


            const { id, first_name, email } = newUser;


            return res.json({
              id,
              first_name,
              email
            });

        } catch (e) {
            console.log(e);
            return res.status(400).json({ e });
        }
    }

    async index(req, res){
      try {
        const allUsers = await User.findAll( { attributes: { exclude: ['password_hash'] } });

        return res.status(200).json(allUsers);
      } catch (e) {
        return res.status(400).json({ e });
      }
    }

    async show(req, res) {
      try {
        const { id } = req.params;

        const userShow = await User.findByPk(id,  { attributes: { exclude: ['password_hash'] } });

        if(!userShow) {
          return res.status(404).json( 'Usuario não encontrado' );
        }

        return res.status(200).json( userShow )
      } catch (e) {
        return res.status(500).json(e);
      }
    }

    async update(req, res) {
      try {
        const { id } = req.params;
        console.log("ID recebido:", id);
        const { first_name, last_name, email } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
          return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        await user.update({ first_name, last_name, email, password });

        return res.json(user);
      } catch (e) {
        return res.status(400).json({ error: e.message });
      }
    }

    async delete(req, res) {
      try {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
          return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        await user.destroy();

        return res.json(user);
      } catch (e) {
        return res.status(400).json({ error: e.message });
      }
    }

}

export default new UsersController();
