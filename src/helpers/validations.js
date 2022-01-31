const db = require("../models");

export const checkEmail = async (email) => {
  const result = await db.Users.findOne({
    where: {
      email: email,
    },
  });
  if (result) {
    throw new Error("El email ya existe");
  }
};

export const checkUsername = async (username) => {
  const result = await db.Users.findOne({
    where: {
      username: username,
    },
  });
  if (result) {
    throw new Error("El nombre de usuario ya existe");
  }
};
