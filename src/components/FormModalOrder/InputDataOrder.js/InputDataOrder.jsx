import React from 'react';
import style from './InputDataOrder.module.sass';

const InputDataOrder = ({onSet, placeholder}) => (
	<input className={style.Input}
		onChange={e => onSet(e.currentTarget.value)}
		type='text'
		placeholder={placeholder}
	/>
);

export default InputDataOrder;
