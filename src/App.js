import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Popular from './components/Popular/Popular';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Popular />
      <AboutUs/>
    </div>
  );
}

export default App;
