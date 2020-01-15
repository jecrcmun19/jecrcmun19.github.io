import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'gatsby'

const useStyles = makeStyles(theme => ({
  nested: {
    color: '#999',
    paddingLeft: theme.spacing(4),
  },
}))
function CollapseDropDown(props) {
  const { openDropDown, handleDrawerClose, handleClick } = props
  const classes = useStyles()
  return (
    <Collapse in={openDropDown} timeout='auto' unmountOnExit>
      {['JECRC MUN', 'EXECUTIVE BOARD', 'SECRETARIAT', 'OUR SPONSORS'].map(
        (text, index) => (
          <List component='div' disablePadding key={index}>
            <ListItem
              button
              component={Link}
              to='/about'
              onClick={e => {
                handleDrawerClose()
                handleClick()
              }}
              className={classes.nested}
            >
              <ListItemText primary={text} />
            </ListItem>
          </List>
        ),
      )}
    </Collapse>
  )
}

export default CollapseDropDown
