import React, {useEffect, useState} from 'react';

import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import FormModal from './components/FormModalOrder/FormModalOrder';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import Popular from './components/Popular/Popular';
import SpecialFU from './components/SpecialFU/SpecialFU';
import Team from './components/Reviews/Reviews';

import {getOrder} from './redux/selectors';
import {useSelector} from 'react-redux';

function App() {
	const [menuModal, setMenuModal] = useState(false);
	const [orderModal, setOrderModal] = useState(false);
	const order = useSelector(getOrder);
	const aboutUsRef = React.createRef(null);
	const specialRef = React.createRef(null);

	const onScroll = section => window.scrollTo({top: section.current.offsetTop, behavior: 'smooth'});

	useEffect(() => {
		localStorage.setItem('order', JSON.stringify(order));
	}, [order]);

	// Const sortOrder = (prevState, by, setToggle) => {
	//   if (by === "price") {
	//     if (prevState === false) {
	//       setOrderStorage(orderStorage.sort((a, b) => a.price - b.price))
	//       return orderStorage.sort(///////)
	//     } else if (prevState === true) {
	//       setOrderStorage(orderStorage.sort((a, b) => b.price - a.price))
	//     }
	//     setToggle(!prevState)
	//   }
	//   if (by === "name") {
	//     if (prevState === false) {
	//       setOrderStorage(orderStorage.sort((a, b) => a.name.localeCompare(b.name)))
	//     } else if (prevState === true) {
	//       setOrderStorage(orderStorage.sort((a, b) => b.name.localeCompare(a.name)))
	//     }
	//     setToggle(!prevState)
	//   }
	// }

	const sortWtSort = (prevState, setToggle) => {
		let done = false;
		const array = JSON.parse(localStorage.getItem('order'));
		if (prevState === false) {
			while (!done) {
				done = true;
				for (let i = 1; i < array.length; i += 1) {
					if (array[i - 1].price > array[i].price) {
						done = false;
						const a = array[i - 1];
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
						const a = array[i - 1];
						array[i - 1] = array[i];
						array[i] = a;
					}
				}
			}
		}

		setToggle(!prevState);
	};

	return (
		<div className='App'>
			<Header goToAbout={() => onScroll(aboutUsRef)}
				goToSpecial={() => onScroll(specialRef)}
				onOrder={() => setOrderModal(true)} />
			<Hero onMenu={() => setMenuModal(true)} onOrder={() => setOrderModal(true)} />
			<Popular onAddProd='onOrder'/>
			<AboutUs refTo={aboutUsRef} onOrder={() => setMenuModal(true)}/>
			<SpecialFU specialRef={specialRef} onAddProd='onOrder' />
			<Team/>
			<Footer />
			<Menu modal={menuModal}
				onExit={() => setMenuModal(false)}
				onOrder={() => {
					setMenuModal(false);
					setOrderModal(true);
				}} />
			<FormModal modal={orderModal}
				onExit={() => setOrderModal(false)}
				onMenu={() => {
					setOrderModal(false);
					setMenuModal(true);
				}}
				onSortWS={sortWtSort}
			/>
		</div>
	);
}

export default App;
