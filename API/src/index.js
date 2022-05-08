import  express  from "express";
import config from './config'
import router from './router';
import mongoose from 'mongoose'

let _server;

const urlMongoDB = 
'mongodb+srv://admAlvaroCodes:PorfolioAlvaroCodes123456@porfolioalvarocodes.4wwxj.mongodb.net/porfolioalvarocodes';

mongoose.connect (urlMongoDB,  { 
    useNewUrlParser: true, useUnifiedTopology: true
},(err, res)=> { 
   try {
    if(err){ 
        throw err
    }else {
        console.log('La conexion a la base de datos es correcta')
    }
   } catch (error) {
       
   } 
});

const server = {
    start(){
        const app = express();

        config(app);
        router(app);

        // Rutas
        app.get('/', (req, res, next) => {
            res
                .status(200)
                .json({data: 'metodo post'})
        })

        _server = app.listen('9000', ()=> {
            if(process.env.NODE_ENV !== 'test'){
                console.log('Servidor abierto en http://localhost:9000');
            }
            
        })
    },
    close (){
        _server.close();
    }
}

export default server;

if(!module.parent){
    server.start()
}