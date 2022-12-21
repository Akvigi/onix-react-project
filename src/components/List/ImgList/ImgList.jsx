import style from './ImgList.module.sass'

import React from 'react'

const ImgList = ({src, alt}) => {
    return (
        <img className={style.Img} src={src} alt={alt}/>
  )
}

export default ImgList