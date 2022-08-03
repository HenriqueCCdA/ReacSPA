import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage(){

    const [username, setUsername] = useState('test1@email.com');
    const [password, setPassword] = useState('123456!!');
    const [token, setToken] = useState('');
    const [error, setError] = useState('');

    const api = async (url, payload) => {

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        let config ={
            method: 'POST',
            body: JSON.stringify(payload),
            headers: headers
        };

        let response = await fetch(url, config);
        let data = await response.json();

        if (response.status === 200){
            console.log('Token recuperado');
            setToken(data.token)
        } else {
            console.log('Erro nas credenciais');
            setError(data.non_field_errors);
        }

    }


    const handleSubmit = event => {
        event.preventDefault();

        let payload = { username, password};

        setError('');
        setToken('')

        let url = 'http://localhost:8000/api/v2/login/';
        api(url, payload);

    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Login</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label >Email address</Form.Label>
                            <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                             />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">Enviar</Button>
                    </Form>
                </Col>
            </Row>
            <Row className="mt-3">
                <ListGroup>
                    {error ? <ListGroup.Item variant="danger"> {error} </ListGroup.Item> : ''}
                    {token ? <ListGroup.Item variant="primary">Token {token} </ListGroup.Item>: ''}
                </ListGroup>
            </Row>

        </Container>
    )
}

export default LoginPage;