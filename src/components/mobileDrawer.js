import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import CloseSharp from '@material-ui/icons/CloseSharp'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CollapseDropDown from './collapse'
import { Link } from 'gatsby'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignContent: 'center',
  },
  headerItems: {
    fontFamily: "'Rubik', sans-serif",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: 'auto',
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.main,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
  },
  close: {
    color: theme.palette.primary.main,
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
          <IconButton onClick={handleDrawerClose} className={classes.close}>
            <CloseSharp className={classes.close} />
          </IconButton>
        </div>
        <Divider />
        <List className={classes.headerItems}>
          {[
            { name: 'HOME', link: '/' },
            { name: 'ABOUT', link: '/about' },
            { name: 'COMMITTEES', link: '/' },
            {
              name: 'REGISTRATIONS',
              link: '/apply/delegate-priority-register',
            },
            { name: 'BLOGS', link: '/' },
            { name: 'GALLERY', link: '/' },
            { name: 'CONTACT', link: '/' },
          ].map((text, index) => (
            <div key={index}>
              <ListItem
                button
                component={Link}
                to={text.link}
                onClick={() => (text === 'ABOUT' ? handleClick() : null)}
              >
                <ListItemText primary={text.name} />
                {/* {text.name === 'ABOUT' ? (
                  openDropDown ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null} */}
              </ListItem>
              {text.name === 'ABOUT' ? (
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
