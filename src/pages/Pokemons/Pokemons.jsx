import React from 'react';
import {useSelector} from 'react-redux';
import {selectMenuModal} from '../../redux/selectors';
import Hero from './Hero/Hero';
import Menu from './Menu/Menu';

const Pokemons = () => {
	const menuModal = useSelector(selectMenuModal);
	return (
		<div>
			<Hero />
			{menuModal && <Menu />}
		</div>
	);
};

export default Pokemons;
