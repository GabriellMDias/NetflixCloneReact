import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

const Private = ({ Item }) => {
    const signed = false;
    
    return signed > 0 ? <Item/> : <Login/>;


}

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/Home" element = {<Private Item={Home}/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route exact path="/Cadastro" element = {<Cadastro/>}/>
                <Route path="*" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;