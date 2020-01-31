import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'

const useStyles = makeStyles(theme => ({
  headerItems: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: "'Rubik', sans-serif",
  },
  horizontalList: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    margin: 0,
  },
  listItem: {
    color: theme.palette.secondary.main,
  },
  downBarList: {
    position: 'absolute',
    top: 40,
    // border: 'solid #fff 0.5px',
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#D90845',
  },
  downBarListItem: {
    border: 'solid #fff 0.3px',
    // padding: 0,
    // margin: 0,
  },
}))

function NavBarWeb(props) {
  const classes = useStyles()
  const [mouseOver, setMouseOver] = React.useState(false)
  const [hoverText, setHoverText] = React.useState('')

  function handleOnMouse(text) {
    setMouseOver(true)
    setHoverText(text)
  }

  function handleClose() {
    setMouseOver(false)
  }

  const hoverListItems = {
    ABOUT: ['JECRC MUN', 'OUR SPONSORS'],
    REGISTRATIONS: [
      'PRIORITY DELEGATE',
      'CAMPUS AMBASSADOR',
      'INTERNATIONAL PRESS',
    ],
  }

  const hoverListLinks = {
    ABOUT: ['/about', '/sponsors'],
    REGISTRATIONS: [
      '/apply/delegate-priority-register',
      '/apply/campus-ambassador-application',
      '/apply/international-press-application',
    ],
  }

  return (
    <Grid container justify='center'>
      <List className={classes.horizontalList}>
        {[
          { name: 'HOME', link: '/' },
          { name: 'ABOUT', link: '#about' },
          { name: 'COMMITTEES', link: '/committees' },
          { name: 'REGISTRATIONS', link: '#registrations' },
          { name: 'BLOGS', link: '/' },
          { name: 'GALLERY', link: '/gallery' },
          { name: 'CONTACT', link: '/contact' },
        ].map((text, index) => (
          <ListItem
            key={index}
            onMouseLeave={handleClose}
            onMouseOver={
              ['ABOUT', 'REGISTRATIONS'].includes(text.name)
                ? e => handleOnMouse(text.name)
                : null
            }
          >
            <Typography
              component={Link}
              to={text.link}
              className={classes.headerItems}
              variant='subtitle2'
            >
              {text.name}
            </Typography>
            {hoverText === text.name && mouseOver ? (
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={mouseOver}
                  className={classes.downBarList}
                >
                  {hoverListItems[text.name].map((value, index) => (
                    <MenuItem
                      onClick={handleClose}
                      className={classes.downBarListItem}
                      component={Link}
                      to={hoverListLinks[text.name][index]}
                    >
                      {value}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            ) : null}
          </ListItem>
        ))}
      </List>
    </Grid>
  )
}

export default NavBarWeb
