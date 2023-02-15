import React from 'react';
import Menu from '../Menu';
import img2 from '../img/contact.png';
import "./Contact.css"
const Contact = (props) => {
    return (
        <div>
                 <Menu />
           <h1 className='img2'> 
            <img src={img2} alt=""  /> 
             </h1>
        </div>
    );
};

export default Contact;