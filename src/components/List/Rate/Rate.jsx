import React from 'react';
import star from '../../../images/akar-icons_star.png';
import style from './Rate.module.sass';

const Rate = ({rate}) => (
	<>
		<p>{rate}</p>
		<img className={style.Starpng} src={star} alt='star'/>
	</>
);

export default Rate;
