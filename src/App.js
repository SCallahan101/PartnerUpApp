// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login/login.js';

import React from 'react';

function App() {
  return (
    <main className='App'>
      <h1>Center test for PartnerUp App</h1>
      {/* <Login /> */}
      <Routes>
        <Route exact path='/' element={<Login />} />

      </Routes>
    </main>
  );
}

export default App;
