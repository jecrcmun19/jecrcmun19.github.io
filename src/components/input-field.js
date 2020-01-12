import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import classnames from 'classnames'

export default function InputField({ children, className = '', ...props }) {
  return (
    <TextField
      fullWidth
      className={classnames(className)}
      margin='normal'
      {...props}
    >
      {children}
    </TextField>
  )
}
