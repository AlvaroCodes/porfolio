const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*
Solo será requerido el email y la contraseña- 
El email será la "pk" y será unico
*/
const UserSchama = Schema({
    name: {
        type: String,
        require: false,
    },
    lastname: {
        type: String,
        require: false,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
}); 

module.exports = mongoose.model("User", UserSchama);