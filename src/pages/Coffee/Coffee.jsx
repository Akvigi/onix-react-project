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

import {getMenuModal, getOrderModal, getTable} from '../../redux/selectors';
import {toggleTableModal} from '../../redux/slices/modalsSlice';
import PropTypes from 'prop-types';

const Coffee = ({aboutUsRef, specialRef}) => {
	const dispatch = useDispatch();

	const modalTable = useSelector(getTable);
	const orderModal = useSelector(getOrderModal);
	const menuModal = useSelector(getMenuModal);

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

	const toggleTable = e => {
		if (e.code === 'KeyT') {
			dispatch(toggleTableModal());
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', toggleTable);
	}, []);
	return (
		<>
			<Hero />
			<Popular />
			<AboutUs refTo={aboutUsRef} />
			<SpecialFU specialRef={specialRef} />
			<Reviews />
			{menuModal && <Menu />}
			{orderModal && <FormModal
				onSortWS={sortWtSort}
			/>}
			{modalTable && <Table />}
		</>
	);
};

Coffee.propTypes = {
	aboutUsRef: PropTypes.object,
	specialRef: PropTypes.object,
};

export default Coffee;
