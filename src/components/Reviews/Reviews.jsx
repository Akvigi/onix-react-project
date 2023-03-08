import React, {useState} from 'react';
import style from './Reviews.module.sass';

import {useSelector} from 'react-redux';
import {getReviewsData} from '../../redux/selectors';
import ReviewsList from './ReviewsList/ReviewsList';

const Reviews = () => {
	const [pagePag, setPagePag] = useState(1);
	const data = useSelector(getReviewsData);
	return (
		<section className={style.Section}>
			<div className={style.Container}>
				<div className={style.TextCont}>
					<h3 className={style.Heading}>What they say about us</h3>
					<p className={style.Text}>We always provide the best service and always maintain the quality of coffee</p>
				</div>
				<div className={style.ListBtnsCont}>
					<ReviewsList pagePag={pagePag}/>
					<div className={style.BtnCont}>
						{data.map(({page}) => <button type='button' onClick={() => setPagePag(page)}
							className={page === pagePag ? `${style.Btn} ${style.BtnActive}`
								: `${style.Btn}`} key={page}></button>)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
