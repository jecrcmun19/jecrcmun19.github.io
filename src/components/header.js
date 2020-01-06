import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  Avatar,
  Grid,
} from '@material-ui/core'

const transparentTheme = createMuiTheme({
  palette: {
    primary: { main: '#E5E5E5', contrastText: '#ffffff' },
  },
})

const blackTheme = createMuiTheme({
  palette: {
    primary: { main: '#000000' },
  },
})

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    margin: 'auto',
    height: 60,
    color: 'ffffff',
  },
  onScroll: {
    height: 55,
  },
  white: {
    color: '#ffffff',
    backgroundColor: '#ffffff',
  },
  headerItems: {
    color: '#111111',
  },
}))

export default function Header(props) {
  const classes = useStyles()
  const [scrollValue, setScrollValue] = useState(0)

  window.onscroll = logScroll

  function logScroll(e) {
    const { scrollY } = { ...e.currentTarget }
    setScrollValue(scrollY)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={scrollValue < 110 ? transparentTheme : blackTheme}>
        <AppBar
          className={scrollValue < 110 ? classes.header : classes.onScroll}
        >
          <Toolbar>
            <Grid container spacing={4} justify="center">
            <Avatar item className={classes.white} md={3} sm={2} xl={7}>A</Avatar>
              <Grid item justify='center'>
                <Typography
                  color='primary'
                  className={classes.headerItems}
                  variant='h6'
                >
                  Home
                </Typography>
              </Grid>
              <Grid item justify='center'>
                <Typography className={classes.headerItems} variant='h6'>
                  About
                </Typography>
              </Grid>
              <Grid item justify='center'>
                <Typography className={classes.headerItems} variant='h6'>
                  Comittees
                </Typography>
              </Grid>
              <Grid item justify='center'>
                <Typography className={classes.headerItems} variant='h6'>
                  Registrations
                </Typography>
              </Grid>
              <Grid item justify='center'>
                <Typography className={classes.headerItems} variant='h6'>
                  Blogs
                </Typography>
              </Grid>
              <Grid item justify='center'>
                <Typography className={classes.headerItems} variant='h6'>
                  Gallery
                </Typography>
              </Grid>
              <Grid item justify='center'>
                <Typography className={classes.headerItems} variant='h6'>
                  Contact
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </React.Fragment>
  )
}
