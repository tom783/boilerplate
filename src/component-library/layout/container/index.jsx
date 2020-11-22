import * as React from 'react'
import styled, { css } from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ vertical }) => {
    switch (vertical) {
      case 'top':
        return css`
          align-items: flex-start;
        `
      case 'bottom':
        return css`
          align-items: flex-end;
        `
      case 'middle':
      default:
        return css`
          align-items: center;
        `
    }
  }}

  ${({ horizon }) => {
    switch (horizon) {
      case 'left':
        return css`
          justify-content: flex-start;
        `
      case 'right':
        return css`
          justify-content: flex-end;
        `
      case 'spaceBetween':
        return css`
          justify-content: space-between;
        `
      case 'spaceAround':
        return css`
          justify-content: space-around;
        `
      case 'middle':
      default:
        return css`
          justify-content: center;
        `
    }
  }}
`

const Container = ({
  vertical = 'middle',
  horizon = 'middle',
  ...etcProps
}) => {
  const props = { vertical, horizon, ...etcProps }

  return <Wrap {...props}>{props.children}</Wrap>
}

export default Container
