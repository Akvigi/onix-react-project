import React from 'react';
import {useDispatch} from 'react-redux';
import {replaceWithSorted} from '../../../redux/orderSlice';

import style from './SortBtn.module.sass';
const SortBtn = ({children, toggle, setToggle, by}) => {
	const dispatch = useDispatch();

	const sortOrder = (prevState, by, setToggle) => {
		if (by === 'price') {
			if (prevState === false) {
				const array = JSON.parse(localStorage.getItem('order')).sort((a, b) => a.price - b.price);
				dispatch(replaceWithSorted(array));
			} else if (prevState === true) {
				const array = JSON.parse(localStorage.getItem('order')).sort((a, b) => b.price - a.price);
				dispatch(replaceWithSorted(array));
			}

			setToggle(!prevState);
		}

		if (by === 'name') {
			if (prevState === false) {
				const array = JSON.parse(localStorage.getItem('order')).sort((a, b) => a.name.localeCompare(b.name));
				dispatch(replaceWithSorted(array));
			} else if (prevState === true) {
				const array = JSON.parse(localStorage.getItem('order')).sort((a, b) => b.name.localeCompare(a.name));
				dispatch(replaceWithSorted(array));
			}

			setToggle(!prevState);
		}
	};

	return (<button type='button' className={style.SortBtn}
		onClick={() => sortOrder(toggle, by, setToggle)}>
		{children}
	</button>);
};

export default SortBtn;
