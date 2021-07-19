const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');
const bcrypt = require('bcryptjs');

require('dotenv').config();

function GenerateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  });
}

exports.authenticate = async (req, res) => {
  try {
    const { login, senha } = req.body;
    if (!login === global.process.env.USER_LOGIN) 
      return res.status(400).send({ message: 'User not found' });

    if (!(await bcrypt.compare(senha, global.process.env.USER_SENHA))) 
      return res.status(400).send({ message: 'Invalid Password' });

    return res.send({ token: GenerateToken({login}) });
  } catch (err) {
    return res.status(400).send({ message: 'Login Failed' });
  }
};
