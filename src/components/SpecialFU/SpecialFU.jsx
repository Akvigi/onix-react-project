import React from 'react';

import Container from '../Container/Container';
import SectionHeading from '../SectionHeading/SectionHeading';
import SpList from './SpList/SpList';
import style from './SpecialFU.module.sass';
import PropTypes from 'prop-types';

const SpecialFU = ({specialRef}) => (
	<section className={style.Foryou} ref={specialRef}>
		<Container>
			<SectionHeading>Special menu for You</SectionHeading>
			<SpList/>
		</Container>
	</section>
);

SpecialFU.propTypes = {
	specialRef: PropTypes.object,
};

export default SpecialFU;
