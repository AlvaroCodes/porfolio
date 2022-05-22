const proj = require('../models/project')

async function createProject(req,res) {
   const project = new proj();
   const params = req.body;

   project.name = params.name;
   project.author = params.author;
   project.authorUrlImg = params.authorUrlImg;
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
            res.status(200).send({project: projectStore});
       }

   } catch (error) {
       res.status(500).send(error);
   }
}

async function getProject(req, res) {
    try {
       
        const projects = await proj.find().sort({ created_at: -1 });
        if(!projects){
         res.status(400).send({msg: "Error al obtener los projects"});
        }else {
            res.status(200).send(projects);
        }
 
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getOneProject(req, res) {
    const idProj = req.params.id;

    try {
        const project = await proj.findById(idProj);

        if(!project){
            res.status(400).send({msg: "No se ha encontrado el project"});
        }else {
            res.status(200).send(project);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateProject(req, res) {
    const idProject = req.params.id;
    const params = req.body;

    try {
        const projects = await proj.findByIdAndUpdate(idProject, params);

        if(!projects){
            res.status(400).send({msg: "No se ha podido actualizar"});
        }else {
            res.status(200).send({msg: "Actualización completada"});
        }
    } catch (error) {
        res.status(500).sende(error);
    }
}

async function deleteProject(req, res) {
    const idProject = req.params.id;

    try {
        const projects = await proj.findByIdAndDelete(idProject);

        if(!projects){
            res.status(400).send({msg: "No se ha podido eliminar"});
        }else {
            res.status(200).send({msg: "Se ha eliminado correctamente"});
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createProject,
    getProject,
    getOneProject,
    updateProject,
    deleteProject,
}