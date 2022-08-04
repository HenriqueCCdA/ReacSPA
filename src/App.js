import React from 'react';
import './index.css';
import {Route, Routes} from 'react-router-dom';
import Register from './routes/Register';
import Login from './routes/Login';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Home from './routes/Home';
import Restrito from './routes/Restrito';
import Logout from './routes/Logout';


function App() {

  return (
    <>
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/register">Register</Navbar.Brand>
          <Navbar.Brand href="/login">Login</Navbar.Brand>
          <Navbar.Brand href="/restrito">Area Restrita</Navbar.Brand>
          <Navbar.Brand href="/logout">Logout</Navbar.Brand>
        </Container>
    </Navbar>
    <Container className='mt-5'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='register' element={<Register />}/>
        <Route path='login' element={<Login />}/>
        <Route path='restrito' element={<Restrito />}/>
        <Route path='logout' element={<Logout />}/>
      </Routes>
    </Container>
    </>
  );

}

export default App;
