import React from 'react'
import Container from '../Container/Container'

import style from './Popular.module.sass'
import SectionHeading from '../SectionHeading/SectionHeading'
import PopList from './PopList/PopList'
import data from '../../popdata'


const Popular = ({onAddProd}) => {
  return (
        <section className={style.Popular}>
            <Container>
              <SectionHeading>Popular Now</SectionHeading>
              <PopList data={data} addProd={onAddProd} />
            </Container>
        </section>
  )
}

export default Popular