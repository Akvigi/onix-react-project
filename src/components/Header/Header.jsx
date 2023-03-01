import React from 'react';
import style from './Header.module.sass';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {useDispatch} from 'react-redux';
import {toggleOrderModal} from '../../redux/slices/modalsSlice';
import PropTypes from 'prop-types';

const Header = ({goToAbout, goToSpecial}) => {
	const dispatch = useDispatch();
	return (
		<header className={style.Header}>
			<div className={style.container}>
				<h2 className={style.Logo}>Project Onix</h2>
				<nav className={style.Nav}>
					<a className={style.Link} onClick={goToAbout} href='#aboutus'>About us</a>
					<a className={style.Link} onClick={goToSpecial} href='#specialforyou'>Special for you</a>
					<button className={style.Btn} onClick={() => dispatch(toggleOrderModal())} type='button'><ShoppingCartTwoToneIcon
						sx={{
							color: '#2F2105',
							width: '32px',
							height: '32px',
						}}/></button>
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
