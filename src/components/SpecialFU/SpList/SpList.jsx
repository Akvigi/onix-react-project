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
    </ul>
  )
}

export default SpList