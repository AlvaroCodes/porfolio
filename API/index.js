const mongoose = require('mongoose');
const app = require("./app");


const port = process.env.PORT || 3977;

const urlMongodb = 'mongodb+srv://admAlvaroCodes:PorfolioAlvaroCodes123456@porfolioalvarocodes.4wwxj.mongodb.net/porfolioalvarocodes';


mongoose.connect(urlMongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
},(err, res) => {
    try {
        if(err) {
            throw err;
        }else {
            console.log("La conexion a la base de datos es correcta");

            app.listen(port, () => {
                console.log(`Servidor del API REST esta funcionando en http://localhost:${port}`);
            });
        }
    } catch (error) {
        console.log(error);
    }
})

