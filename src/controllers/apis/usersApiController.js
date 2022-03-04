//import { validationResult } from "express-validator";

const db = require("../../models");
const bcrypt = require("bcryptjs");

export const register = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  const { username, email, password, roleId } = req.body;
  const user = await db.Users.create({
    username,
    email,
    password,
    roleId,
  });
  let response = {
    meta: {
      status: 201,
      message: "Usuario creado correctamente",
    },
    data: user,
  };
  res.status(201).json(response);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
    
  }
};



export const getUsers = async (req, res) => {
  try {
    const users = await db.Users.findAll({
      include: {
        model: db.Roles,
        as: "role",
        attributes: ["id", "name", "description"],
      },
    });
    const response = {
      meta: {
        status: 200,
        message: "Usuarios obtenidos correctamente",
        total: users.length,
      },
      data: users,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
