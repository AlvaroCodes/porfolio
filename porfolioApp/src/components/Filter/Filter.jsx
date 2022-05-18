import React, { useEffect, useState } from 'react'

import './Filter.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import FormFilter from './FormFilter/FormFilter';

export const Filter = ({setProjectJSON, setPointer}) => {

  
    const [active, setActive] = useState(false);
    const [authors, setAuthors] = useState([]);
    const [technologiesState, setTechnologiesState] = useState([]);
    const [jsonProjectChild, setJsonProjectChild] = useState([]);
    const [projectsJSON, setProjectsJSON] = useState([]);


    const obtenerDatos = async ()  => {
      const response = await fetch(`http://localhost:3000/api/project/`);
      const json = await response.json();

      setProjectsJSON(json);
     

  }

  useEffect(() => {
      obtenerDatos();
  }, []);
    

    const filterJSON = () => {
      let techsArr = [];
      let authorsArr = [];

        for (const property in projectsJSON) {

          projectsJSON[property].technologies.forEach((element)=> {
            if(!techsArr.includes(element)){   
              techsArr = [...techsArr, element];
            }
          });



      
             if(!authorsArr.includes(projectsJSON[property].author)){
              authorsArr = [...authorsArr,  projectsJSON[property].author];     
             }   
          }     

          setTechnologiesState(techsArr);
          setAuthors(authorsArr);
          
          
}

useEffect(() => {

  if(jsonProjectChild[0] != undefined){
    console.log('Hola Feo')
    setProjectJSON(jsonProjectChild);
    setPointer(3);
  }else {
    filterJSON();
  }

}, [jsonProjectChild])


  
    const reverse = () => {
        setActive(!active);
    }

    if(!active){
        return (
            <div className='iconFilterContainer'>
                <FontAwesomeIcon className='iconFilter' onClick={reverse} icon={faFilter} />
                <p onClick={reverse} >Filtrar</p>
            </div>
          )
    }else {
        return (
            <div>

                <div>

                </div>
                <FontAwesomeIcon  className='iconFilter' onClick={reverse} icon={faFilter} />
                <p onClick={reverse} >Filtrar</p>


                <FormFilter setJsonProjectChild={setJsonProjectChild} author={authors}  techs={technologiesState}/>
            </div>
          )
    }
 
}
