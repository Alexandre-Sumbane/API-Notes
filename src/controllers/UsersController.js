import bcrypt from "bcrypt";
import { User } from "../models";
import note from "../models/note";

class UsersController {
    async store(req, res) {
        try {

            const { firstName, lastName, email, password } = req.body;

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({ firstName, lastName, email, password: hashedPassword });


            return res.json({newUser});

        } catch (e) {
            console.log(e);
            return res.status(400).json({ e });
        }
    }

    async index(req, res){
      try {
        const allUsers = await User.findAll( { attributes: { exclude: ['password'] } });

        return res.status(200).json(allUsers);
      } catch (e) {
        return res.status(400).json({ e });
      }
    }

    async show(req, res) {
      try {
        const { id } = req.params;

        const userShow = await User.findByPk(id,  { attributes: { exclude: ['password'] } });

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
        const { firstName, lastName, email, password } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
          return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        await user.update({ firstName, lastName, email, password });

        return res.json(user);
      } catch (e) {
        return res.status(400).json({ error: e.message });
      }
    }

    async delete(req, res) {
      try {
        const { id } = req.params;
        const { firstName, lastName, email, password } = req.body;

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
