import React, {useCallback, useEffect} from 'react';
import MenuList from './MenuList/MenuList';
import style from './Menu.module.sass';
import {useDispatch, useSelector} from 'react-redux';
import {getMenuModal} from '../../redux/selectors';
import {closeMenuModal, toggleMenuModal, toggleOrderModal} from '../../redux/slices/modalsSlice';

const Menu = () => {
	const modal = useSelector(getMenuModal);
	const dispatch = useDispatch();

	const openOrder = () => {
		dispatch(toggleMenuModal());
		dispatch(toggleOrderModal());
	};

	const esc = useCallback(
		e => {
			if (e.code === 'Escape') {
				dispatch(closeMenuModal());
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
				dispatch(toggleMenuModal());
			}
		},
		[],
	);
	return (
		<div onClick={onBackClick} className={modal ? `${style.Overlay} ${style.Active}` : style.Overlay}>
			<div className={style.Menu}>
				<h2>Menu</h2>
				<MenuList />
				<button className={style.toOrder} type='button' onClick={() => openOrder()}>To order</button>
			</div>
		</div>
	);
};

export default Menu;
