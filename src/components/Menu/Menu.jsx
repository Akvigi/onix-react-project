import React, {useCallback, useEffect} from 'react';
import MenuList from './MenuList/MenuList';
import dataF from '../../fudata';
import dataP from '../../popdata';
import style from './Menu.module.sass';
const Menu = ({onExit, onOrder, modal, addProd}) => {
	const esc = useCallback(
		e => {
			if (e.code === 'Escape') {
				onExit();
			}
		},
		[onExit],
	);

	useEffect(() => {
		window.addEventListener('keydown', esc);

		return () => {
			window.removeEventListener('keydown', esc);
		};
	}, [esc]);

	const onBackClick = useCallback(
		e => {
			if (e.currentTarget === e.target) {
				onExit();
			}
		},
		[onExit],
	);
	return (
		<div onClick={onBackClick} className={modal ? `${style.Overlay} ${style.Active}` : style.Overlay}>
			<div className={style.Menu}>
				<h2>Menu</h2>
				<MenuList dataFu={dataF} dataPop={dataP} onAdd={addProd} />
				<button className={style.toOrder} type='click' onClick={onOrder}>To order</button>
			</div>
		</div>
	);
};

export default Menu;
