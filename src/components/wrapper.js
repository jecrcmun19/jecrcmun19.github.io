import React from 'react'
import Header from './header'

function Wrapper(props) {
  const { children } = props
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Wrapper
