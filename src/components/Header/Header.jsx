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

const Header = ({goToAbout, goToSpecial}) => {
	const dispatch = useDispatch();
	const coffeePage = useSelector(selectCoffePage);
	const order = useSelector(selectOrderCoffee);
	const {theme, changeTheme} = useContext(Context);
	return (
		<header className={style.Header}>
			<div className={style.container}>
				<h2 className={style.Logo}>Project Onix</h2>
				<nav className={style.Nav}>
					{coffeePage ? (<>
						<a className={style.Link} onClick={goToAbout} href='#aboutus'>About us</a>
						<a className={style.Link} onClick={goToSpecial} href='#specialforyou'>Special for you</a>
						<NavLink to='/pokemons' onClick={() => dispatch(toggleCoffeePage())} className={style.Link}>Pokemons</NavLink>
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
						{/* )}
						</Context.Consumer> */}
					</>) : <NavLink to='/onix-react-project' onClick={() => dispatch(toggleCoffeePage())} className={style.Link}>Coffee</NavLink>
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
