import React, { useEffect, useState } from 'react'

import 'animate.css';
import './CardTechnology.css';
import { useParams, Navigate} from 'react-router-dom';

import ListTechnology from '../ListTechnology/ListTechnology'

export const CardTechnology = () => {

    const { idTech } = useParams();


    const [tech, setTech] = useState({});
    const [loading, setLoading] = useState(true);

    const obtenerDatos = async () => {
        const response = await fetch(`https://porfolioalvarocodes.herokuapp.com/api/technology`);
        const json = await response.json();

        setTech(json.filter(obj => obj.name === idTech)[0])

        setLoading(false);
    }

    useEffect(() => {
        obtenerDatos();
    }, []);


    if(!tech ) {
            return <Navigate to='/' />
    }

    if (loading) {
        return (
            <div className='tecnologia'>
                <h1>Cargando...</h1>
            </div>
        );
    } else {
        return (
            <main className='tecnologia'>
                <div className='technologyCard'>
                    <div className='tecnologia-header animate__animated animate__bounceIn'>
                        <h2>{tech.name}</h2>

                        <img
                            className='tecnologia-header--logo'
                            src={tech.imgTechnology} alt="prueba" />
                    </div>
                </div>

                <ListTechnology certifications={tech.certifications}/>
            </main>

        )
    }
}
