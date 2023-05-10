import React from 'react';
import Media from 'react-media';
import {useDispatch} from 'react-redux';
import imgus from '../../../images/aboutus.jpg';
import style from './AboutUs.module.sass';
import PropTypes from 'prop-types';
import {toggleMenuModal} from '../../../redux/slices/modalsSlice';
import {useTranslation} from 'react-i18next';

const AboutUs = ({refTo}) => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	return (
		<section className={style.Aboutus} ref={refTo}>
			<div className={style.Cont}>
				<Media queries={{small: '(max-width: 767px)'}}>
					{matches =>
						!matches.small && (
							<img className={style.Pic} src={imgus} alt='coffee'/>
						)
					}
				</Media>
				<div className={style.Info} >
					<h2 className={style.Heading} >{t('aboutUs.head')}</h2>
					<p className={style.Maintxt}>{t('aboutUs.main')}</p>
					<p className={style.Desc}>{t('aboutUs.sec')}</p>
					<button
						onClick={() => dispatch(toggleMenuModal())}
						className={style.Btn}
						type='button'
					>{t('aboutUs.btn')}</button>
				</div>
			</div>
		</section>
	);
};

AboutUs.propTypes = {
	refTo: PropTypes.object,
};

export default AboutUs;
