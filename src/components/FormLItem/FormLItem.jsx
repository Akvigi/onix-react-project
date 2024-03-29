import React from 'react';
import PropTypes from 'prop-types';

import style from './FormLItem.module.sass';
import {useTranslation} from 'react-i18next';

const FormLItem = ({item, onAdd, onDS, onDE, onDrop}) => {
	const {t} = useTranslation();

	return (
		<li
			className={style.OrderItem}
			draggable
			onDragStart={() => onDS(item)}
			onDragOver={onDE}
			onDrop={e => onDrop(e, item)}
		>
			<p>{item.name}</p>
			<div className={style.PriceDelbtnCont}>
				<p>{item.price}K</p>
				<button type='button'
					aria-label={`${t('form.labSt')} ${item.name} ${t('form.labEnd')}`}
					onClick={onAdd}
					className={style.DelBtn}>-</button>
			</div>
		</li>
	);
};

FormLItem.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	}).isRequired,
	onAdd: PropTypes.func.isRequired,
	onDS: PropTypes.func,
	onDE: PropTypes.func,
	onDrop: PropTypes.func,
	index: PropTypes.number,
};

export default FormLItem;
