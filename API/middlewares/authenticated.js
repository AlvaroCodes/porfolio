const moment = require("moment");
const jwt = require("../services/jwt");

const SECRET_KEY = "lkjghdJJJklhj892JP78722GGjjhgfsd";

function ensureAuth(req, res, next) {
    if(!req.headers.authorization){
        return res
        .status(403)
        .send({msg: "La peticion no tiene la cabecera Autenticación"});
    }

    const token = req.headers.authorization.replace(/['"]+/g, "");
    const payload = jwt.decodeToken(token, SECRET_KEY);
    
    try {
        if(payload.exp <= moment().unix()){
            return res.status(400).send({msg: "El token ha expirado"})
        }
    } catch (error) {
        return res.status(400).send({msg: "Toekn invalido"})
    }

    req.user = payload;
    next();
}

module.exports = {
    ensureAuth,
}