import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'

const useStyles = makeStyles(theme => ({
  root: {
    width: '90vw',
    maxWidth: '900px',
    padding: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(1.7),
      paddingRight: theme.spacing(1.7),
      width: '97vw',
    },
    minHeight: '100px',
    backgroundColor: theme.palette.background.lightPinkish,
    border: `1px solid ${theme.palette.border.pinkish}`,
    boxShadow: theme.palette.boxShadow.content,
    borderRadius: '15px',
  },
}))

export default function ContentBox({ children, className = '', ...props }) {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classnames(classes.root, className)}
      direction='row'
      justify='center'
      alignItems='center'
      {...props}
    >
      {children}
    </Grid>
  )
}
