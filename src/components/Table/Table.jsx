import React, {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {useDispatch} from 'react-redux';
import {toggleTableModal} from '../../redux/slices/modalsSlice';

import data from '../../biographydata';
import Overlay from '../Overlay/Overlay';
import style from './Table.module.sass';

const portal = document.querySelector('#portal');

const Table = () => {
	const [modalSt, setModalSt] = useState(true);
	const dispatch = useDispatch();
	const [activeB, setActiveB] = useState(false);

	const changeBorder = e => {
		if (e.code === 'KeyA') {
			setActiveB(!activeB);
		}
	};

	useEffect(() => {
		const esc = e => {
			if (e.code === 'Escape') {
				setModalSt(false);
				setTimeout(() => dispatch(toggleTableModal()), 1000);
			}
		};

		window.addEventListener('keydown', esc);
		window.addEventListener('keydown', changeBorder);

		return () => {
			window.removeEventListener('keydown', esc);
			window.removeEventListener('keydown', changeBorder);
		};
	}, [activeB]);

	return createPortal(
		<Overlay stateModal={modalSt}>
			<table className={activeB ? `${style.Table} ${style.Active}` : style.Table}>
				<thead>
					<tr>
						<th className={style.Item}>Name</th>
						<th className={style.Item}>Age</th>
						<th className={style.Item}>Good</th>
						<th className={style.Item}>Charismatic</th>
					</tr>
				</thead>
				<tbody>
					{data.map(({name, age, qualities}) => (
						<tr key={name} >
							<td className={style.Item}>{name}</td>
							<td className={style.Item}>{age}</td>
							<td className={style.Item}>{qualities.good ? 'good' : 'bad'}</td>
							<td className={style.Item}>{qualities.charism ? 'yes' : 'no'}</td>
						</tr>))}
				</tbody>
			</table >
		</Overlay>, portal);
};

export default Table;
