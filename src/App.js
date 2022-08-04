import React from 'react';
import './index.css';
import {Route, Routes} from 'react-router-dom';
import Register from './routes/Register';
import Login from './routes/Login';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function App() {

  return (
    <>
    <Navbar bg="light" expand="lg">
        <Container>
          {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
          <Navbar.Brand href="/register">Register</Navbar.Brand>
          <Navbar.Brand href="/login">Login</Navbar.Brand>
        </Container>
    </Navbar>
    <Container className='mt-5'>
      <Routes>
        {/* <Route path='/' element={<App />}/> */}
        <Route path='register' element={<Register />}/>
        <Route path='login' element={<Login />}/>
      </Routes>
    </Container>
    </>
  );

}

export default App;
