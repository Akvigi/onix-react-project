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
	placeholder: PropTypes.string,
	onSet: PropTypes.func,
};

export default InputDataOrder;
