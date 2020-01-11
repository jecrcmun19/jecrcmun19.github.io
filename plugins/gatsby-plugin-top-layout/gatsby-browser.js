/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react'
import TopLayout from './TopLayout'
import '../../src/styles/index.css'

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
