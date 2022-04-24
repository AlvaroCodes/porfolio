import React from 'react'
import technology from '../../../technology'

const CarouselList = ({pointer = 0}) => {

  return (
    <div className='tecnologia__list'>
        {
        technology[pointer].certifications.map( e => {
            return (
               
                <div className='tecnologia__list-elemnt'>
                    <img  className='tecnologia__list-img' src={e.iconCompany} alt="" />
                    <a className='tecnologia__list-title' href={e.url}>{e.nameCertifications}</a>
                </div>
            )
        })
        }
    </div>
  )
}

export default CarouselList