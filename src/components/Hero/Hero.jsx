import React from 'react';
import Media from 'react-media';
import {useDispatch} from 'react-redux';

import {toggleMenuModal, toggleOrderModal} from '../../redux/modalsSlice';

import style from './Hero.module.sass';

import coffee from '../../images/img-hero.png';
import ContainerHero from './ContainerHero/ContainerHero';

const Hero = () => {
	const dispatch = useDispatch();

	return (<section className={style.Hero}>
		<ContainerHero>
			<div className={style.HeroCont}>
				<h1 className={style.Heading}>Enjoy your <span>coffee</span> before your activity</h1>
				<Media queries={{small: '(max-width: 767px)'}}>
					{matches =>
						matches.small && (
							<img className={style.Img} src={coffee} alt='cup of Cappucino and statistics'/>
						)
					}
				</Media>
				<p className={style.Text}>Boost your productivity and build your mood with a glass of coffee in the morning</p>
				<div >
					<button onClick={() => dispatch(toggleOrderModal())} className={style.Btn}>Order now</button>
					<button className={style.Linkmenu} onClick={() => dispatch(toggleMenuModal())} >More menu</button>
				</div >
			</div>
			<Media queries={{small: '(max-width: 767px)'}}>
				{matches =>
					!matches.small && (
						<img className={style.Img} src={coffee} alt='cup of Cappucino and statistics'/>
					)
				}
			</Media>
		</ContainerHero>
	</section>);
};

export default Hero;
