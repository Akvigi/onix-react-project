import React, {useContext} from 'react';
import Notiflix from 'notiflix';
import style from './PopList.module.sass';

import Img from '../List/ImgList/ImgList';
import Rate from '../List/Rate/Rate';
import NamePrice from '../List/NamePrice/NamePrice';

import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

import {useDispatch, useSelector} from 'react-redux';
import {selectPopData} from '../../redux/selectors';
import {addCoffeToOrder} from '../../redux/slices/orderSlice';
import {Context, themeConst} from '../../App';
import {useTranslation} from 'react-i18next';
import classNames from 'classnames';

const PopList = () => {
	const dispatch = useDispatch();
	const data = useSelector(selectPopData);
	const {theme} = useContext(Context);
	const {t} = useTranslation();
	const classItem = classNames(
		style.Item,
		theme === themeConst.light ? '' : style.Dark,
	);

	const classRate = classNames(
		style.Rate,
		theme === themeConst.light ? style.RateLight : style.Dark,
	);
	const onAdd = (name, price) => {
		dispatch(addCoffeToOrder(name, price));
		Notiflix.Notify.success(`${t('onAdd')}: ${name}`);
	};

	return (
		<ul className={style.List}>
			{data.map(({name, price, rate, link}) => <li key={name}
				className={classItem}>
				<Img src={link} alt={name} />
				<NamePrice name={name} price={price} />
				<div className={style.Desc}>
					<div className={classRate}>
						<Rate rate={rate} />
					</div>
					<button className={style.BtnAdd}
						aria-label={`${t('menu.labSt')} ${name} ${t('menu.labEnd')}`}
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
