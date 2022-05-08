import { techno } from '../models/technologies';

export  const createTechnology = async (req, res) =>  { 
    
   
    try {
      
  


    const technology = new techno();
    const params = req.body;

    technology.name = params.name;
    technology.imgTechnology = params.imgTechnology;
    console.log('Create Technology', req.body);
    
    const technologyStore = await techno.save();

    if(!technologyStore){
        res
        .status(400)
        .json({ data: 'Error con el metodo post 1' })
    } else {
        res 
        .status(201)
        .json(req.body)
        console.log('Create Technology', req.body);
    }

    } catch (error) {
        res
        .status(500)
        .json({ data: 'Error con el metodo post 2' })
    }
};