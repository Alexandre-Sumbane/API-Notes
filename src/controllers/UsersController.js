import bcrypt from "bcrypt";
import { User } from "../models";

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
}

export default new UsersController();
