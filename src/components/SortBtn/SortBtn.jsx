import React from 'react';
import {useDispatch} from 'react-redux';

import PropTypes from 'prop-types';
import style from './SortBtn.module.sass';

import {changeFilter} from '../../redux/slices/common/orderSlice';
import {filterStatus, nameConst, priceConst} from '../../constants';

const SortBtn = ({children, toggle, setToggle, by, onSort}) => {
	const dispatch = useDispatch();
	const sortOrder = (prevState, by, setToggle) => {
		if (by === priceConst) {
			if (prevState === false) {
				dispatch(changeFilter(filterStatus.price.f1t9));
			} else if (prevState === true) {
				dispatch(changeFilter(filterStatus.price.f9t1));
			}

			setToggle(!prevState);
		}

		if (by === nameConst) {
			if (prevState === false) {
				dispatch(changeFilter(filterStatus.name.fAtZ));
			} else if (prevState === true) {
				dispatch(changeFilter(filterStatus.name.fZtA));
			}

			setToggle(!prevState);
		}
	};

	return (<button type='button' className={style.SortBtn}
		onClick={onSort ? () => onSort(toggle, setToggle) : () => sortOrder(toggle, by, setToggle)}>
		{children}
	</button>);
};

SortBtn.propTypes = {
	children: PropTypes.string,
	toggle: PropTypes.bool,
	setToggle: PropTypes.func,
	onSort: PropTypes.func,
	by: PropTypes.oneOf(['price', 'name']),
};

export default SortBtn;
