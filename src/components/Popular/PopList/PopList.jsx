import React from 'react';
import style from './PopList.module.sass';
import Rate from '../../List/Rate/Rate';
import Img from '../../List/ImgList/ImgList';
import NamePrice from '../../List/NamePrice/NamePrice';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToOrder} from '../../../redux/slices/orderSlice';
import Notiflix from 'notiflix';
import {getPopData} from '../../../redux/selectors';

const PopList = () => {
	const dispatch = useDispatch();
	const data = useSelector(getPopData);
	const onAdd = (name, price) => {
		dispatch(addItemToOrder(name, price));
		Notiflix.Notify.success(`Successfull added to cart: ${name}`);
	};

	return (
		<ul className={style.List}>
			{data.map(({name, price, rate, link}) => <li key={name} className={style.Item}>
				<Img src={link} alt={name} />
				<NamePrice name={name} price={price} />
				<div className={style.Desc}>
					<div className={style.Rate}>
						<Rate rate={rate} />
					</div>
					<button className={style.BtnAdd}
						onClick={() => onAdd(name, price)}
						type='button' id={name}>
						<ShoppingCartTwoToneIcon
							sx={{
								color: 'white',
								width: '25px',
								height: '25px',
							}} />
					</button>
				</div>
			</li>)}
		</ul>
	);
};

export default PopList;
