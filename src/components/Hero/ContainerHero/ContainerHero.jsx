import React from 'react'
import styled from 'styled-components'
import { respondTo } from '../../../helpers/respondTo'

const ContainerHero = ({children}) => {
  return (
      <Cont>{children}</Cont>
  )
}

const Cont = styled.div`
    ${respondTo.lg`
      max-width: 1200px;
    `}
    max-width: 790px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export default ContainerHero