import React from 'react';
import style from './Overlay.module.sass';
import PropTypes from 'prop-types';

const Overlay = ({children, stateModal, onBackCl}) => (
	<div onClick={onBackCl} className={stateModal ? `${style.Overlay} ${style.Active}`
		: `${style.Overlay} ${style.NotActive}`}>{children}</div>
);

Overlay.propTypes = {
	children: PropTypes.element,
	stateModal: PropTypes.bool.isRequired,
	onBackCl: PropTypes.func,
};

export default Overlay;
