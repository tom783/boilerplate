import * as React from 'react'
import styled, { css } from 'styled-components'
import * as R from 'ramda'

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ gutter, noGutter, column }) =>
    css`
      margin: 0 ${noGutter ? 0 : gutter * -1}px;
      flex-direction: ${column ? 'column' : 'row'};
    `}

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

const defaultProps = {
  gutter: 10,
  noGutter: false,
  column: false,
  equalHeight: false,
}

export const GridContext = React.createContext({ ...defaultProps })

const Container = ({
  vertical = 'middle',
  horizon = 'middle',
  gutter = 10,
  ...etcProps
}) => {
  const props = { vertical, horizon, gutter, ...etcProps }

  return (
    <GridContext.Consumer>
      {(value) => {
        const mergeProps = R.mergeRight(value, props)

        return (
          <Wrap {...props}>
            <GridContext.Provider value={{ ...mergeProps }}>
              {props.children}
            </GridContext.Provider>
          </Wrap>
        )
      }}
    </GridContext.Consumer>
  )
}

export default Container
