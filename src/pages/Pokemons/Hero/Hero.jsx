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
const Hero = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getHeroImg());
	}, [dispatch]);

	const pokemon = useSelector(selectHeroPokemon);

	return (
		<HeroSection>
			<ContainerHero>
				<HeroDesc>
					<HeroHeader>Buy pokemon at our site!</HeroHeader>
					<Media queries={{small: '(max-width: 767px)'}}>
						{matches =>
							matches.small && (
								<HeroImg src={pokemon} alt='cup of Cappucino and statistics'/>
							)
						}
					</Media>
					<HeroText>Welcome to our online store for buying Pokemon! We offer a wide variety of Pokemon species, each with their own unique abilities and strengths.</HeroText>
					<HeroBtnCont>
						<HeroOrderBtn onClick={() => dispatch(toggleOrderModal())}>Order now</HeroOrderBtn>
						<HeroMenuBtn onClick={() => dispatch(toggleMenuModal())} >More menu</HeroMenuBtn>
					</HeroBtnCont>
				</HeroDesc>
				<Media queries={{small: '(max-width: 767px)'}}>
					{matches =>
						!matches.small && (
							<HeroImg src={pokemon} alt=''/>
						)
					}
				</Media>
			</ContainerHero>
		</HeroSection>);
};

export default Hero;
