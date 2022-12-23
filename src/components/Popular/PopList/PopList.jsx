import React from 'react'
import style from './PopList.module.sass'
import Rate from '../../List/Rate/Rate'
import Img from '../../List/ImgList/ImgList'
import NamePrice from '../../List/NamePrice/NamePrice'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const PopList = ({data, addProd}) => {
  return (
      <ul className={style.List}>
          {data.map(({ name, price, rate, link }) => {
              return <li key={name} className={style.Item}>
                <Img src={link} alt={name} />
                <NamePrice name={name} price={price} />  
                <div className={style.Desc}>
                    <div className={style.Rate}>    
                        <Rate rate={rate} />
                    </div>
                  <button className={style.BtnAdd}
                    onClick={() => addProd(name, price)}
                    type='button' id={name}>
                    <ShoppingCartTwoToneIcon
                      sx={{
                        color: "white",
                        width: "25px",
                        height: "25px"
                    }}/></button>
                </div>
          </li>})}
    </ul>
  )
}

export default PopList