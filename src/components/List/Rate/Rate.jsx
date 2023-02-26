import React from 'react';
import star from '../../../images/akar-icons_star.png';
import style from './Rate.module.sass';
import PropTypes from 'prop-types';

const Rate = ({rate}) => (
	<>
		<p>{rate}</p>
		<img className={style.Starpng} src={star} alt='star'/>
	</>
);

Rate.propTypes = {
	rate: PropTypes.number.isRequired,
};

export default Rate;
