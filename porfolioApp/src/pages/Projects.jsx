import React, { useEffect, useState } from 'react'
import CardProjects from '../components/CardProjects/CardProjects';
import { Filter } from '../components/Filter/Filter';



import './Projects.css';

const Projects = () => {
    const [pointer, setPointer] = useState(3);
    const [projectJSON, setProjectJSON] = useState([]);
    const [loading, setLoading] = useState(true);
    

    const pointUp = () => {
        if (pointer < projectJSON.length) {
            setPointer(pointer + 3)
        }

    }

    const pointBack = () => {
        if (pointer > 3) {
            setPointer(pointer - 3)
        }
    }

    const mostrarProjects = () => {
        if (projectJSON.length > 3) {
            return projectJSON.map((e, i) => {
                if (i < pointer) {
                    return <CardProjects key={i * 3} value={projectJSON[i]} />;
                }
            })
        } else {
            return projectJSON.map((e, i) => {
                return <CardProjects key={i * 2} value={projectJSON[i]} />;
            })
        }
    }

    const obtenerDatos = async ()  => {
        const response = await fetch(`https://porfolioalvarocodes.herokuapp.com/api/project`);
        const json = await response.json();

        setProjectJSON(json);
        setLoading(false);

    }

    useEffect(() => {
        obtenerDatos();
    }, []);


    if (loading) {
        return (
            <div className='projects'>
                <h1>Cargando...</h1>
            </div>
        );
    }else {
        if (projectJSON.length < 3) {
            return (
                <div className='projects'>
                    <h1 className='projects-title'>Projects</h1>

                    <Filter projectJSON={projectJSON} setProjectJSON={setProjectJSON} setPointer={setPointer} />

                    <div className='carrousel-projects'>
                        {mostrarProjects()}
                    </div>
    
                </div>
            )
        } else {
            return (
                <div className='projects'>
                    <h1 className='projects-title'>Projects</h1>
    
                    <Filter projectJSON={projectJSON} setProjectJSON={setProjectJSON} setPointer={setPointer} />

                    <div className='carrousel-projects'>
                        {mostrarProjects()}
                    </div>
    
    
                    <div>
                        {
                            (pointer < projectJSON.length) ?
                                <button className='btn' onClick={pointUp}>
                                    More
                                </button>
    
                                : null
                        }
    
                        {
                            (pointer <= 3 ) ? null
                           :  <button className='btn' onClick={pointBack}>
                           Less
                           </button> 
                        }

                       
                    </div>
    
    
                </div>
            )
        }
    }

 

}

export default Projects