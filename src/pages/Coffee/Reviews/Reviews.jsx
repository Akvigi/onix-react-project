import React, {useState} from 'react';
import style from './Reviews.module.sass';

import {useSelector} from 'react-redux';
import {selectReviewsData} from '../../../redux/selectors';
import ReviewsList from '../../../components/ReviewsList/ReviewsList';
import {useTranslation} from 'react-i18next';

const Reviews = () => {
	const [pagePag, setPagePag] = useState(1);
	const {t} = useTranslation();
	const data = useSelector(selectReviewsData);

	return (
		<section className={style.Section}>
			<div className={style.Container}>
				<div className={style.TextCont}>
					<h3 className={style.Heading}>{t('reviewsMain')}</h3>
					<p className={style.Text}>{t('reviewsSec')}</p>
				</div>
				<div className={style.ListBtnsCont}>
					<ReviewsList pagePag={pagePag}/>
					<div className={style.BtnCont}>
						{data.map(({page}) => <button
							aria-label={`${t('reviewsLabStart')} ${page} ${t('reviewsLabEnd')}`}
							type='button'
							onClick={() => setPagePag(page)}
							className={page === pagePag ? `${style.Btn} ${style.BtnActive}`
								: `${style.Btn}`} key={page}></button>)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
