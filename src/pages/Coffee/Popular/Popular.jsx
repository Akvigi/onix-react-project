import React from 'react';
import style from './Popular.module.sass';

import Container from '../../../components/Container';
import SectionHeading from '../../../components/SectionHeading';
import PopList from '../../../components/PopList/PopList';

import {useSelector} from 'react-redux';
import {getPopData} from '../../../redux/selectors';

const Popular = () => {
	const data = useSelector(getPopData);
	return (<section className={style.Popular}>
		<Container>
			<SectionHeading>Popular Now</SectionHeading>
			<PopList data={data}/>
		</Container>
	</section>);
};

export default Popular;
