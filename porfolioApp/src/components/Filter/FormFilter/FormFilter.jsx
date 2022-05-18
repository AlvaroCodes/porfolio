import React, { useState, useEffect} from 'react'
import "./FormFilter.css";

const FormFilter = ({ author, techs,  setJsonProjectChild}) => {



    const [projectJSON, setProjectJSON] = useState([]);

    
    const [selectAuthor, setSelectAuthor] = useState([]);
    const [selectTechs, setSelecTtechs] = useState([]);
   
    const obtenerDatos = async ()  => {
        const response = await fetch(`http://localhost:3000/api/project/`);
        const json = await response.json();

        setProjectJSON(json);
       

    }

  
    useEffect(  () => {
        obtenerDatos();
        setJsonProjectChild(filterJSON());
    }, [selectTechs, selectAuthor]);


    const selectFilter = ({ target }, state, functionState) => {
        if(target.checked) {
           

          

            functionState([...state, target.name]);
           filterJSON();
        }else {
          
          

         

            let arrFilter = state.filter((element)=>{
                if(element !== target.name){
                   
                    return element;
                }

            });

            functionState(arrFilter);
        
        }

    }

  

const filterJSON = () => {
    
    let filter = projectJSON.filter(elemento => {
     
        for (let i = 0; i < selectTechs.length; i++) {
            
            if(elemento.technologies.includes(selectTechs[i])){
                return true
            }
        }

        for (const value of selectAuthor) {
         
            if(elemento.author === value){
                return true
            }
        }
        
    })
    
    console.log(filter);
    return filter;

    

}

  


    return (
        <form className='formFilter'>

        <div className='filterContainer'>

        <h4 className='filterContainer-title'>Author Project</h4>
        {
                author.map((element, index) => {
                    return (
                        <div  key={index}  className='formFilter-elements'>
                            <label htmlFor="element">{element}</label>
                            <input onChange={ (e) => selectFilter(e, selectAuthor, setSelectAuthor)} name={element} className='formFilter-element ' type="checkbox"  defaultChecked={false}/>
                        </div>
                    )
                })
            }
        </div>
           

            <div className='filterContainer'>
                    <h4 className='filterContainer-title'>Technology</h4>

                    {
                techs.map((element, index) => {
                    return (
                        <div key={index} className='formFilter-elements'>
                            <label htmlFor="element">{element}</label>
                            <input onChange={ (e) => selectFilter(e, selectTechs, setSelecTtechs)} name={element} className='formFilter-element' type="checkbox" defaultChecked={false}/>
                        </div>
                    )
                })
            }
            </div>

           

        </form>
    )
}

export default FormFilter