import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Menu.css"
import logo from "./img/logo3.png"
const Menu = (props) => {
    return (
        <div >
            <ul class='navbar'>
                <img src={logo} className="logo" alt=""/>
                <NavLink to='/' className='item'><li>Accueil</li> </NavLink>
                
                <NavLink to='/Blagues' className='item'><li>Blagues</li></NavLink>
                <NavLink to='/Galerie' className='item'><li>Galerie</li></NavLink>
                <NavLink to='/Contact' className='item'><li>Contact</li></NavLink>
            </ul>
        </div>
    );
};

export default Menu;