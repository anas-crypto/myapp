import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik,useFormik } from 'formik';

const Api = () => {

  const formik = useFormik({
    initialValues: "",
    onSubmit: handleSubmit,
    
  });
  const [age, setAge]=useState  ({
    name:"",
    gender:'',
    count:'',
    ip:'',
  }) ;
  useEffect(()=>{
    axios.get(`https://api.ipify.org?format=json`).then((res)=>{
      setAge({
        ip:res.data,
      })
    })
    
       
      },[]);
    
  function handleSubmit(values) {
    console.log(values);
    axios.get(`https://api.genderize.io?name=${values}`).then((res) => {
      
      setAge({
        name:res.data,
        gender:res.data,
        count:res.data,
      });
    
      
     },[]);
    
  };
    
  return (
    
    <div>
      <p>{`${age.ip}`}</p>
      <input
              type='text'
               name='name'
              placeholder='Name'
              
            />
       
        <button onClick={handleSubmit}>Click Me</button>
        <p>{`${age.name}`}</p>
        <p>{`${age.gender}`}</p>
        <p>{`${age.count}`}</p>
      
    </div>
  )
  };


export default Api
  