import React from 'react'
import OurProducts from './OurProducts'

describe('<OurProducts />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OurProducts />)
  })
})