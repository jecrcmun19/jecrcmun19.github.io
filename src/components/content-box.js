import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'

const useStyles = makeStyles(theme => ({
  root: {
    width: '90vw',
    maxWidth: '900px',
    padding: theme.spacing(6),
    minHeight: '100px',
    backgroundColor: theme.palette.background.pinkish,
    border: `1px solid ${theme.palette.border.pinkish}`,
    boxShadow: theme.palette.boxShadow.content,
    borderRadius: '15px',
  },
}))

export default function ContentBox({ children, className = '' }) {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classnames(classes.root, className)}
      direction='row'
      justify='center'
      alignItems='center'
    >
      {children}
    </Grid>
  )
}
