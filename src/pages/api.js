import React,{ useEffect, useState} from 'react';
import axios from 'axios';


const Api = () => {
  useEffect(() => {
    setimg(
      axios.get(`https://catfact.ninja/fact`)
    )
  },[]);
   const [img, setimg] = useState({
    img:'',
    
  });
    function dog(){
        setimg(
            axios.get(`https://catfact.ninja/fact`)
        

        );
    }
       

    
  return (
    <div>
       
        <button onClick={dog}>Click Me</button>
        
      
    </div>
  )
  };


export default Api
  