import React, {useEffect} from 'react';
import Notiflix from 'notiflix';
import {useTranslation} from 'react-i18next';
import style from './MenuList.module.sass';

import {useDispatch, useSelector} from 'react-redux';

import {addCoffeToOrder, addPokemonToOrder} from '../../../redux/slices/common/orderSlice';
import {selectPokemonLoading, selectPokemonMenu, selectPokemonPagPage} from '../../../redux/slices/pokemons/selectors';
import {selectAllData} from '../../../redux/slices/coffee/dataselectors';
import {selectCoffePage} from '../../../redux/slices/common/pageselectors';

import MenuItem from '../MenuItem/MenuItem';
import {getPokemonsForMenu} from '../../../redux/slices/pokemons/requests';
import {setMenuToStart, setPagPage} from '../../../redux/slices/pokemons/pokemonsSlice';

import LoadingT from '../LoadingText';

const MenuList = () => {
	const data = useSelector(selectAllData);
	const coffeePage = useSelector(selectCoffePage);
	const dataPok = useSelector(selectPokemonMenu);
	const page = useSelector(selectPokemonPagPage);
	const loading = useSelector(selectPokemonLoading);
	const {t} = useTranslation();

	const dispatch = useDispatch();

	const onAdd = (name, price) => {
		if (coffeePage) {
			dispatch(addCoffeToOrder(name, price));
		} else {
			dispatch(addPokemonToOrder(name, price));
		}

		Notiflix.Notify.success(`${t('onAdd')}: ${name}`);
	};

	const onPag = () => {
		dispatch(setPagPage(page + 1));
	};

	useEffect(() => {
		dispatch(setMenuToStart());
		if (!coffeePage) {
			dispatch(getPokemonsForMenu(page));
		}
	}, []);

	useEffect(() => {
		if (!coffeePage) {
			dispatch(getPokemonsForMenu(page));
		}
	}, [page]);

	return (
		<ul className={style.List}>
			{coffeePage && data.map(({name, desc, price, link, rate}) => (
				<MenuItem key={name}
					link={link}
					alt={name}
					name={name}
					desc={desc}
					price={price}
					rate={rate}
					addItem={() => onAdd(name, price)}
				/>),
			)}
			{loading && dataPok.length === 0 && <LoadingT>{t('menu.menuloading')}</LoadingT>}
			{!coffeePage && dataPok.map(({name, sprites, weight, stats}) => (
				<MenuItem
					key={name}
					link={sprites.front_default}
					alt={name}
					name={name}
					price={weight}
					rate={stats[0].base_stat}
					addItem={() => onAdd(name, weight)}
				/>),
			)}
			{!coffeePage && <button
				className={style.PagBtn}
				type='button'
				onClick={onPag}>
				{loading ? t('menu.menuloading') : t('menu.load')}
			</button>}
		</ul>
	);
};

export default MenuList;
