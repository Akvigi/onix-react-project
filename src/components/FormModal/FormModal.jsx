import React, { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
const portal = document.querySelector('#portal')

const FormModal = ({ noExit }) => {
     const esc = useCallback(
        e => {
            if (e.code === `Escape`) {
                noExit()
            }
        },
        [noExit]
  )

  useEffect(() => {
    window.addEventListener('keydown', esc)

    return () => {
      window.removeEventListener('keydown', esc)
    }
  }, [esc])

  const onBackClick = useCallback(
    e => {
      if (e.currentTarget === e.target) {
        noExit()
      }
    },
    [noExit]
  )
   return createPortal(
       <div onClick={onBackClick}>
           <form action="submit">
               <input type="text" placeholder="Name"/>
               <input type="text" placeholder="Adress"/>
               <input type="phone" placeholder="Phone"/>
               <button type='click'>Menu</button>
               <ul>
                   <h3>Your order</h3>
                   <li></li>
               </ul>
               <button type="submit">Order</button>
           </form>
      {/* <div >
        <p className={'modalLogoutText'}>
          Are you sure that you want to log out?
        </p>
        <div>
          <ModalLogoutButtonYes onClick={() => onHandleLogOut()}>
            YES
          </ModalLogoutButtonYes>
          <ModalLogoutButtonNo onClick={noExit}>NO</ModalLogoutButtonNo>
        </div>
      </d> */}
    </div>,
    portal
  )
}

export default FormModal