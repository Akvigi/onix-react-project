import React from 'react';
import Media from 'react-media';
import {useDispatch} from 'react-redux';

import {toggleMenuModal, toggleOrderModal} from '../../../redux/slices/modalsSlice';

import coffee from '../../../images/img-hero.png';
import ContainerHero from '../../../components/Hero/ContainerHero';
import HeroSection from '../../../components/Hero/HeroSection';
import HeroDesc from '../../../components/Hero/HeroDesc';
import HeroHeader from '../../../components/Hero/HeroHeader';
import HeroText from '../../../components/Hero/HeroText';
import HeroOrderBtn from '../../../components/Hero/HeroOrderBtn';
import HeroMenuBtn from '../../../components/Hero/HeroMenuBtn';
import HeroBtnCont from '../../../components/Hero/HeroBtnCont';
import HeroImg from '../../../components/Hero/HeroImg';
import {useTranslation} from 'react-i18next';
const Hero = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	return (
		<HeroSection>
			<ContainerHero>
				<HeroDesc>
					<HeroHeader>{t('hero.mainC')}</HeroHeader>
					<Media queries={{small: '(max-width: 767px)'}}>
						{matches =>
							matches.small && (
								<HeroImg src={coffee} alt={t('hero.altHero')}/>
							)
						}
					</Media>
					<HeroText>{t('hero.secC')}</HeroText>
					<HeroBtnCont>
						<HeroOrderBtn onClick={() => dispatch(toggleOrderModal())}>{t('hero.orderbtn')}</HeroOrderBtn>
						<HeroMenuBtn onClick={() => dispatch(toggleMenuModal())} >{t('hero.menubtn')}</HeroMenuBtn>
					</HeroBtnCont>
				</HeroDesc>
				<Media queries={{small: '(max-width: 767px)'}}>
					{matches =>
						!matches.small && (
							<HeroImg src={coffee} alt={t('hero.altHero')}/>
						)
					}
				</Media>
			</ContainerHero>
		</HeroSection>);
};

export default Hero;
