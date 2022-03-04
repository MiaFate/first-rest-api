//import { Router } from "express";
const {Router} = require("express");
const router = Router();
const { check } = require("express-validator");
//import { checkEmail, checkUsername } from "../../helpers/customValidations";
import { validateInput } from "../../middlewares";

//import * as authApiController from "../../controllers/apis/authApiController";
const { login } = require('../../controllers/apis/authApiController');

router.get(
  "/login",
  [
    check("email", "el email debe ser correcto").isEmail(), //.custom(checkEmail),
    check("password", "la contraseña es obligatoria").not().isEmpty(),
    validateInput,
  ],
  login
);

module.exports = router;
