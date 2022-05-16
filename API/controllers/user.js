const bcrypjs = require("bcryptjs");
const User = require("../models/user");
const jwt = require("../services/jwt");

async function register(req, res) {
    const user = new User(req.body);
    const {email, password} = req.body;
    
    try {
				// Comprobación params body
        if(!email) throw {msg: "El email es obligatorio"};
        if(!password) throw {msg: "La contraseña es obligatoria"};

        // Revisamos si el email esta en uso 
        const foundEmail = await User.findOne({ email });
        if(foundEmail) throw {msg: "El email ya esta en uso"}

			 //hash password con bcrypjs
        const salt = bcrypjs.genSaltSync(10);
        user.password = await bcrypjs.hash(password, salt);

        user.save();
        res.status(200).send(user);

    } catch (error) {
        res.status(500).send(error);
    }
}

async function login(req, res){
    const {email, password} = req.body;


    try {
        const user = await User.findOne({ email });
 
        if(!user) throw {mgs: "Error en el email o contraseña"};

        const passwordSouccess = await bcrypjs.compare(password, user.password);
        if(!passwordSouccess) throw {msg: "Erroe ne el email o contraseña"};

        // jwt.io (para ver el decoded)
        res.status(200).send({token: jwt.createToek(user, "12h")});
      
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    register,
    login,
}