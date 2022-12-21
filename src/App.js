import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Popular from './components/Popular/Popular';
import SpecialFU from './components/SpecialFU/SpecialFU'
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Popular />
      <AboutUs />
      <SpecialFU/>
    </div>
  );
}

export default App;
