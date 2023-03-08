import React from 'react';
import PropTypes from 'prop-types';

import style from './InputDataOrder.module.sass';

const InputDataOrder = ({onSet, placeholder}) => (
	<input className={style.Input}
		onChange={e => onSet(e.currentTarget.value)}
		type='text'
		placeholder={placeholder}
	/>
);

InputDataOrder.propTypes = {
	placeholder: PropTypes.string.isRequired,
	onSet: PropTypes.func.isRequired,
};

export default InputDataOrder;
