import React from 'react';
import style from './MenuList.module.sass';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToOrder} from '../../../redux/slices/orderSlice';
import {getAllData} from '../../../redux/selectors';
import MenuItem from './MenuItem/MenuItem';
import Notiflix from 'notiflix';

const MenuList = () => {
	const data = useSelector(getAllData);

	const dispatch = useDispatch();
	const onAdd = (name, price) => {
		dispatch(addItemToOrder(name, price));
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
