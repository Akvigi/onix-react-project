import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import PropTypes from 'prop-types';

const SharedLayout = ({aboutUsRef, specialRef}) => {
	const onScroll = section => window.scrollTo({top: section.current.offsetTop, behavior: 'smooth'});
	return (
		<div>
			<Header goToAbout={() => onScroll(aboutUsRef)}
				goToSpecial={() => onScroll(specialRef)} />
			<Outlet />
			<Footer />
		</div>
	);
};

SharedLayout.propTypes = {
	aboutUsRef: PropTypes.object,
	specialRef: PropTypes.object,
};

export default SharedLayout;
