import * as React from 'react'
import Container from './index'
import Rcol from '../Rcol'

export default {
  title: 'layout/container',
  component: Container,
}

export const Basic = (args) => (
  <Container {...args}>
    <Rcol>1</Rcol>
    <Rcol>2</Rcol>
    <Rcol>3</Rcol>
    <Rcol>4</Rcol>
  </Container>
)
Basic.args = {}
