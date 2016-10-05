import React from 'react'
import useSheet from 'react-jss'

const Headerbar = ({sheet, children}) => {
  const { container } = sheet.classes
  return (
    <div className={container}>
      {children}
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#333',
    padding: 10,
    color: 'white',
  }
}

export default useSheet(Headerbar, styles)
