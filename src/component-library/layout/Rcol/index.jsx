import * as React from 'react'
import styled, { css } from 'styled-components'
import media from 'css-in-js-media'

const Wrap = styled.div`
  ${media('>desktop')} {
    width: ${({ xl }) => {
      return css``
    }}
  }
  ${media('<=desktop', '>tablet')} {
    lg
  }
  ${media('<=tablet', '>phone')} {
    md
  }
  ${media('<=phone')} {
    sm
  }
`

const Rcol = ({ sm = 3, md = 3, lg = 3, xl = 3, ...etcProps }) => {
  const props = { sm, md, lg, xl, ...etcProps }

  return <div {...props}>{props.children}</div>
}

export default Rcol
