import React, { useEffect, useState } from 'react'
import CarouselImg from '../components/Carousel/CarouselImg/CarouselImg';
import createValue from '../components/Carousel/CarouselImg/createValue';


import './Projects.css';

const Projects = () => {
    const [pointer, setPointer] = useState(3);
    const [projectJSON, setProjectJSON] = useState({})
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
        console.log(projectJSON);
        if (projectJSON.length > 3) {
            return projectJSON.map((e, i) => {
                if (i < pointer) {
                    let objtValue = createValue(projectJSON, i);
                    return <CarouselImg value={objtValue} />;
                }
            })
        } else {
            return projectJSON.map((e, i) => {
                let objtValue = createValue(projectJSON, i);
                return <CarouselImg value={objtValue} />;
            })
        }
    }

    const obtenerDatos = async ()  => {
        const response = await fetch(`http://localhost:9000/api/project/`);
        const json = await response.json();
        let { datos } = json;
        setProjectJSON(datos);
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
    
                    <div className='carrousel-projects'>
                        {mostrarProjects()}
                    </div>
    
                </div>
            )
        } else {
            return (
                <div className='projects'>
                    <h1 className='projects-title'>Projects</h1>
    
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
    
                        <button className='btn' onClick={pointBack}>
                            Less
                        </button>
                    </div>
    
    
                </div>
            )
        }
    }

 

}

export default Projects