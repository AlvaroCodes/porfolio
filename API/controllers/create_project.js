const proj = require('../models/project')

async function createProject(req,res) {
   const project = new proj();
   const params = req.body;

   project.name = params.name;
   project.imgProject = params.imgProject;
   project.subText = params.subText;
   project.urlGit = params.urlGit;
   project.urlWeb = params.urlWeb;
   project.technologies = params.technologies;

   try {
       const projectStore = await project.save();

       if(!projectStore){
            res.status(400).send({msg: "No se ha guardado"})
       }else {
            res.status(200).send({technology: projectStore});
       }

   } catch (error) {
       res.status(500).send(error);
   }
}

module.exports = {
    createProject,
}