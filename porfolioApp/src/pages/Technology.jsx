import React, { useEffect, useState } from 'react'


import ContactCard from '../components/ContactCard/ContactCard'
import './Technology.css'

import { faJs, faPhp, faHtml5, faCss3Alt, faReact, faNodeJs, faEnvira, faSass, faGit } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons'

const Technology = () => {

    const [technology, setTechnology] = useState([])
    const [loading, setLoading] = useState(true);

    const obtenerDatos = async () => {
        const response = await fetch(`http://localhost:3000/api/technology/`);
        const json = await response.json();

        console.log(json);

        setTechnology(json);
        setLoading(false);
    }

    useEffect(() => {
        obtenerDatos();
    }, []);


    const guiaIconos = {
        JavaScript: faJs,
        PHP: faPhp,
        HTML: faHtml5,
        CSS: faCss3Alt,
        React: faReact,
        NodeJS: faNodeJs,
        MongoDB: faEnvira,
        Sass: faSass,
        Git: faGit,
        SQL: faServer
    }



    if (loading) {
        return (
            <div className='tecnologia'>
                <h1>Cargando...</h1>
            </div>
        );
    } else {
        return (
            <div className='tecnologia'>

                <h1 className='tecnologia-title'>Technology</h1>
                <div className='tecnologia-cards'>


                    {
                       

                        technology.map((element) => {
                            return (<ContactCard nameIcon={guiaIconos[element.name]} url={`http://localhost:3001/technology/${element.name}`} />)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Technology