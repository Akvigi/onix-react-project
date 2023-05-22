import React, {useContext, useState} from 'react';
import style from './Reviews.module.sass';

import {useSelector} from 'react-redux';
import ReviewsList from '../../../components/ReviewsList/ReviewsList';
import {useTranslation} from 'react-i18next';
import cn from 'classnames';
import {Context, themeConst} from '../../../App';
import {selectReviewsData} from '../../../redux/slices/coffee/dataselectors';

const Reviews = () => {
	const [pagePag, setPagePag] = useState(1);
	const {t} = useTranslation();
	const data = useSelector(selectReviewsData);
	const {theme} = useContext(Context);
	return (
		<section className={cn(style.Section, {[style.Dark]: theme === themeConst.dark})}>
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
