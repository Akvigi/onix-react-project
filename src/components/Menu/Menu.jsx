import React, { useCallback, useEffect } from 'react'
import MenuList from './MenuList/MenuList'
import dataF from '../../fudata';
import dataP from '../../popdata'
import style from './Menu.module.sass'
const Menu = ({onExit}) => {
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

  const onBackClick = useCallback(
    e => {
      if (e.currentTarget === e.target) {
        onExit()
      }
    },
    [onExit]
  )
  return (
    <div onClick={onBackClick} className={style.Overlay}>
          <div className={style.Menu}>
              <h2>Menu</h2>
              <MenuList dataFu={dataF} dataPop={dataP} />
          </div>
    </div>
  )
}

export default Menu