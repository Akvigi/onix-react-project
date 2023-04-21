import React, {useContext} from 'react';

import Container from '../../../components/Container';
import SectionHeading from '../../../components/SectionHeading';
import SpList from '../../../components/SpList/SpList';
import style from './SpecialFU.module.sass';
import PropTypes from 'prop-types';
import {Context, themeConst} from '../../../App';

const SpecialFU = ({specialRef}) => {
	const {theme} = useContext(Context);
	return (
		<section className={theme === themeConst.light ? `${style.Foryou}` : `${style.Foryou} ${style.Dark}`} ref={specialRef}>
			<Container>
				<SectionHeading>Special menu for You</SectionHeading>
				<SpList/>
			</Container>
		</section>
	);
};

SpecialFU.propTypes = {
	specialRef: PropTypes.object,
};

export default SpecialFU;
