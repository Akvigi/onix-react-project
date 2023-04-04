import React from 'react';
import PropTypes from 'prop-types';

import style from './MenuItem.module.sass';

import Rate from '../../List/Rate/Rate';

const MenuItem = ({name, rate, link, desc, price, addItem}) => (
	<li className={style.Item}>
		<div className={style.Desc}>
			<img
				className={style.Img}
				src={link}
				alt={name} />

			<div className={style.ContainerInfo}>
				<h3>{name}</h3>
				{desc && <p>{desc}</p>}
				<div className={style.Rate}>
					<Rate rate={rate}/>
				</div>
			</div>
		</div>
		<div className={style.PriceBtnCont}>
			<p>{price}K</p>
			<button className={style.Btn}
				onClick={addItem}
				type='click'>+</button>
		</div>
	</li>
);

MenuItem.propTypes = {
	name: PropTypes.string.isRequired,
	rate: PropTypes.number,
	link: PropTypes.string.isRequired,
	desc: PropTypes.string,
	price: PropTypes.number.isRequired,
	addItem: PropTypes.func.isRequired,
};

export default MenuItem;
