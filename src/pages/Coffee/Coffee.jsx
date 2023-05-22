import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import FormModal from './FormModalOrder/FormModalOrder';
import Hero from './Hero/Hero';
import Menu from './Menu/Menu';
import Popular from './Popular/Popular';
import SpecialFU from './SpecialFU/SpecialFU';
import Table from '../../components/Table/Table';
import Reviews from './Reviews/Reviews';
import AboutUs from './AboutUs/AboutUs';

import {selectMenuModal, selectOrderModal, selectTable} from '../../redux/slices/common/modalSelectors';
import {toggleTableModal} from '../../redux/slices/common/modalsSlice';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import {setCoffeePageTrue} from '../../redux/slices/common/pageSlice';

const Coffee = ({aboutUsRef, specialRef}) => {
	const dispatch = useDispatch();
	const loc = useLocation();
	const modalTable = useSelector(selectTable);
	const orderModal = useSelector(selectOrderModal);
	const menuModal = useSelector(selectMenuModal);

	const toggleTable = e => {
		if (e.code === 'KeyT') {
			dispatch(toggleTableModal());
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', toggleTable);
		if (loc.pathname === '/onix-react-project') {
			dispatch(setCoffeePageTrue());
		}
	}, []);
	return (
		<>
			<Hero />
			<Popular />
			<AboutUs refTo={aboutUsRef} />
			<SpecialFU specialRef={specialRef} />
			<Reviews />
			{menuModal && <Menu />}
			{orderModal && <FormModal />}
			{modalTable && <Table />}
		</>
	);
};

Coffee.propTypes = {
	aboutUsRef: PropTypes.object,
	specialRef: PropTypes.object,
};

export default Coffee;
