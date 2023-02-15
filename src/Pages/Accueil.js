import React from 'react';
import Menu from '../Menu';

import "./Accueil.css"
const Accueil = (props) => {
    return (
        <div >
            <Menu />
      <h1 className="title">Bienvenue</h1>
           <span><h2 className='acc'>“L'humour est l’adrénaline des optimistes.”</h2></span>
       
        </div>
        
    );
};

export default Accueil;