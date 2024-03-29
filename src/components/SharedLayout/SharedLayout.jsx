import React, {useContext} from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import {Context, themeConst} from '../../App';
import style from './SharedLayout.module.sass';

const SharedLayout = ({aboutUsRef, specialRef}) => {
	const {theme} = useContext(Context);
	const onScroll = section => window.scrollTo({top: section.current.offsetTop - 100, behavior: 'smooth'});

	return (
		<div className={theme === themeConst.dark ? style.Dark : ''}>
			<Header goToAbout={() => onScroll(aboutUsRef)}
				goToSpecial={() => onScroll(specialRef)}
			/>
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

SharedLayout.propTypes = {
	aboutUsRef: PropTypes.object,
	specialRef: PropTypes.object,
	changeTheme: PropTypes.func,
};

export default SharedLayout;
