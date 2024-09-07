import { useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import Inicio from './components/inicio/inicio';
import Nosotros from './components/nosotros/nosotros';
import Servicios from './components/servicios/servicio';
import Contacto from './components/contacto/contacto';
import Footer from './components/footer/footer';
import './index.css';




function App() {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme? current_theme : 'dark');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme);
  }, [theme])

  return (
    <div className= {`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Inicio theme={theme} setTheme={setTheme}/>
      <Nosotros/>  
      <Servicios theme={theme} setTheme={setTheme}/>
      <Contacto theme={theme} setTheme={setTheme}/>
      <Footer theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
