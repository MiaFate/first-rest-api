const jwt = require("jsonwebtoken");
const db = require("../models");
const checkToken = async(req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({
      error: "No token provided",
    });
  }
  try {    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    const user = await db.User.findById(req.userId, {password: 0});
    if (!user) return res.status(401).json({error: "User not found"});
    next();    
  } catch (error) {    
    return res.status(401).json({
      name: error.name,
      message: error.message
    });
  }
};

module.exports = { checkToken: checkToken };
