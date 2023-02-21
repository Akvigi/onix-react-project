import React from 'react'
import style from './MenuList.module.sass'
import Rate from '../../List/Rate/Rate'

const MenuList = ({dataFu, dataPop, onAdd}) => {
  return (
    <ul className={style.List}>
      {dataFu.map(({ name, desc, price, link, rate }) => (
        <li className={style.Item} key={name}>
                 <div className={style.Desc}>
                    <img className={style.Img} src={link} alt={name} />
                    
                    <div className={style.ContainerInfo}>
                        <h3>{name}</h3>
                        <p>{desc}</p>
                        <div className={style.Rate}>
                            <Rate rate={rate}/>
                        </div> 
                      </div>
                    </div>
                  <div className={style.PriceBtnCont}>
                        <p>{price}K</p>
                        <button className={style.Btn} onClick={() => onAdd(name, price)} type='click'>+</button>
                  </div>
        </li>)
      )}
      {dataPop.map(({ name, price, link, rate }) => (
        <li className={style.Item} key={`${name}${price}`}>
                  <div className={style.Desc}>
                      <img className={style.Img} src={link} alt={name} />
                    
                      <div className={style.ContainerInfo}>
                        <h3>{name}</h3>
                        <p></p>
                        <div className={style.Rate}>
                            <Rate rate={rate}/>
                        </div>  
                      </div>
                  </div>
                  <div className={style.PriceBtnCont}>
                      <p>{price}K</p>
                      <button className={style.Btn}
                        onClick={() => onAdd(name, price)}
                        type='click'>+</button>
                  </div>
        </li>)
      )}
    </ul>
  )
}

export default MenuList