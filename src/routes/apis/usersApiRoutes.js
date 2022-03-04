//import { Router } from "express";
const {Router} = require("express");
const router = Router();
const { check } = require("express-validator");
//import { checkEmail, checkUsername } from "../../helpers/customValidations";
const {checkEmail, checkUsername} = require("../../helpers/customValidations");
//import { validateInput } from "../../middlewares";
const {validateInput} = require("../../middlewares");

//import * as usersApiController from "../../controllers/apis/usersApiController";
const {register} = require('../../controllers/apis/usersApiController');

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
  register
);

//router.get("/", usersApiController.getUsers);

module.exports = router;
