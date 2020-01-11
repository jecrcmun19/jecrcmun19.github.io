import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import CollapseDropDown from './collapse'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignContent: 'center',
  },
  headerItems: {
    fontFamily: "'Rubik', sans-serif",
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: 'auto',
    backgroundColor: '#000000',
    color: '#fff',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  avatarProperties: {
    marginRight: 5,
    padding: 2,
  },
  chevron: {
    color: '#fff',
  },
  listItem: {
    color: theme.palette.secondary.main,
  },
}))

function MobileViewDrawer(props) {
  const classes = useStyles()
  const [openDropDown, setOpenDropDown] = React.useState(false)

  const handleClick = () => {
    setOpenDropDown(!openDropDown)
  }

  const handleDropDownClose = () => {
    setOpenDropDown(false)
  }

  const { handleDrawerClose, open } = props

  useEffect(() => {
    if (!open) handleDropDownClose()
  }, [open])
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} className={classes.chevron}>
            <ChevronRightIcon className={classes.chevron} />
          </IconButton>
        </div>
        <Divider />
        <List className={classes.headerItems}>
          {[
            'HOME',
            'ABOUT',
            'COMITTEES',
            'REGISTRATIONS',
            'BLOGS',
            'GALLERY',
            'CONTACT',
          ].map((text, index) => (
            <div key={index}>
              <ListItem
                button
                onClick={() => (text === 'ABOUT' ? handleClick() : null)}
              >
                <ListItemText primary={text} />
                {text === 'ABOUT' ? (
                  openDropDown ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItem>
              {text === 'ABOUT' ? (
                <CollapseDropDown
                  openDropDown={openDropDown}
                  handleDrawerClose={handleDrawerClose}
                  handleClick={handleClick}
                />
              ) : null}
            </div>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  )
}

export default MobileViewDrawer
