import React from 'react';
import style from './Popular.module.sass';

import Container from '../../../components/Container';
import SectionHeading from '../../../components/SectionHeading';
import PopList from '../../../components/PopList/PopList';

import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {selectPopData} from '../../../redux/slices/coffee/dataselectors';

const Popular = () => {
	const data = useSelector(selectPopData);
	const {t} = useTranslation();
	return (<section className={style.Popular}>
		<Container>
			<SectionHeading>{t('popularH')}</SectionHeading>
			<PopList data={data}/>
		</Container>
	</section>);
};

export default Popular;
