import Notiflix from 'notiflix'
import React, { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import style from './FormModal.module.sass'

const portal = document.querySelector('#portal')
  
const FormModal = ({ onExit, onMenu, order, modal, onDelete }) => {
  const [name, setName] = useState('')
  const [number, setPhone] = useState('')
  const [Address, setAddress] = useState('')
  const reset = () => {
    setName('')
    setPhone('')
    setAddress('')
  }
  const esc = useCallback(
    e => {
      if (e.code === `Escape`) {
        onExit()
      }
    },
    [onExit]
  )

  useEffect(() => {
    window.addEventListener('keydown', esc)

    return () => {
      window.removeEventListener('keydown', esc)
    }
  }, [esc])

  const onSubmitForm = (e) => {
         e.preventDefault()
         if (order.length === 0) {
           return Notiflix.Notify.warning('Nothing in cart');
          }
          if (number === "") {
           return Notiflix.Notify.failure('Please input number of your phone!');
         }
         console.log(Address, number, name);
          onExit()
         reset()
  }
  
  return createPortal(
    <div className={modal ? `${style.Overlay} ${style.Active}` : style.Overlay}>   
        <form className={style.Form} onSubmit={(e) => onSubmitForm(e)} action="submit">
          <button type='button'
            onClick={onExit}
            className={style.ExitBtn}>X</button>
          <input className={style.Input}
            onChange={(e) => setName(e.currentTarget.value)}
            type="text"
            placeholder="Name" />
          <input className={style.Input}
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.currentTarget.value)}
          />
          <input className={style.Input}
            type="phone"
            placeholder="Phone"
              onChange={(e) => setPhone(e.currentTarget.value)}
          />
          <button className={style.MenuBtn}
            onClick={onMenu} type='button'>Menu</button>
          <h4>Your order</h4>
          <ul className={style.List}>
                  
                {order.length > 0 ? (order.map(({ name, price, id }) =>
                  (<li key={id} className={style.OrderItem}>
                  <p>{name}</p>
                  <div className={style.PriceDelbtnCont}>
                    <p>{price}K</p>
                    <button onClick={() => onDelete(id)} className={style.DelBtn}>-</button>
                  </div>
                  </li>))) : (<p>Nothing in cart</p>)
                }
          </ul>
          <button className={style.OrderBtn} type="submit">Order</button>
        </form>
    </div>,
    portal
  )
}

export default FormModal