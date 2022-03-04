const db = require("../../models");
const bcrypt = require("bcryptjs");
const createJWT = require("../../helpers/createJWT");
export const login = async (req, res) => {
  try {
    const user = await db.Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (isMatch) {
        const token = await createJWT({ userId: user.id });
        res.json({ success: token });
      } else {
        return res.status(401).json({
          message: "Usuario o contraseña incorrectos",
        });
      }
    } else {
      res.status(404).json({
        message: "Usuario o email invalido",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
