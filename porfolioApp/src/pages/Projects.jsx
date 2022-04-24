import React, { useEffect, useState } from 'react'
import CarouselImg from '../components/Carousel/CarouselImg/CarouselImg';
import createValue from '../components/Carousel/CarouselImg/createValue';

import project from '../project'

const Projects = () => {
    const [pointer, setPointer] = useState(0);
    const [value, setValue] = useState({});

    const pointBack = () => {
        if(pointer > 0){
            setPointer(pointer - 1);
        }
    }

    const pointUp = () => {
    (pointer < (project.length - 1 ))? setPointer(pointer  + 1):setPointer(0);
    }

    useEffect(() => {
        let objtValue = createValue(project, pointer);
        setValue(objtValue);
    }, [pointer]);
    


  return (
    <div>
        <h1>Tecnologia</h1>

        <button onClick={pointBack}>Atras</button>
            <CarouselImg value={value} />
        <button onClick={pointUp}>Delante</button>

    </div>
  )
}

export default Projects