import React, {useContext} from 'react';
import style from './Footer.module.sass';
import {useTranslation} from 'react-i18next';
import {Context} from '../../App';
const Footer = () => {
	const {t} = useTranslation();
	const {theme} = useContext(Context);
	const thm = (theme === 'dark');
	return (<footer className={thm ? `${style.Footer} ${style.Dark}` : style.Footer}>
		<div className={style.Container}>
			<div className={style.Contacts}>
				<span>{t('footer.name')}</span>
				<span>{t('footer.des')}: <a className={thm ? `${style.Link} ${style.LinkDark}` : `${style.Link} ${style.LinkLight}`} href='https://www.figma.com/file/2ScjaVZyykqnDhi1RLtY3B/Cafe-Street---E-Commerce-Landing-Page-(Community)?node-id=6%3A21&t=VWcNxFU7dZw4TJs5-0'>{t('footer.link')}</a></span>
				<a className={thm ? `${style.Link} ${style.LinkDark}` : `${style.Link} ${style.LinkLight}`}href='https://github.com/Akvigi'>{t('footer.ghublink')}</a>
			</div>
		</div>
	</footer>);
};

export default Footer;
