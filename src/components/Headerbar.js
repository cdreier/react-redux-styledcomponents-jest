import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #333;
  padding: 10px;
  color: white;
`

const Headerbar = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

Headerbar.propTypes = {
  children: PropTypes.any,
}


export default Headerbar
