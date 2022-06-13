import React from "react";
import './Header.css'
import { Link } from 'react-router-dom'

export default ({black}) => {
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
                <Link to="/Login" className="logout"> Sair </Link>
            </div>
        </header>
    )
}