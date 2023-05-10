import React, {useContext} from 'react';

import Container from '../../../components/Container';
import SectionHeading from '../../../components/SectionHeading';
import SpList from '../../../components/SpList/SpList';
import style from './SpecialFU.module.sass';
import PropTypes from 'prop-types';
import {Context, themeConst} from '../../../App';
import {useTranslation} from 'react-i18next';
import classNames from 'classnames';

const SpecialFU = ({specialRef}) => {
	const {t} = useTranslation();
	const {theme} = useContext(Context);
	const classSect = classNames(
		style.Foryou,
		theme === themeConst.light ? '' : style.Dark,
	);
	return (
		<section className={classSect} ref={specialRef}>
			<Container>
				<SectionHeading>{t('specialH')}</SectionHeading>
				<SpList/>
			</Container>
		</section>
	);
};

SpecialFU.propTypes = {
	specialRef: PropTypes.object,
};

export default SpecialFU;
