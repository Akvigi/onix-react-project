import React, {useContext} from 'react';
import style from './Header.module.sass';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import {useDispatch, useSelector} from 'react-redux';
import {toggleOrderModal} from '../../redux/slices/modalsSlice';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {selectCoffePage, selectOrderCoffee} from '../../redux/selectors';
import {toggleCoffeePage} from '../../redux/slices/pageSlice';
import {Context, themeConst} from '../../App';
import {useTranslation} from 'react-i18next';

const Header = ({goToAbout, goToSpecial}) => {
	const dispatch = useDispatch();
	const coffeePage = useSelector(selectCoffePage);
	const order = useSelector(selectOrderCoffee);
	const {theme, changeTheme} = useContext(Context);
	const {t, i18n} = useTranslation();
	return (
		<header className={style.Header}>
			<div className={style.container}>
				<h2 className={style.Logo}>Project Onix</h2>
				<nav className={style.Nav}>
					{coffeePage ? (<>
						<a className={style.Link} onClick={goToAbout} href='#aboutus'>{t('header.b1')}</a>
						<a className={style.Link} onClick={goToSpecial} href='#specialforyou'>{t('header.b2')}</a>
						<NavLink to='/pokemons' onClick={() => dispatch(toggleCoffeePage())} className={style.Link}>{t('header.b3')}</NavLink>
						<button className={style.Btn} onClick={() => dispatch(toggleOrderModal())} type='button'>
							<ShoppingCartTwoToneIcon
								sx={{
									color: '#2F2105',
									width: '32px',
									height: '32px',
								}} />
							{order && <span className={style.BtnIndicator}>{order.length}</span>}
						</button>
						<button type='button' className={style.Btn} onClick={() => changeTheme()}>
							{theme === themeConst.dark
								? <WbSunnyIcon
									sx={{
										color: '#fead0a',
										width: '32px',
										height: '32px',
									}}
								/>
								: <DarkModeIcon
									sx={{
										color: '#3dcfe6',
										width: '32px',
										height: '32px',
									}}
								/>}
						</button>

					</>) : <NavLink to='/onix-react-project' onClick={() => dispatch(toggleCoffeePage())} className={style.Link}>{t('header.b4')}</NavLink>
					}
					{i18n.language === 'en'
						? <button type='button' className={`${style.Lang} ${style.Ua}`} onClick={() => i18n.changeLanguage('ua')}>
							<span className={style.U}>U</span><span className={style.A}>A</span>
						</button>
						: <button type='button' className={style.Lang} onClick={() => i18n.changeLanguage('en')}>
								EN
						</button>
					}
				</nav>
			</div>
		</header>
	);
};

Header.propTypes = {
	goToAbout: PropTypes.func.isRequired,
	goToSpecial: PropTypes.func.isRequired,
};

export default Header;
