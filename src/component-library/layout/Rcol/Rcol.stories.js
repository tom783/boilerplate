import * as React from 'react'
import Rcol from './index'

export default {
  title: 'layout/Rcol',
  component: Rcol,
}

export const Basic = (args) => {
  return <Rcol {...args}>col</Rcol>
}

Basic.args = {}
