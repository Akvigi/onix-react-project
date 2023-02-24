import React from 'react';
import style from './NamePrice.module.sass';

const NamePrice = ({name, price}) => (
	<div className={style.NamePriceCont}>
		<h3 className={style.HeadingName}>{name}</h3>
		<p className={style.Price}>{price}K</p>
	</div>
);

export default NamePrice;
