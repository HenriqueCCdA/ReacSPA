import React, { useState } from "react";

function RegisterPage(){

    const [name, setName] = useState('test2');
    const [email, setEmail] = useState('test1@email.com');
    const [phone, setPhone] = useState('');
    const [institution, setInstitution] = useState('');
    const [role, setRole] = useState('');
    const [password1, setPassword1] = useState('123456!!');
    const [password2, setPassword2] = useState('123456!!');
    const [error, setError] = useState('');
    const [createUser, setCreateUser] = useState(false);

    const api = async (payload) => {
        let url = 'http://localhost:8000/api/v2/registrar/';

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        let config ={
            method: 'POST',
            body: JSON.stringify(payload),
            headers: headers
        };

        let response = await fetch(url, config);

        if (response.status === 201){
            console.log('Usuario registrado com sucesso');
            setCreateUser(true)
        } else {
            console.log('Erro na criação do usuario');
            let data = await response.json();
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

        api(payload);

    }
    console.log(error)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    {error.name}
                </label>
            </div>
            <div>
                <label>
                    email:
                    <input
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {error.email}
                    {error.username}
                </label>
            </div>
            <div>
                <label>
                    phone:
                    <input
                        type='text'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    {error.phone}
                </label>
            </div>
            <div>
                <label>
                    Institution:
                    <input
                        type='text'
                        value={institution}
                        onChange={e => setInstitution(e.target.value)}
                    />
                    {error.institution}
                </label>
            </div>
            <div>
                <label>
                    Role:
                    <input
                        type='text'
                        value={role}
                        onChange={e => setRole(e.target.value)}
                    />
                    {error.role}
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type='password'
                        value={password1}
                        onChange={e => setPassword1(e.target.value)}
                    />
                    {error.password1}
                </label>
            </div>
            <div>
                <label>
                    Confirm password:
                    <input
                        type='password'
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                    />
                    {error.password2}
                </label>
            </div>
            <button type='submit'>Enviar</button>
            { createUser ? <div>Usuario criado com sucesso</div> : ''}
        </form>
    )
}

export default RegisterPage;