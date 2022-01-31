const { validationResult } = require("express-validator");

const validateInput = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  console.log(next);
  if (!errors.isEmpty()) {
    return res.status(422).json(errors);
  }
  next();
};

module.exports = { validateInput };