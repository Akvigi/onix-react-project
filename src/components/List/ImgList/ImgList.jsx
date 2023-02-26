import style from './ImgList.module.sass';
import PropTypes from 'prop-types';

import React from 'react';

const ImgList = ({src, alt}) => (
	<img className={style.Img} src={src} alt={alt}/>
);

ImgList.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default ImgList;
