import React from 'react';
import style from './Footer.module.sass';
import {useTranslation} from 'react-i18next';
const Footer = () => {
	const {t} = useTranslation();
	return (<footer className={style.Footer}>
		<div className={style.Container}>
			<div className={style.Contacts}>
				<span>{t('footer.name')}</span>
				<span>{t('footer.des')}: <a href='https://www.figma.com/file/2ScjaVZyykqnDhi1RLtY3B/Cafe-Street---E-Commerce-Landing-Page-(Community)?node-id=6%3A21&t=VWcNxFU7dZw4TJs5-0'>{t('footer.link')}</a></span>
				<a href='https://github.com/Akvigi'>{t('footer.ghublink')}</a>
			</div>
		</div>
	</footer>);
};

export default Footer;
