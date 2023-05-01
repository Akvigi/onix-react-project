import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import style from './MenuWrapper.module.sass';

import {toggleMenuModal, toggleOrderModal} from '../../../redux/slices/modalsSlice';
import Overlay from '../../../components/Overlay/Overlay';
import {useTranslation} from 'react-i18next';

const MenuWrapper = ({children, menuListFor}) => {
	const dispatch = useDispatch();
	const [modalStyling, setModalStyling] = useState(true);
	const {t} = useTranslation();
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
				{menuListFor === 'pokemon' ? <h2>{t('menu.headP')}</h2> : <h2>{t('menu.headC')}</h2>}
				{children}
				<button className={style.toOrder} type='button' onClick={() => openOrder()}>{t('menu.toOrd')}</button>
			</div>
		</Overlay>
	);
};

MenuWrapper.propTypes = {
	children: PropTypes.element.isRequired,
	menuListFor: PropTypes.string,
};

export default MenuWrapper;
