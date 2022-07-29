import React from 'react';
import axios from 'axios';
import { Formik,useFormik } from 'formik';

const Api = () => {

  const formik = useFormik({
    initialValues: "",
    onSubmit: handleSubmit,
    
  });   
  function handleSubmit(values) {
    console.log(values);
    axios.get(`https://api.agify.io?name=${values}`).then((res) => {
      
     })
    
  }
    
  return (
    <div>
      <input
              type='text'
               name='name'
              placeholder='Name'
              
            />
       
        <button onClick={handleSubmit}>Click Me</button>
        
      
    </div>
  )
  };


export default Api
  