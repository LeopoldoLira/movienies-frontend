import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './Login/LoginForm';
import SignupForm from './Signup/SignupForm';
// import PrivateAuthroute from './utils/PrivateAuthroute';
import { AuthProvider } from './Context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <Routes>
        <Route path='/' element={ <App /> } exact />
        <Route path='login' element={ /*<PrivateAuthroute>*/<LoginForm />/*</PrivateAuthroute>*/ } />
        <Route path='signup' element={ <SignupForm /> } />
    </Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
