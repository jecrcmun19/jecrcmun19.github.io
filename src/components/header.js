import React, { useState, useEffect } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import NavBarWeb from './navbar'
import MobileViewDrawer from './mobileDrawer'
import { Link } from 'gatsby'

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
  const verySmallView = useMediaQuery('(min-width:320px)')

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
          <div className='flex justify-center items-center'>
            <Link to='/'>
              <img
                src='/images/munLogo.png'
                alt='munLogo'
                className={classes.imageProperties}
              />
            </Link>
            <div className='ml-3'>
              {!matches && verySmallView ? (
                <Typography variant='h6' noWrap className={classes.eventName}>
                  JECRC MUN
                </Typography>
              ) : null}
            </div>
          </div>
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
