import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {createPortal} from 'react-dom';

import style from './Menu.module.sass';

import {toggleMenuModal, toggleOrderModal} from '../../../redux/slices/modalsSlice';
import Overlay from '../../../components/Overlay/Overlay';
import MenuList from '../../../components/Menu/MenuList/MenuList';

const portal = document.querySelector('#portal');

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
	return createPortal(
		<Overlay onClick={onBackClick} stateModal={modalStyling}>
			<div className={style.Menu}>
				<h2>Menu</h2>
				<MenuList />
				<button className={style.toOrder} type='button' onClick={() => openOrder()}>To order</button>
			</div>
		</Overlay>,
		portal,
	);
};

export default Menu;
