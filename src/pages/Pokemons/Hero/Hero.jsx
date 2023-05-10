import React, {useEffect} from 'react';
import Media from 'react-media';
import {useDispatch, useSelector} from 'react-redux';

import ContainerHero from '../../../components/Hero/ContainerHero';
import HeroSection from '../../../components/Hero/HeroSection';
import HeroDesc from '../../../components/Hero/HeroDesc';
import HeroHeader from '../../../components/Hero/HeroHeader';
import HeroText from '../../../components/Hero/HeroText';
import HeroOrderBtn from '../../../components/Hero/HeroOrderBtn';
import HeroMenuBtn from '../../../components/Hero/HeroMenuBtn';
import HeroBtnCont from '../../../components/Hero/HeroBtnCont';
import HeroImg from '../../../components/Hero/HeroImg';

import {getHeroImg} from '../../../redux/requests';

import {selectHeroPokemon} from '../../../redux/selectors';
import {toggleMenuModal, toggleOrderModal} from '../../../redux/slices/modalsSlice';
import {useTranslation} from 'react-i18next';
const Hero = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	useEffect(() => {
		dispatch(getHeroImg());
	}, [dispatch]);

	const pokemon = useSelector(selectHeroPokemon);

	return (
		<HeroSection>
			<ContainerHero>
				<HeroDesc>
					<HeroHeader>{t('hero.mainP')}</HeroHeader>
					<Media queries={{small: '(max-width: 767px)'}}>
						{matches =>
							matches.small && (
								<HeroImg src={pokemon} alt='pokemon'/>
							)
						}
					</Media>
					<HeroText>{t('hero.secP')}</HeroText>
					<HeroBtnCont>
						<HeroOrderBtn onClick={() => dispatch(toggleOrderModal())}>{t('hero.orderbtn')}</HeroOrderBtn>
						<HeroMenuBtn onClick={() => dispatch(toggleMenuModal())} >{t('hero.menubtn')}</HeroMenuBtn>
					</HeroBtnCont>
				</HeroDesc>
				<Media queries={{small: '(max-width: 767px)'}}>
					{matches =>
						!matches.small && (
							<HeroImg src={pokemon} alt='pokemon'/>
						)
					}
				</Media>
			</ContainerHero>
		</HeroSection>);
};

export default Hero;
