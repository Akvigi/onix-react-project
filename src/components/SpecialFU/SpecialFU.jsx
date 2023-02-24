import React from 'react';

import Container from '../Container/Container';
import SectionHeading from '../SectionHeading/SectionHeading';
import SpList from './SpList/SpList';
import style from './SpecialFU.module.sass';

const SpecialFU = ({specialRef}) => (
	<section className={style.Foryou} ref={specialRef}>
		<Container>
			<SectionHeading>Special menu for You</SectionHeading>
			<SpList/>
		</Container>
	</section>
);

export default SpecialFU;
