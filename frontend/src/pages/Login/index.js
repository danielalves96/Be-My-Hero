import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css'

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.png';

export default function Login() {
    const [id, setId] = useState('');
    const history = useHistory();


    async function handleLogin(e) {
        e.preventDefault();

        try {

            const response = await api.post('sessions', { id });

            console.log(response.data.name)

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente')
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be My Hero" className="img-size" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input
                        type="text"
                        placeholder="ID da sua ONG"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#7958c5" />
                    Não tenho cadastro
                </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}