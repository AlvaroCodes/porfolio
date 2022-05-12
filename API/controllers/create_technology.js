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

module.exports = {
    createTechnology,
}