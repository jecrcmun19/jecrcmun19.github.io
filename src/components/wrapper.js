import React from 'react'
import Header from './header'
import Footer from './footer'

function Wrapper(props) {
  const { children } = props
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Wrapper
