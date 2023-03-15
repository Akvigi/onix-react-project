import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import style from './MenuWrapper.module.sass';

import {toggleMenuModal, toggleOrderModal} from '../../../redux/slices/modalsSlice';
import Overlay from '../../../components/Overlay/Overlay';

const MenuWrapper = ({children, menuListFor}) => {
	const dispatch = useDispatch();
	const [modalStyling, setModalStyling] = useState(true);

	const onCloseModal = () => {
		setModalStyling(false);
		setTimeout(() => dispatch(toggleMenuModal()), 1000);
	};

	const openOrder = () => {
		onCloseModal();
		dispatch(toggleOrderModal());
	};

	const esc = useCallback(
		e => {
			if (e.code === 'Escape') {
				onCloseModal();
			}
		},
		[],
	);

	useEffect(() => {
		window.addEventListener('keydown', esc);

		return () => {
			window.removeEventListener('keydown', esc);
		};
	}, [esc]);

	const onBackClick = useCallback(
		e => {
			if (e.currentTarget === e.target) {
				onCloseModal();
			}
		},
		[],
	);
	return (
		<Overlay onBackCl={e => onBackClick(e)} stateModal={modalStyling}>
			<div className={style.Menu}>
				{menuListFor === 'pokemon' ? <h2>Catalog</h2> : <h2>Menu</h2>}
				{/* <MenuList /> */}
				{children}
				<button className={style.toOrder} type='button' onClick={() => openOrder()}>To order</button>
			</div>
		</Overlay>
	);
};

MenuWrapper.propTypes = {
	children: PropTypes.element.isRequired,
	menuListFor: PropTypes.string,
};

export default MenuWrapper;
