import React from 'react'
import {
  makeStyles,
  Collapse,
  ListItem,
  List,
  ListItemText,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
    border: 'sold #fff 1px',
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
