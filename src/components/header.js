import React, { useState } from 'react'
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  Avatar,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  ListItem,
  List,
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
    background: 'transparent',
  },
  onScroll: {
    height: 55,
  },
  white: {
    color: '#ffffff',
    backgroundColor: '#ffffff',
  },
  black: {
    backgroundColor: '#000',
  },
  headerItems: {
    color: '#fff',
    fontWeight: 'bold',
  },
  grid: {
    marginLeft: 1,
    marginRight: 1,
  },
  horizontalList: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    margin: 0,
  },
}))

export default function Header(props) {
  const classes = useStyles()
  const [scrollY, setScrollY] = useState(0)

  window.onscroll = logScroll

  function logScroll(e) {
    const { scrollY } = e.currentTarget
    setScrollY(scrollY)
  }

  return (
    <ThemeProvider theme={scrollY < 110 ? transparentTheme : blackTheme}>
      <AppBar className={scrollY < 110 ? classes.header : classes.onScroll}>
        <Toolbar>
          <Grid container justify='flex-start' lg={1}>
            <Grid item lg={1} md={2} sm={1}>
              <Avatar className={classes.black}>A</Avatar>
            </Grid>
          </Grid>
          <Grid container justify='flex-end' lg={8}>
            <List className={classes.horizontalList}>
              <ListItem>
                <Typography className={classes.headerItems} variant='subtitle2'>
                  HOME
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.headerItems} variant='subtitle2'>
                  ABOUT
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.headerItems} variant='subtitle2'>
                  COMITTEES
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.headerItems} variant='subtitle2'>
                  REGISTRATIONS
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.headerItems} variant='subtitle2'>
                  BLOGS
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.headerItems} variant='subtitle2'>
                  GALLERY
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.headerItems} variant='subtitle2'>
                  CONTACT
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}
