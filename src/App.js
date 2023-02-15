import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Accueil from './Pages/Accueil';
import Blagues from './Pages/Blagues';
import Galerie from './Pages/Galerie';
import Contact from './Pages/Contact';
import Erreur from './Pages/Erreur';

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/Accueil' element={<Accueil/>}  />
      <Route path='/Blagues' element={<Blagues/>}/>
      <Route path='/galerie' element={<Galerie/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='*' element={<Erreur/>}/>
    
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
