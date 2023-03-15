import React from 'react';
import Notiflix from 'notiflix';

import style from './MenuList.module.sass';

import {useDispatch, useSelector} from 'react-redux';

import {addCoffeToOrder} from '../../../redux/slices/coffee/orderSlice';
import {selectAllData} from '../../../redux/selectors';

import MenuItem from '../MenuItem/MenuItem';

const MenuList = () => {
	const data = useSelector(selectAllData);

	const dispatch = useDispatch();
	const onAdd = (name, price) => {
		dispatch(addCoffeToOrder(name, price));
		Notiflix.Notify.success(`Successfull added to cart: ${name}`);
	};

	return (
		<ul className={style.List}>
			{data.map(({name, desc, price, link, rate}) => (
				<MenuItem key={name} link={link} alt={name}
					name={name} desc={desc} price={price} rate={rate}
					addItem={() => onAdd(name, price)}
				/>),
			)}
		</ul>
	);
};

export default MenuList;
