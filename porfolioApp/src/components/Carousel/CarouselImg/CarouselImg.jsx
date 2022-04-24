import React from 'react'
import './CarouselImg.css'

const CarouselImg = ({value}) => {

    // console.log(value.subText);

    let content;

    if (value.subText){
        
        content = <div>
                    <p>{value.name}</p>
                    <p>{value.subText}</p>
                    <img className='carouselImg-img' src={value.imgTechnology} alt="" />
                    <button>GitHub</button>
                    <button>Web</button>
                  </div>;
    }else {
        content = <div className='tecnologia-header'>
             <h2>{value.name}</h2>
        
            <img 
            className='tecnologia-header--logo'
            src={value.imgTechnology} alt="" />
        </div>
    }

    return (
        <div>
                
                {content}   
             
        </div>
    )


    }



export default CarouselImg