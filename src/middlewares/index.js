const validateInput = require("./validateInput");
const validateJWT = require("./validateJWT");

module.exports = { ...validateInput,
  ...validateJWT };