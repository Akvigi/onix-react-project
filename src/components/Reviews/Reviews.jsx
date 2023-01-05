import React, { useState } from 'react'
import style from './Reviews.module.sass'
import data from '../../reviewsdata'

const Reviews = () => {
    const [pagePag, setPagePag] = useState(1)
    console.log(data)
  return (
      <section className={style.Section}>
          <div className={style.Container}>
            <div className={style.TextCont}>
                <h3 className={style.Heading}>What they say about us</h3>
                <p className={style.Text}>We always provide the best service and always maintain the quality of coffee</p>
              </div>
              <div className={style.ListBtnsCont}>
                  <ul className={style.List}>
                    {data.find(({page}) => pagePag === page).data.map(({ name, desc, link }) =>
                        <li className={style.Item} key={desc}>
                          <img className={style.Img} src={link} alt={name} />
                          <div className={style.RevDesc}>
                              <h4>{name}</h4>
                              <p>{desc}</p>
                          </div>
                      </li>)}
                </ul>
                <div className={style.BtnCont}>
                    {data.map(({ page }) => <button type='button' onClick={() => setPagePag(page)} className={page === pagePag ? `${style.Btn} ${style.BtnActive}` : `${style.Btn}`}></button>)}
                </div>
              </div>
              
            </div>
        </section>
  )
}

export default Reviews