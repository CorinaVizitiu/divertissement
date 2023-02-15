import React from 'react';
import Menu from '../Menu';
import './Blagues.css';
const Blagues = (props) => {
    return (
        <div className='galerie'>
            <Menu/>
           
            <h1 className='title2'>Blagues drôles</h1>
 <p className='p1'> <h2>Que faisaient les dinosaures quand ils n'arrivaient pas à se décider?</h2>
<h3 >Des tirageosaures.</h3></p>
<p className='p2' ><h2>Qu'est-ce qu'un tennisman adore faire ?</h2>
<h3 >Rendre des services.</h3></p>
<p className='p3' ><h2>Où est-ce que les super-héros vont-ils faire leurs courses ?</h2>
<h3 >Au supermarché.</h3> </p>
        </div>
    );
};

export default Blagues;