import React from 'react';

import Container from '../../../components/Container/Container';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import SpList from '../../../components/SpList/SpList';
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
