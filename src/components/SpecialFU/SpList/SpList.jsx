import React from 'react'
import Img from '../../List/ImgList/ImgList'
import NamePrice from '../../List/NamePrice/NamePrice'
import Rate from '../../List/Rate/Rate'
import style from './SpList.module.sass';


const SpList = ({data}) => {
  return (
    <ul className={style.List}>
      {data.map(({name, desc, price, rate, link}) => (
        <li className={style.Item} key={name}>
          <Img  src={link} alt={name}/>
          <NamePrice name={name} price={price}/>
          <div >
            <p className={style.Desc}>{desc}</p>
            <div className={style.RateCont}>
              <Rate rate={rate}/>
            </div>
          </div>
      </li>
      ))}
                        {/* <li class="coffee-list__item foryou-list__item">
                            <img  src="./imgs/sandwich.png" alt="Sandwich"/>
                            <div >
                                <h3 >Sandwich</h3>
                                <p class="coffee-li-item__price">15$</p>
                            </div>
                            <div >
                                <p class="foryou-list-item__desc">bread with meat and vegetables</p>
                                <div >
                                    <p>4.8</p>
                                    <img  src={star} alt="star"/>
                                </div>
                            </div>
      </li> */}
    </ul>
  )
}

export default SpList