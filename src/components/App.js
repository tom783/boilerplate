import * as React from 'react'
import Container from '../component-library/layout/container'
import Rcol from '../component-library/layout/Rcol'

function App() {
  return (
    <div className='App'>
      app
      <Container>
        <Rcol>1</Rcol>
        <Rcol>2</Rcol>
        <Rcol>3</Rcol>
      </Container>
    </div>
  )
}

export default App
