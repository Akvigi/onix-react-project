import React from 'react';
import PropTypes from 'prop-types';

import style from './FormLItem.module.sass';

const FormLItem = ({name, price, onAdd, onDS, onDE, onDrop, index}) => (
	<li
		className={style.OrderItem}
		draggable
		onDragStart={e => onDS(e, index)}
		onDragOver={onDE}
		onDrop={e => onDrop(e, index)}
	>
		<p>{name}</p>
		<div className={style.PriceDelbtnCont}>
			<p>{price}K</p>
			<button type='button'
				onClick={() => onAdd()}
				className={style.DelBtn}>-</button>
		</div>
	</li>
);

FormLItem.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	onAdd: PropTypes.func.isRequired,
	onDS: PropTypes.func,
	onDE: PropTypes.func,
	onDrop: PropTypes.func,
	index: PropTypes.number,
};

export default FormLItem;
