import React from 'react';
import Media from 'react-media';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import ContainerHero from '../../../components/Hero/ContainerHero';
import HeroSection from '../../../components/Hero/HeroSection';
import HeroDesc from '../../../components/Hero/HeroDesc';
import HeroHeader from '../../../components/Hero/HeroHeader';
import HeroText from '../../../components/Hero/HeroText';
import HeroOrderBtn from '../../../components/Hero/HeroOrderBtn';
import HeroMenuBtn from '../../../components/Hero/HeroMenuBtn';
import HeroBtnCont from '../../../components/Hero/HeroBtnCont';
import HeroImg from '../../../components/Hero/HeroImg';

import {toggleMenuModal, toggleOrderModal} from '../../../redux/slices/common/modalsSlice';
import {useGetHeroImgQuery} from '../../../redux/slices/pokemons/imgApi';

const Hero = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();

	const {data, isFetching} = useGetHeroImgQuery(1574648);

	return (
		<HeroSection>
			<ContainerHero>
				<HeroDesc>
					<HeroHeader>{t('hero.mainP')}</HeroHeader>
					<Media queries={{small: '(max-width: 767px)'}}>
						{matches =>
							matches.small && (
								!isFetching && <HeroImg src={data.hits[0].largeImageURL} alt='pokemon' />
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
							!isFetching && <HeroImg src={data.hits[0].largeImageURL} alt='pokemon' />
						)
					}
				</Media>
			</ContainerHero>
		</HeroSection>);
};

export default Hero;
