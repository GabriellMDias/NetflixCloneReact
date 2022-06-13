import React from "react";
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

export default ({black}) => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"></img>
                </a>
            </div>
            <div className="header--user">
                
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user"></img>
                </a><br></br>
                <button className="logout" onClick={() => [signout(), navigate("/")]}>Sair</button>
            </div>
        </header>
    )
}