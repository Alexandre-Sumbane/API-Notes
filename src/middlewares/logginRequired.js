import jwt from 'jsonwebtoken';
import User from '../models/user';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(dados);

    const { id, email } = dados;

    const user = await User.findOne({ where: { id, email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido!'],
      });
    }

    req.id = id;
    req.userEmail = email;

    return next();
  } catch (error) {
    console.error('Erro de autenticação:', error);
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
