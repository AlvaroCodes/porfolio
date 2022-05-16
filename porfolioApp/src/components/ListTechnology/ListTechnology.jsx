import React from 'react'
import './LisTechnology.css';
import 'animate.css';

const ListTechnology = ({certifications}) => {

  return (
    <div className='tecnologia__list  animate__animated animate__bounceIn'>
        {
        certifications.map((e, i) => {
            return (
               
                <div key={i} className='tecnologia__list-elemnt'>
                    <img  className='tecnologia__list-img' src={e.iconCompany} alt="" />
                    <a className='tecnologia__list-title' href={e.url}>{e.nameCertifications}</a>
                </div>
            )
        })
        }
    </div>
  )
}

export default ListTechnology