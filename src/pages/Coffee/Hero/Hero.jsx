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
const Hero = () => {
	const dispatch = useDispatch();

	return (
		<HeroSection>
			<ContainerHero>
				<HeroDesc>
					<HeroHeader>Enjoy your <span>coffee</span> before your activity</HeroHeader>
					<Media queries={{small: '(max-width: 767px)'}}>
						{matches =>
							matches.small && (
								<HeroImg src={coffee} alt='cup of Cappucino and statistics'/>
							)
						}
					</Media>
					<HeroText>Boost your productivity and build your mood with a glass of coffee in the morning</HeroText>
					<HeroBtnCont>
						<HeroOrderBtn onClick={() => dispatch(toggleOrderModal())}>Order now</HeroOrderBtn>
						<HeroMenuBtn onClick={() => dispatch(toggleMenuModal())} >More menu</HeroMenuBtn>
					</HeroBtnCont>
				</HeroDesc>
				<Media queries={{small: '(max-width: 767px)'}}>
					{matches =>
						!matches.small && (
							<HeroImg src={coffee} alt='cup of Cappucino and statistics'/>
						)
					}
				</Media>
			</ContainerHero>
		</HeroSection>);
};

export default Hero;
