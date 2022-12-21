import React from 'react'
import data from '../../fudata'
import Container from '../Container/Container'
import SectionHeading from '../SectionHeading/SectionHeading'
import SpList from './SpList/SpList'
import style from './SpecialFU.module.sass'

const SpecialFU = () => {
  return (
    <section className={style.Foryou}>
        <Container>
            <SectionHeading>Special menu for You</SectionHeading>
            <SpList data={data} />
        </Container>
    </section>
  )
}

export default SpecialFU