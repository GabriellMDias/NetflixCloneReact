import React from "react";
import './style.css';
import { Link } from 'react-router-dom';

function Login () {
    return (
        <div className="loginPage">
            <div className="backImage">

            </div>
            <a href="/" className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"></img>
            </a>
           
           <div className="divForm">
                <h1>Entrar</h1>
                <form className="loginForm">
                    <input type="email" placeholder="Email"></input><br></br>
                    <input type="password" placeholder="Senha"></input><br></br>
                    <input className ="botEntrar" type="submit" value="Entrar"></input>
                </form>
                <p>Novo por aqui?<Link to="/Cadastro"> Assine agora </Link></p>
           </div>
        </div>
        
    );
}

export default Login;