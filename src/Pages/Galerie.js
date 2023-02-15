import Menu from '../Menu';
import React from 'react';
import './Galerie.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

 import img1 from '../img/imag1.jpg';
 import img2 from '../img/img2.jpeg';
 import img3 from '../img/img3.jpg';
 import img4 from '../img/img4.jpg';
 import img5 from '../img/img5.jpg';
 import img6 from '../img/img6.jpg';
 import img7 from '../img/img7.jpg';
 import img8 from '../img/img8.jpg';


function App() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: {
        max: 4000, min: 3000
      },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="App">
   <h1>Gallerie</h1>
   <br></br>
      <Carousel responsive={responsive}>
        <div>
          <img src={img1} alt="" />
      
        </div>
        <div>
          <img src={img2} alt="" />
     
        </div>
        <div>
          <img src={img3} alt="" />
       
        </div>
        <div>
          <img src={img4} alt="" />

        </div>
        <div>
          <img src={img5} alt="" />
     
        </div>
        <div>
          <img src={img6} alt="" />
         
        </div>
        <div>
          <img src={img7} alt="" />
      
        </div>
        <div>
          <img src={img8} alt="" />
        
        </div>
      
      </Carousel>
    </div>
  );
}

export default App;
