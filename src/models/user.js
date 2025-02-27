import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcrypt";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        first_name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [4, 200],
              msg: "O nome deve ter pelo menos 4 caracteres",
            },
          }
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [4, 200],
              msg: "O sobrenome deve ter pelo menos 4 caracteres",
            },
          }
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: {
            msg: "Email já está cadastrado",
          },
          validate: {
            isEmail: {
              msg: "Email inválido",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              msg: "A senha deve ter entre 6 e 50 caracteres",
            },
          },
        },
      },
      {
        sequelize,
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    // Definir associações aqui, se necessário
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash); // Corrigido `passord_hash` → `password_hash`
  }
}
