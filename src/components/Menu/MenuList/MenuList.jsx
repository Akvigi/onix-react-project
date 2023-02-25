import React from 'react';
import style from './MenuList.module.sass';
import Rate from '../../List/Rate/Rate';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToOrder} from '../../../redux/orderSlice';
import {getDataFU, getPopData} from '../../../redux/selectors';

const MenuList = () => {
	const dataFU = useSelector(getDataFU);
	const dataPop = useSelector(getPopData);

	const dispatch = useDispatch();
	return (
		<ul className={style.List}>
			{dataFU.map(({name, desc, price, link, rate}) => (
				<li className={style.Item} key={name}>
					<div className={style.Desc}>
						<img className={style.Img} src={link} alt={name} />

						<div className={style.ContainerInfo}>
							<h3>{name}</h3>
							<p>{desc}</p>
							<div className={style.Rate}>
								<Rate rate={rate}/>
							</div>
						</div>
					</div>
					<div className={style.PriceBtnCont}>
						<p>{price}K</p>
						<button className={style.Btn} onClick={() => dispatch(addItemToOrder(name, price))} type='click'>+</button>
					</div>
				</li>),
			)}
			{dataPop.map(({name, price, link, rate}) => (
				<li className={style.Item} key={`${name}${price}`}>
					<div className={style.Desc}>
						<img className={style.Img} src={link} alt={name} />

						<div className={style.ContainerInfo}>
							<h3>{name}</h3>
							<p></p>
							<div className={style.Rate}>
								<Rate rate={rate}/>
							</div>
						</div>
					</div>
					<div className={style.PriceBtnCont}>
						<p>{price}K</p>
						<button className={style.Btn}
							onClick={() => dispatch(addItemToOrder(name, price))}
							type='click'>+</button>
					</div>
				</li>),
			)}
		</ul>
	);
};

export default MenuList;
