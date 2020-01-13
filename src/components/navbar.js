import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'

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
    backgroundColor: '#FF8E01',
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

  return (
    <Grid container justify='center'>
      <List className={classes.horizontalList}>
        {[
          'HOME',
          'ABOUT',
          'COMITTEES',
          'REGISTRATIONS',
          'BLOGS',
          'GALLERY',
          'CONTACT',
        ].map((text, index) => (
          <ListItem
            key={index}
            onMouseOver={text === 'ABOUT' ? e => handleOnMouse(text) : null}
          >
            <Typography className={classes.headerItems} variant='subtitle2'>
              {text}
            </Typography>
            {hoverText === text && mouseOver ? (
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={mouseOver}
                  className={classes.downBarList}
                >
                  <MenuItem
                    onClick={handleClose}
                    className={classes.downBarListItem}
                  >
                    JECRC MUN
                  </MenuItem>{' '}
                  <MenuItem
                    onClick={handleClose}
                    className={classes.downBarListItem}
                  >
                    EXECUTIVE BOARD
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className={classes.downBarListItem}
                  >
                    SECRETARIAT
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className={classes.downBarListItem}
                  >
                    OUR SPONSORS
                  </MenuItem>
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
