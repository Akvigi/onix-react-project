import React from 'react'
import styled from 'styled-components'

const Container = ({children}) => {
  return (
      <Cont>{children}</Cont>
  )
}

const Cont = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`

export default Container