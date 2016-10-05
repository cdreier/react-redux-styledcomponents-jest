import React from 'react'
import renderer from 'react-test-renderer'

import Headerbar from '../Headerbar'

it('renders the headerbar correctly', () => {
  const component = renderer.create(
    <Headerbar >Awesome title!</Headerbar>
  )
  expect(component.toJSON()).toMatchSnapshot()
})
