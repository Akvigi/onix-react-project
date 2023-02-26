import React from 'react';
import style from './NamePrice.module.sass';
import PropTypes from 'prop-types';

const NamePrice = ({name, price}) => (
	<div className={style.NamePriceCont}>
		<h3 className={style.HeadingName}>{name}</h3>
		<p className={style.Price}>{price}K</p>
	</div>
);

NamePrice.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default NamePrice;
