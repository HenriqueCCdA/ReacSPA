import React, { useState } from "react";
import { Alert, Button, Container, Form, ListGroup, Row } from "react-bootstrap";

function RegisterPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [role, setRole] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const [createUser, setCreateUser] = useState(false);

  const api = async (payload) => {
    let url = 'http://localhost:8000/api/v2/registrar/';

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let config = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: headers
    };

    let response = await fetch(url, config);
    let data = await response.json();

    if (response.status === 201) {
      console.log('Usuario registrado com sucesso');
      setCreateUser(true);
    } else {
      console.log('Erro na criação do usuario');
      setError(data.error);
    }

  }


  const handleSubmit = event => {
    event.preventDefault();

    let payload = {
      name,
      email,
      phone,
      institution,
      role,
      password1,
      password2,
    };

    setCreateUser(false);
    setError('');
    api(payload);

  }
  console.log(error)
  return (
    <Container>
      <Row>
        <h1>Register</h1>
      </Row>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label >Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            {error.name ? <Alert variant="danger">{error.name}</Alert> : ''}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label >Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {error.email ? <Alert variant="danger">{error.email}</Alert> : ''}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label >Phone:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />

            {error.phone ? <Alert variant="danger">{error.phone}</Alert> : ''}

          </Form.Group>
          <Form.Group className="mb-3" controlId="formInstitution">
            <Form.Label >Institution:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Institution"
              value={institution}
              onChange={e => setInstitution(e.target.value)}
            />
            {error.institution ? <Alert variant="danger">{error.institution}</Alert> : ''}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label >Role:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Role"
              value={role}
              onChange={e => setRole(e.target.value)}
            />
            {error.role ? <Alert variant="danger">{error.role}</Alert> : ''}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword1">
            <Form.Label >Password:</Form.Label>
            <Form.Control
              type="password"
              value={password1}
              onChange={e => setPassword1(e.target.value)}
            />
            {error.password1 ?
              (
                <ListGroup>
                  {error.password1.map(e => <ListGroup.Item variant="danger"> {e} </ListGroup.Item>)}
                </ListGroup>
              )
              : ''
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword2">
            <Form.Label >Confirm password:</Form.Label>
            <Form.Control
              type="password"
              value={password2}
              onChange={e => setPassword2(e.target.value)}
            />
            {error.password2 ? <Alert variant="danger">{error.password2}</Alert> : ''}
          </Form.Group>
          <Button variant="primary" type="submit">Enviar</Button>
        </Form>
      </Row>
      <Row className="mt-3">
        {createUser ? <Alert variant="success">Usuario criado com sucesso</Alert>: ''}
      </Row>
    </Container>

  )
}

export default RegisterPage;