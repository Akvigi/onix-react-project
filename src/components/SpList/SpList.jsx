import React, {useContext} from 'react';
import Img from '../List/ImgList/ImgList';
import NamePrice from '../List/NamePrice/NamePrice';
import Rate from '../List/Rate/Rate';
import style from './SpList.module.sass';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {useDispatch, useSelector} from 'react-redux';
import {addCoffeToOrder} from '../../redux/slices/orderSlice';
import Notiflix from 'notiflix';
import {selectDataFU} from '../../redux/selectors';
import {Context, themeConst} from '../../App';
import {useTranslation} from 'react-i18next';
import classNames from 'classnames';

const SpList = () => {
	const dispatch = useDispatch();
	const data = useSelector(selectDataFU);
	const {theme} = useContext(Context);
	const {t} = useTranslation();

	const classItem = classNames(
		style.Item,
		theme === themeConst.light ? '' : style.Dark,
	);
	const classRate = classNames(
		style.RateCont,
		theme === themeConst.light ? style.RateLight : style.Dark,
	);
	const onAdd = (name, price) => {
		dispatch(addCoffeToOrder(name, price));
		Notiflix.Notify.success(`${t('onAdd')}: ${name}`);
	};

	return (
		<ul className={style.List}>
			{data.map(({name, desc, price, rate, link}) => (
				<li className={classItem} key={name}>
					<Img src={link} alt={name}/>
					<NamePrice name={name} price={price}/>
					<div className={style.DescCont}>
						<p className={style.Desc}>{desc}</p>
						<div className={classRate}>
							<Rate rate={rate} />
						</div>
						<button
							className={style.BtnAdd}
							aria-label={`${t('menu.labSt')} ${name} ${t('menu.labEnd')}`}
							onClick={() => onAdd(name, price)}
							type='button'
							id={name}
						>
							<ShoppingCartTwoToneIcon
								sx={{
									color: 'white',
									width: '25px',
									height: '25px',
								}} />
						</button>
					</div>
				</li>
			))}
		</ul>
	);
};

export default SpList;
