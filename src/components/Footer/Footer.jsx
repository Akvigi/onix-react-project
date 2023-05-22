import React, {useContext} from 'react';
import style from './Footer.module.sass';
import {useTranslation} from 'react-i18next';
import {Context, themeConst} from '../../App';
import classNames from 'classnames';

const Footer = () => {
	const {t} = useTranslation();
	const {theme} = useContext(Context);

	const classA = classNames(
		style.Link,
		theme === themeConst.dark ? style.LinkDark : style.LinkLight,
	);
	return (<footer className={classNames(style.Footer, {[style.Dark]: theme === themeConst.dark})}>
		<div className={style.Container}>
			<div className={style.Contacts}>
				<span>{t('footer.name')}</span>
				<span>{t('footer.des')}: <a className={classA} href='https://www.figma.com/file/2ScjaVZyykqnDhi1RLtY3B/Cafe-Street---E-Commerce-Landing-Page-(Community)?node-id=6%3A21&t=VWcNxFU7dZw4TJs5-0'>{t('footer.link')}</a></span>
				<a className={classA}href='https://github.com/Akvigi'>{t('footer.ghublink')}</a>
			</div>
		</div>
	</footer>);
};

export default Footer;
