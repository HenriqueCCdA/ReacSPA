import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './routes/Register';
import Login from './routes/Login';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/register">Register</Navbar.Brand>
          <Navbar.Brand href="/login">Login</Navbar.Brand>
        </Container>
    </Navbar>
    <Container className='mt-5'>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='register' element={<Register />}/>
        <Route path='login' element={<Login />}/>
      </Routes>
    </Container>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
