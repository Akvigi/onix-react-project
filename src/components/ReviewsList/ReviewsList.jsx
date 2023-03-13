import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {getReviewsData} from '../../redux/selectors';

import style from './ReviewsList.module.sass';

const ReviewsList = ({pagePag}) => {
	const data = useSelector(getReviewsData);
	return (
		<ul className={style.List}>
			{data.find(({page}) => pagePag === page).data.map(({name, desc, link}) =>
				<li className={style.Item} key={desc}>
					<img className={style.Img} src={link} alt={name} />
					<div className={style.RevDesc}>
						<h4>{name}</h4>
						<p>{desc}</p>
					</div>
				</li>)}
		</ul>
	);
};

ReviewsList.propTypes = {
	pagePag: PropTypes.number.isRequired,
};

export default ReviewsList;
