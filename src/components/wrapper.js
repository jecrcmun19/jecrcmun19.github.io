import React from 'react'
import Header from './header'
import Footer from './footer'

function Wrapper(props) {
  const { children } = props
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Wrapper
