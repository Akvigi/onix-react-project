import React from 'react';
import style from './MenuList.module.sass';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToOrder} from '../../../redux/orderSlice';
import {getDataFU, getPopData} from '../../../redux/selectors';
import MenuItem from './MenuItem/MenuItem';

const MenuList = () => {
	const dataFU = useSelector(getDataFU);
	const dataPop = useSelector(getPopData);

	const dispatch = useDispatch();
	return (
		<ul className={style.List}>
			{dataFU.map(({name, desc, price, link, rate}) => (
				<MenuItem key={name} link={link} alt={name}
					name={name} desc={desc} price={price} rate={rate}
					addItem={() => dispatch(addItemToOrder(name, price))}
				/>),
			)}
			{dataPop.map(({name, price, link, rate}) => (
				<MenuItem key={name} link={link} alt={name}
					name={name}price={price} rate={rate}
					addItem={() => dispatch(addItemToOrder(name, price))}
				/>),
			)}
		</ul>
	);
};

export default MenuList;
