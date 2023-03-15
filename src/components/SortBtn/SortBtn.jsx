import React from 'react';
import {useDispatch} from 'react-redux';

import PropTypes from 'prop-types';
import style from './SortBtn.module.sass';

import {changeFilter} from '../../redux/slices/coffee/filterSlice';
import {filterStatus} from '../../redux/constants';

const SortBtn = ({children, toggle, setToggle, by}) => {
	const dispatch = useDispatch();
	const sortOrder = (prevState, by, setToggle) => {
		if (by === 'price') {
			if (prevState === false) {
				dispatch(changeFilter(filterStatus.price.f1t9));
			} else if (prevState === true) {
				dispatch(changeFilter(filterStatus.price.f9t1));
			}

			setToggle(!prevState);
		}

		if (by === 'name') {
			if (prevState === false) {
				dispatch(changeFilter(filterStatus.name.fAtZ));
			} else if (prevState === true) {
				dispatch(changeFilter(filterStatus.name.fZtA));
			}

			setToggle(!prevState);
		}
	};

	return (<button type='button' className={style.SortBtn}
		onClick={() => sortOrder(toggle, by, setToggle)}>
		{children}
	</button>);
};

SortBtn.propTypes = {
	children: PropTypes.string,
	toggle: PropTypes.bool,
	setToggle: PropTypes.func,
	by: PropTypes.string,
};

export default SortBtn;
