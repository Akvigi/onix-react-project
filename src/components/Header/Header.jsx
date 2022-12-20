import React from 'react'
import style from './Header.module.sass'
import HeaderLink from './HeaderLink/HeaderLink'

const Header = () => {
  return (
      <header className={style.Header}>
        <div className={style.container}>
            <h2 className={style.Logo}>Project Onix</h2>
            <nav className={style.Nav }>
            <HeaderLink href='' textL="About us"/>
            <HeaderLink href='' textL="Our product"/>
            <HeaderLink href='' textL="Delivery"/>
          </nav>
        </div>
      </header>
  )
}

export default Header