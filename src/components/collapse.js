import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'gatsby'

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
    border: 'sold #fff 1px',
  },
}))
function CollapseDropDown(props) {
  const {
    openDropDown,
    handleDrawerClose,
    listOfItems,
    handleDropDownClose,
  } = props
  const classes = useStyles()
  return (
    <Collapse in={openDropDown} timeout='auto' unmountOnExit>
      {listOfItems.map((text, index) => {
        return (
          <List component='div' key={index} disablePadding>
            <ListItem
              button
              component={Link}
              to={text.to}
              onClick={e => {
                handleDrawerClose()
                handleDropDownClose()
              }}
              className={classes.nested}
            >
              <ListItemText primary={text.name} />
            </ListItem>
          </List>
        )
      })}
    </Collapse>
  )
}

export default CollapseDropDown
