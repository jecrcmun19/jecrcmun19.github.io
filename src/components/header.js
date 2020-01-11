import React, { useState, useEffect } from 'react'
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  Grid,
  AppBar,
  Toolbar,
  useMediaQuery,
  IconButton,
  Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import classnames from 'classnames'
import NavBarWeb from './navbar'
import MobileViewDrawer from './mobileDrawer'

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
    height: 80,
  },
  brand: {
    width: 'auto',
  },
  hide: {
    display: 'none',
  },
  show: {
    marginLeft: 'auto',
  },
  header: {
    margin: 'auto',
    height: 90,
    color: '#ffffff',
    background: 'transparent',
    boxShadow: 'none',
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.sharp,
    }),
  },
  onScroll: {
    margin: 'auto',
    height: 70,
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.sharp,
    }),
  },
  imageProperties: {
    width: 60,
    height: 'auto',
    marginTop: 2,
    paddingTop: 2,
  },
}))

export default function Header(props) {
  const classes = useStyles()
  const [scrollY, setScrollY] = useState(0)
  const [openDropDown, setOpenDropDown] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  const appbarClases = classnames({
    [classes.header]: scrollY === 0,
    [classes.onScroll]: scrollY > 0,
  })
  // header scroll control
  useEffect(() => {
    window.onscroll = logScroll
  }, [])

  function logScroll(e) {
    const { scrollY } = e.currentTarget
    setScrollY(scrollY)
  }

  // mobile-view handling
  const matches = useMediaQuery('(min-width:850px)')
  const verySmallView = useMediaQuery('(min-width:320px')

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleClick = () => {
    setOpenDropDown(!openDropDown)
  }

  useEffect(() => {
    if (matches) {
      handleDrawerClose()
    }
  }, [matches])

  return (
    <ThemeProvider theme={scrollY === 0 ? transparentTheme : blackTheme}>
      <AppBar className={appbarClases}>
        <Toolbar className={classes.root}>
          <Grid
            container
            className={classes.brand}
            spacing={3}
            alignItems='center'
          >
            <Grid item lg={1}>
              <img
                src='images/munLogo.png'
                alt='munLogo'
                className={classes.imageProperties}
              />
            </Grid>
            {!matches && verySmallView ? (
              <Grid item lg={1}>
                <Typography variant='h6' noWrap className={classes.eventName}>
                  JECRC MUN
                </Typography>
              </Grid>
            ) : null}
          </Grid>
          {!matches ? (
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='end'
              onClick={handleDrawerOpen}
              className={open ? classes.hide : classes.show}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <NavBarWeb handleClick={handleClick} />
          )}
        </Toolbar>
        {open ? (
          <MobileViewDrawer
            handleDrawerClose={handleDrawerClose}
            open={open}
            handleClick={handleClick}
            openDropDown={openDropDown}
          />
        ) : null}
      </AppBar>
    </ThemeProvider>
  )
}
