import React, { useState } from 'react'
import style from './Team.module.sass'
import data from '../../reviewsdata'
const Team = () => {
    // const [list, setList] = useState([])
  return (
        <section className={style.Section}>
          <div>
              <h3 className={style.Heading}>What they say about us</h3>
              <p className={style.Text}>We always provide the best service and always maintain the quality of coffee</p>
          </div>
          <ul className={style.List}>
              {data.map(({name, desc, link}) => <li>
                  <img className={style.Img} src={link} alt={name} />
                  <div className={style.RevDesc}>
                      <h4>{name}</h4>
                      <p>{desc}</p>
                  </div>
              </li>)}
              {/* <li>
                  <img src={data[0].link} alt="" />
                  <div>
                      <h4>{data[0].name}</h4>
                      <p>{data[0].desc}</p>
                  </div>
              </li> 
              <li>
                  <img src={data[1].link} alt="" />
                  <div>
                      <h4>{data[1].name}</h4>
                      <p>{data[1].desc}</p>
                  </div>
              </li> 
              <li>
                  <img src={data[2].link} alt="" />
                  <div>
                      <h4>{data[2].name}</h4>
                      <p>{data[2].desc}</p>
                  </div>
              </li>  */}
              {/* <button type='button' className={style.Btn}></button> */}
          </ul>
        </section>
  )
}

export default Team