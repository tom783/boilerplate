import * as React from 'react'
import styled, { css } from 'styled-components'
import media from 'css-in-js-media'
import { GridContext } from '../container'

const gridColumns = {
  default: 12,
}

const calcWidth = (col) => (100 / gridColumns.default) * col

const Wrap = styled.div`
  display: flex;
  flex: 0 0 auto;
  ${({ gutter, equalHeight, column, noGutter }) => {
    return css`
      padding: ${noGutter ? 0 : `0 ${gutter}px`};
      height: ${equalHeight ? '100%' : 'auto'};
      flex-direction: ${column ? 'column' : 'row'};
    `
  }}

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

  ${media('>desktop')} {
    ${({ xl }) => {
      return css`
        flex-basis: ${calcWidth(xl)}%;
        max-width: ${calcWidth(xl)}%;
      `
    }}
  }
  ${media('<=desktop', '>tablet')} {
    ${({ lg }) => {
      return css`
        flex-basis: ${calcWidth(lg)}%;
        max-width: ${calcWidth(lg)}%;
      `
    }}
  }
  ${media('<=tablet', '>phone')} {
    ${({ md }) => {
      return css`
        flex-basis: ${calcWidth(md)}%;
        max-width: ${calcWidth(md)}%;
      `
    }}
  }
  ${media('<=phone')} {
    ${({ sm }) => {
      return css`
        flex-basis: ${calcWidth(sm)}%;
        max-width: ${calcWidth(sm)}%;
      `
    }}
  }
`

const Rcol = ({
  sm = 12,
  md = 6,
  lg = 3,
  xl = 3,
  vertical = 'middle',
  horizon = 'middle',
  ...etcProps
}) => {
  const props = { sm, md, lg, xl, vertical, horizon, ...etcProps }

  return (
    <GridContext.Consumer>
      {(gridContext) => (
        <Wrap {...gridContext} {...props}>
          {props.children}
        </Wrap>
      )}
    </GridContext.Consumer>
  )
}

export default Rcol
