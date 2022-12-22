import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import Popular from './components/Popular/Popular';
import SpecialFU from './components/SpecialFU/SpecialFU'
function App() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="App">
      <Header />
      <Hero onMenu={() => setMenu(true)} />
      <Popular />
      <AboutUs />
      <SpecialFU />
      <Footer />
      {menu && <Menu onExit={()=> setMenu(false) } />}
    </div>
  );
}

export default App;
