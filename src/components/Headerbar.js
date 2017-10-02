import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #333;
  padding: 10px;
  color: white;
`

const Headerbar = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}


export default Headerbar
