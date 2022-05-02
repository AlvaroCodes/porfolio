import React, { useEffect, useState } from 'react'
import CarouselImg from '../components/Carousel/CarouselImg/CarouselImg';
import technology from '../technology';


import CarouselList from '../components/Carousel/CarouselList/CarouselList';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

import './Technology.css';

const Technology = () => {
    const [pointer, setPointer] = useState(0);
    const [value, setValue] = useState({});

    const [projectJSON, setProjectJSON] = useState([])
    const [loading, setLoading] = useState(true);


    const pointBack = () => {
      
        (pointer > 0)?setPointer(pointer - 1):setPointer(projectJSON.length - 1);
        
    }

    const pointUp = () => {
    (pointer < (projectJSON.length - 1 ))? setPointer(pointer  + 1):setPointer(0);
    }

    const obtenerDatos = async ()  => {
        const response = await fetch(`http://localhost:9000/api/technology/`);
        const json = await response.json();
        let { datos } = json;
        setProjectJSON(datos);
        setLoading(false);

    }

   
  
    
    useEffect(() => {
        obtenerDatos();
    }, []);

    console.log(projectJSON);
    
   

    if (loading) {
        return (
            <div className='projects'>
                <h1>Cargando...</h1>
            </div>
        );
    }else {
        return (
            <div className='tecnologia'>
                <h1 className='tecnologia-title'>Tecnologia</h1>
        
            <section className='tecnologia-carousel'>
            
                <FontAwesomeIcon className='tecnologia-carousel--arrow'  onClick={pointBack} icon={faAngleDoubleLeft}/>
                        <CarouselImg value={projectJSON[pointer]} />
                <FontAwesomeIcon className='tecnologia-carousel--arrow' onClick={pointUp} icon={faAngleDoubleRight}/>
              
            </section>
               
        
                    <CarouselList pointer = {pointer}/>
             
        
            </div>
          )
    }

 
}

export default Technology