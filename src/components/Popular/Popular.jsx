import React from 'react'
import Container from '../Container/Container'

import style from './Popular.module.sass'
import SectionHeading from '../SectionHeading/SectionHeading'
import PopList from './PopList/PopList'
import data from '../../popdata'


const Popular = () => {
  return (
        <section className={style.Popular}>
            <Container>
              <SectionHeading>Popular Now</SectionHeading>
              <PopList data={data} />
                {/* <ul className={style.List}>
                    <li className={style.Item}>
                        <img className={style.Img} src={vlate} alt="Vanilla Latte"/>
                        <div className={style.NamePriceCont}>   
                            <h3 className={style.HeadingName}>Vanilla Latte</h3>
                            <p className={style.Price}>15K</p>
                        </div>
                        <div className={style.Desc}>
                            <div className={style.Rate}>    
                                <p>4.8</p>
                                <img className={style.Starpng} src={star} alt="star"/>
                            </div>
                        </div>
                    </li>
                    <li className={style.Item}>
                        <img className={style.Img} src={esp} alt="Espresso"/>
                        <div className={style.NamePriceCont}>
                            <h3 className={style.HeadingName}>Espresso</h3>
                            <p className={style.Price}>12K</p>
                        </div>
                            
                        <div className={style.Desc}>
                            <div className={style.Rate}> 
                                <p>4.8</p>
                                <img className={style.Starpng} src={star} alt="star"/>
                            </div>
                        </div>
                    </li>
                    <li className={style.Item}>
                        <img className={style.Img} src={haz} alt="Hazelnut Latte"/>
                        <div className={style.NamePriceCont}>
                            <h3 className={style.HeadingName}>Hazelnut Latte</h3>
                            <p className={style.Price}>13K</p>
                        </div>
                        <div className={style.Desc}>
                            <div className={style.Rate}> 
                                <p>4.8</p>
                                <img className={style.Starpng} src={star} alt="star"/>
                            </div>
                        </div>
                    </li>
                </ul> */}
            </Container>
        </section>
  )
}

export default Popular