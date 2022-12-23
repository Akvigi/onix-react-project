import React from 'react'
import Media from 'react-media'
import imgus from '../../images/aboutus.jpg'
import style from './AboutUs.module.sass'

const AboutUs = ({onOrder, refTo}) => {
  return (
    <section className={style.Aboutus} ref={refTo}>
          <div className={style.Cont}>
                    <Media queries={{ small: '(max-width: 767px)' }}>
                        {matches =>
                            !matches.small && (
                                <img className={style.Pic} src={imgus} alt="coffee"/>
                            )
                        }
                    </Media>
                    <div className={style.Info} >
                        <h2 className={style.Heading} >About us</h2>
                        <p className={style.Maintxt}>We provide quality coffee, and ready to deliver.</p>
                        <p className={style.Desc}>
                            We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and
                        available in stores worldwide.
                        </p>
                        <button onClick={onOrder} className={style.Btn} type="button" >Get your coffee</button>
                    </div>
                </div>
            </section>
  )
}

export default AboutUs