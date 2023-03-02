import React from 'react';

import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import FormModal from './components/FormModalOrder/FormModalOrder';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import Popular from './components/Popular/Popular';
import SpecialFU from './components/SpecialFU/SpecialFU';
import Team from './components/Reviews/Reviews';

function App() {
	const aboutUsRef = React.createRef(null);
	const specialRef = React.createRef(null);

	const onScroll = section => window.scrollTo({top: section.current.offsetTop, behavior: 'smooth'});

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
				goToSpecial={() => onScroll(specialRef)} />
			<Hero />
			<Popular />
			<AboutUs refTo={aboutUsRef} />
			<SpecialFU specialRef={specialRef} />
			<Team />
			<Footer />
			<Menu/>
			<FormModal
				onSortWS={sortWtSort}
			/>
		</div>
	);
}

export default App;
