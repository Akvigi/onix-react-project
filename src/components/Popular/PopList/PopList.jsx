import React from 'react'
import style from './PopList.module.sass'
import star from '../../../images/akar-icons_star.png'
import data from '../../../popdata'

const PopList = () => {
  return (
      <ul className={style.List}>
          {data.map(({name, price, rate, link}) => {return <li className={style.Item}>
              <img className={style.Img} src={link} alt={name} />
                        <div className={style.NamePriceCont}>   
                            <h3 className={style.HeadingName}>{name}</h3>
                            <p className={style.Price}>{price}K</p>
                        </div>
                        <div className={style.Desc}>
                            <div className={style.Rate}>    
                                <p>{rate}</p>
                                <img className={style.Starpng} src={star} alt="star"/>
                            </div>
                        </div>
          </li>})}
                    {/* <li className={style.Item}>
                        <img className={style.Img} src={vlate} alt="Vanilla Latte"/>
                        <div className={style.NamePriceCont}>   
                            <h3 className={style.HeadingName}>Vanilla Latte</h3>
                            <p className={style.Price}>{}K</p>
                        </div>
                        <div className={style.Desc}>
                            <div className={style.Rate}>    
                                <p>{rate}</p>
                                <img className={style.Starpng} src={star} alt="star"/>
                            </div>
                        </div>
          </li> */}
    </ul>
  )
}

export default PopList