import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';

import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import FormModal from './components/FormModalOrder/FormModalOrder';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import Popular from './components/Popular/Popular';
import SpecialFU from './components/SpecialFU/SpecialFU'
import Team from './components/Reviews/Reviews';


function App() {
  const [menuModal, setMenuModal] = useState(false)
  const [orderModal, setOrderModal] = useState(false)
  const [orderStorage, setOrderStorage] = useState(JSON.parse(localStorage.getItem("order")) ?? [])

  const aboutUsRef = React.createRef(null)
  const specialRef = React.createRef(null)

  const onScroll = (section) => window.scrollTo({ top: section.current.offsetTop, behavior: 'smooth' })

  const onOrder = (name, price) => {
    const product = {
      name: name,
      price: price,
      id: nanoid()
    }
    if (orderStorage) {
      setOrderStorage([...orderStorage, product])

    } else {
      setOrderStorage([product])
    }
    Notiflix.Notify.success(`Successfull added to cart: ${name}`)
  }

  const onDelete = (id) => {
    setOrderStorage(orderStorage.filter(elem => elem.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(orderStorage))
  }, [orderStorage])
  
  const sortOrder = (prevState, by, setToggle) => {
    if (by === "price") {
      if (prevState === false) {
        setOrderStorage(orderStorage.sort((a, b) => a.price - b.price))
      } else if (prevState === true) {
        setOrderStorage(orderStorage.sort((a, b) => b.price - a.price))
      }
      setToggle(!prevState)
    }
    if (by === "name") {
      if (prevState === false) {
        setOrderStorage(orderStorage.sort((a, b) => a.name.localeCompare(b.name)))
      } else if (prevState === true) {
        setOrderStorage(orderStorage.sort((a, b) => b.name.localeCompare(a.name)))
      }
      setToggle(!prevState)
    } 
  }

  const sortWtSort = (prevState, setToggle) => {
    let done = false
    let array = JSON.parse(localStorage.getItem("order"))
    if (prevState === false) {
      while (!done) {
      done = true;
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1].price > array[i].price) {
          done = false;
          let a = array[i - 1];
          array[i - 1] = array[i];
          array[i] = a;
        }
      }
    }
    } else if (prevState === true) {
      while (!done) {
      done = true;
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1].price < array[i].price) {
          done = false;
          let a = array[i - 1];
          array[i - 1] = array[i];
          array[i] = a;
        }
      }
    }
    }
    setToggle(!prevState)
    setOrderStorage(array)
  } 


  return (
    <div className="App">
      <Header goToAbout={() => onScroll(aboutUsRef)}
        goToSpecial={() => onScroll(specialRef)}
        onOrder={() => setOrderModal(true)} />
      <Hero onMenu={() => setMenuModal(true)} onOrder={() => setOrderModal(true)} />
      <Popular onAddProd={onOrder} />
      <AboutUs refTo={aboutUsRef} onOrder={() => setMenuModal(true)}/>
      <SpecialFU specialRef={specialRef} onAddProd={onOrder} />
      <Team/>
      <Footer />
      <Menu modal={menuModal}
        onExit={() => setMenuModal(false)}
        addProd={onOrder}
        onOrder={() => {
          setMenuModal(false)
          setOrderModal(true)
        }} />
      <FormModal modal={orderModal}
        onExit={() => setOrderModal(false)}
        onMenu={() => {
          setOrderModal(false)
          setMenuModal(true)
        }}
        onSort={sortOrder}
        onSortWS={sortWtSort}
        order={orderStorage}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
