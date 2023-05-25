import React from 'react';
import PropTypes from 'prop-types';

import style from './MenuItem.module.sass';

import Rate from '../../List/Rate/Rate';
import {useTranslation} from 'react-i18next';
import {useGetPokemonQuery} from '../../../redux/slices/pokemons/pokemonsSlice';

const PokemonItem = ({name, addItem}) => {
	const {t} = useTranslation();
	const {data, isFetching} = useGetPokemonQuery(name);

	return (
		!isFetching && (<li className={style.Item}>
			<div className={style.Desc}>
				<img
					className={style.Img}
					src={data.sprites.front_default}
					alt={name} />

				<div className={style.ContainerInfo}>
					<h3>{name}</h3>
					<div className={style.Rate}>
						<Rate rate={data.stats[0].base_stat}/>
					</div>
				</div>
			</div>
			<div className={style.PriceBtnCont}>
				<p>{data.weight}K</p>
				<button className={style.Btn} aria-label={`${t('menu.labSt')} ${name} ${t('menu.labEnd')}`}
					onClick={() => addItem(name, data.weight)}
					type='click'>+</button>
			</div>
		</li>)
	);
};

PokemonItem.propTypes = {
	name: PropTypes.string.isRequired,
	addItem: PropTypes.func.isRequired,
};

export default PokemonItem;
