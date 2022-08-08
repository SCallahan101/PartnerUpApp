// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login/login.js';
import SignUpForm from './Components/Login/SignUpForm/sign-up-form.js';
import MainPage from './Components/MainPage/main-page';

import React from 'react';

function App() {
  return (
    <main className='App'>
      <h1>Center test for PartnerUp App</h1>
      {/* <Login /> */}
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route path='/login/sign-up' element={<SignUpForm/>} />
        <Route path='/main-page' element={<MainPage />} />
        
      </Routes>
    </main>
  );
}

export default App;
