import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, useFormik } from 'formik';

const Api = () => {
  const [std, setStd] = useState({
    name: 'Anas',
    age: '27',
    gender: 'sheMale',
  });
  const initialValues = {
    name: '',
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });
  const [age, setAge] = useState({
    name: '',
    gender: '',
    count: '',
  });
  const [ip, setIp] = useState('');
  useEffect(() => {
    // ------------------Other api call-------------
    axios.get(`https://api.genderize.io?name=Anas`).then((res) => {
      console.log(res);
      setAge({
        name: res.data.name,
        gender: res.data.gender,
        count: res.data.count,
      });
    });
    axios.get(`https://api.ipify.org?format=json`).then((res) => {
      setIp(res.data.ip);
    });
  }, []);

  function handleSubmit(values) {
    setStd({ ...std, name: 'Hamza', gender: 'Male' });
    console.log(`STD: ${std.name} ${std.age} ${std.gender}`);
    console.log(values.name);
    axios.get(`https://api.genderize.io?name=${values.name}`).then((res) => {
      setAge({
        name: res.data.name,
        gender: res.data.gender,
        count: res.data.count,
      });
    });
  }

  return (
    <div>
      <p>{`${ip}`}</p>
      <form onSubmit={formik.handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={formik.handleChange}
        />
        <button type='submit'>Click Me</button>
      </form>
      <p>{`${age.name}`}</p>
      <p>{`${age.gender}`}</p>
      <p>{`${age.count}`}</p>
    </div>
  );
};

export default Api;
