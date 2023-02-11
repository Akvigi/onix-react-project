import React from 'react'
import style from './Footer.module.sass'
const Footer = () => {
  return (
    <footer className={style.Footer}>
        <div className={style.Container}>
            <div className={style.Contacts}>
                <span>Panasevich Nikita</span>
                <span>Design: <a href="https://www.figma.com/file/2ScjaVZyykqnDhi1RLtY3B/Cafe-Street---E-Commerce-Landing-Page-(Community)?node-id=6%3A21&t=VWcNxFU7dZw4TJs5-0">Link</a></span>
                <a href="https://github.com/Akvigi">My GitHub</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer