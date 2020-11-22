import * as React from 'react'
import Container from './index'

export default {
  title: 'layout/container',
  component: Container,
}

export const Basic = (args) => (
  <Container {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Container>
)
Basic.args = {}
