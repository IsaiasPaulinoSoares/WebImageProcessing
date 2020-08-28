import React from 'react';
import Button from '../../components/Button';
import './style.css';

const Login = () => {
    return(
        <div id="login" className="wrapper">
            <form id="login-form">
                <div className="input-group">
                    <label htmlFor="input-login" className="group-title">Login</label>
                    <input id="input-login" className="group-input" type="text"></input>
                </div>

                <label className="input-group">
                    <label htmlFor="input-login" className="group-title">Senha</label>
                    <input id="input-password" className="group-input" type="password"></input>
                </label>

                <a href="#" id="btn-esqueci">esqueci a senha</a>

                <Button text="ENTRAR" />
            </form>
        </div>
    );
}

export default Login;