import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import style from './Menu.module.sass';

import MenuList from './MenuList/MenuList';

import {toggleMenuModal, toggleOrderModal} from '../../redux/slices/modalsSlice';

const Menu = () => {
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
		<div onClick={onBackClick} className={modalStyling ? `${style.Overlay} ${style.Active}` : `${style.Overlay} ${style.NotActive}`}>
			<div className={style.Menu}>
				<h2>Menu</h2>
				<MenuList />
				<button className={style.toOrder} type='button' onClick={() => openOrder()}>To order</button>
			</div>
		</div>
	);
};

export default Menu;
