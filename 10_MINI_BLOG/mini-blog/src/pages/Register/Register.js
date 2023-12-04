import styles from './Register.module.css';
import { useState, useEffect } from 'react/cjs/react.production.min';

const Register = () => {
    return (
        <div>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe suas histórias</p>
            <form >
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        required
                        placeHolder="Nome do usuário"
                    />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeHolder="E-mail do usuário"
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeHolder="insira sua senha"
                    />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeHolder="Confirme a sua senha"
                    />
                </label>
                <button className="btn">Cadastrar</button>
            </form>
        </div>
    )
}

export default Register