//import { Router } from "express";
const {Router} = require("express");
const router = Router();
const { check } = require("express-validator");
import { checkEmail, checkUsername } from "../../helpers/customValidations";
import { validateInput } from "../../middlewares";

import * as usersApiController from "../../controllers/apis/usersApiController";

router.post(
  "/register",
  [
    check("username", "el nombre de usuario es obligatorio")
      .not()
      .isEmpty()
      .custom(checkUsername),
    check("email", "el email debe ser correcto").isEmail().custom(checkEmail),
    check("password", "la contraseña es obligatoria").not().isEmpty(),
    validateInput,
  ],
  usersApiController.register
);

//router.get("/", usersApiController.getUsers);

module.exports = router;
