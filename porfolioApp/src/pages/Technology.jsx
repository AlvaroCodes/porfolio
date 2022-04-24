import React, { useEffect, useState } from 'react'
import CarouselImg from '../components/Carousel/CarouselImg/CarouselImg';
import technology from '../technology';

import createValue from '../components/Carousel/CarouselImg/createValue';
import CarouselList from '../components/Carousel/CarouselList/CarouselList';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

import './Technology.css';

const Technology = () => {
    const [pointer, setPointer] = useState(0);
    const [value, setValue] = useState({});

    const pointBack = () => {
      
        (pointer > 0)?setPointer(pointer - 1):setPointer(technology.length - 1);
        
    }

    const pointUp = () => {
    (pointer < (technology.length - 1 ))? setPointer(pointer  + 1):setPointer(0);
    }

    useEffect(() => {
        let objtValue = createValue(technology, pointer);
        setValue(objtValue);
    }, [pointer]);
    


  return (
    <div className='tecnologia'>
        <h1 className='tecnologia-title'>Tecnologia</h1>

    <section className='tecnologia-carousel'>
    
        <FontAwesomeIcon className='tecnologia-carousel--arrow'  onClick={pointBack} icon={faAngleDoubleLeft}/>
                <CarouselImg value={value} />
        <FontAwesomeIcon className='tecnologia-carousel--arrow' onClick={pointUp} icon={faAngleDoubleRight}/>
      
    </section>
       

            <CarouselList pointer = {pointer}/>
     

    </div>
  )
}

export default Technology