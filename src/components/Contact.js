import React, { useState }  from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
 
    const [msg, setMsg] = useState("");





  function handleSubmit(values) {
    console.log(values);
    setMsg='submitted';
    
  }
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').max(8, 'Max 8'),
    email: Yup.string().required('Email is required').email('Invalid email'),
    message: Yup.string().required('message is req'),
  });

  //   const validateSchema = Yup.object().shape({
  //     first_name: Yup.string().required('Required'),
  //     last_name: Yup.string().required('Required'),
  //     email: Yup.string().email('Invalid email format').required('Required'),
  //     // profile_image: Yup.string(),
  //     phone_number: Yup.string(),
  //     mobile: Yup.string(),
  //     whatsapp: Yup.string(),
  //   });
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <form
      id='contactForm'
      name='contactForm'
      className='contactForm'
      onSubmit={formik.handleSubmit}
    >
      <div className='row'>
        <div className='col-md-6'>
          <div className='form-group'>
            <label className='label'>Full Name</label>
            <input
              type='text'
              className='form-control'
              name='name'
              id='name'
              placeholder='Name'
              onChange={formik.handleChange}
            />

            {formik.touched.name && formik.errors.name ? (
              <div className='error text-danger'>{formik.errors.name}</div>
            ) : null}
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form-group'>
            <label className='label'>Email Address</label>
            <input
              type='email'
              className='form-control'
              name='email'
              id='email'
              placeholder='Email'
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='error text-danger'>{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className='col-md-12'>
          <div className='form-group'>
            <label className='label'>Subject</label>
            <input
              type='text'
              className='form-control'
              name='subject'
              id='subject'
              placeholder='Subject'
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className='col-md-12'>
          <div className='form-group'>
            <label className='label'>Message</label>
            <textarea
              name='message'
              className='form-control'
              id='message'
              cols='30'
              rows='4'
              placeholder='Message'
              onChange={formik.handleChange}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <div className='error text-danger'>{formik.errors.message}</div>
            ) : null}
          </div>
        </div>
        <div className='col-md-12'>
          <div className='form-group'>
           
           <button>
            Submit
            
           </button>
           {msg}
           
           
            <div className='submitting' >{msg}</div>
            {msg}
          </div>

        </div>
      </div>
    </form>
    
  );
            }
;

export default Contact;
