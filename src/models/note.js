// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Note extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association aqui, por exemplo:
//       Note.belongsTo(models.User, { foreignKey: 'user_id' });
//     }
//   }
//   Note.init({
//     title: {
//       type: DataTypes.STRING,
//       validate: {
//         len: {
//           args: [4, 200],
//           msg: 'O título deve ter pelo menos 4 caracteres',
//         },
//       },
//     },
//     description: {
//       type: DataTypes.TEXT
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Users',
//         key: 'id'
//       }
//     }
//   }, {
//     sequelize,
//     modelName: 'Note',
//   });
//   return Note;
// };
