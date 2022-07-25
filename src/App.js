import { Form } from 'formik';
import { Fragment } from 'react';
import './App.css';
import ContactUs from './pages/ContactUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hooks from './pages/Hooks';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ContactUs />}></Route>
          <Route exact path='/hooks' element={<Hooks />}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
