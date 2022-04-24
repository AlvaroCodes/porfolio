const createValue = (valueCarosel, pointer) => {
    if ( valueCarosel[pointer].subText){

      let {name, imgTechnology, subText, urlGit, urlWeb } = valueCarosel[pointer];
      console.log(pointer);
      console.log(valueCarosel);
      return ( {
        name, imgTechnology, subText, urlGit, urlWeb
      });
    

    }else {
      let {name, imgTechnology } = valueCarosel[pointer];
      console.log(pointer);
      console.log(valueCarosel);
      return ( {
        name, 
        imgTechnology
      });
    }
  }

  export default createValue;