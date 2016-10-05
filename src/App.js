import React from 'react'
import useSheet from 'react-jss'

import Headerbar from './components/Headerbar'

const App = ({sheet}) => {
  const { classes } = sheet
  return (
    <div className={classes.container}>
      <Headerbar >Awesome title!</Headerbar>
      <h2>happy coding!</h2>
    </div>
  )
}

const styles = {
  container: {

  }
}

export default useSheet(App, styles)
