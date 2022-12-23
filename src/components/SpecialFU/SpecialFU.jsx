import React from 'react'
import data from '../../fudata'
import Container from '../Container/Container'
import SectionHeading from '../SectionHeading/SectionHeading'
import SpList from './SpList/SpList'
import style from './SpecialFU.module.sass'

const SpecialFU = ({specialRef, onAddProd}) => {
  return (
    <section className={style.Foryou} ref={specialRef}>
        <Container>
            <SectionHeading>Special menu for You</SectionHeading>
        <SpList data={data} addProd={onAddProd}/>
        </Container>
    </section>
  )
}

export default SpecialFU