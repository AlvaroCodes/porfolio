const tec = require('../models/technology')

async function createTechnology(req,res) {
   const technology = new tec();
   const params = req.body;

   technology.name = params.name;
   technology.imgTechnology = params.imgTechnology;
   technology.certifications = params.certifications;

   try {
       const technologyStore = await technology.save();

       if(!technologyStore){
            res.status(400).send({msg: "No se ha guardado"})
       }else {
            res.status(200).send({technology: technologyStore});
       }

   } catch (error) {
       res.status(500).send(error);
   }
}


async function getTechnology(req, res) {
   try {
       // Para ordenar, por fecha por ejemplo ... 
       //  const tech = await tec.find().sort({ created_at: -1 });

       const tech = await tec.find();
       if(!tech){
        res.status(400).send({msg: "Error al obtener las technologies"});
       }else {
           res.status(200).send(tech);
       }

   } catch (error) {
       res.status(500).send(error);
   }
}

async function getOneTechnology(req, res) {
    const idTech = req.params.id;

    try {
        const tech = await tec.findById(idTech);

        if(!tech){
            res.status(400).send({msg: "No se ha encontrado la technology"});
        }else {
            res.status(200).send(tech);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}


async function updateTechnology(req, res) {
    const idTech = req.params.id;
    const params = req.body;

    try {
        const tech = await tec.findByIdAndUpdate(idTech, params);

        if(!tech){
            res.status(400).send({msg: "No se ha podido actualizar"});
        }else {
            res.status(200).send({msg: "Actualización completada"});
        }
    } catch (error) {
        res.status(500).sende(error);
    }
}

async function deleteTechnology(req, res) {
    const idTech = req.params.id;

    try {
        const tech = await tec.findByIdAndDelete(idTech);

        if(!idTech){
            res.status(400).send({msg: "No se ha podido eliminar"});
        }else {
            res.status(200).send({msg: "Se ha eliminado correctamente"});
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createTechnology,
    getTechnology,
    getOneTechnology,
    updateTechnology,
    deleteTechnology,
};