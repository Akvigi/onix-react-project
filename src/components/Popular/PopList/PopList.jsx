import React from 'react'
import style from './PopList.module.sass'
import Rate from '../../List/Rate/Rate'
import Img from '../../List/ImgList/ImgList'
import NamePrice from '../../List/NamePrice/NamePrice'

const PopList = ({data}) => {
  return (
      <ul className={style.List}>
          {data.map(({name, price, rate, link}) => {return <li key={name} className={style.Item}>
                <Img src={link} alt={name} />
                <NamePrice name={name} price={price} />  
                <div className={style.Desc}>
                    <div className={style.Rate}>    
                        <Rate rate={rate} />
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