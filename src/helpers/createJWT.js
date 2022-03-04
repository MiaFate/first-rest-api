//import jwt from 'jsonwebtoken';
const jwt = require("jsonwebtoken");

const createJWT = (userId)=>{
    const payload = { userId };
    return jwt.sign(payload, process.env.JWT_SECRET , 
        {expiresIn: 60},
        );

}
module.exports = createJWT;