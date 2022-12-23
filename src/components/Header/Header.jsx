import React from 'react'
import style from './Header.module.sass'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Header = ({goToAbout, goToSpecial, onOrder}) => {

  return (
      <header className={style.Header}>
        <div className={style.container}>
            <h2 className={style.Logo}>Project Onix</h2>
            <nav className={style.Nav}>
            <a className={style.Link} onClick={goToAbout} href="#aboutus">About us</a>
            <a className={style.Link} onClick={goToSpecial} href="#specialforyou">Special for you</a>
          <button className={style.Btn} onClick={onOrder} type='button'><ShoppingCartTwoToneIcon
            sx={{
              color: "#2F2105",
              width: "32px",
              height: "32px"
            }}/></button>
          </nav>
        </div>
      </header>
  )
}

export default Header