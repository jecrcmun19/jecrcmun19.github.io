import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  paper: {
    width: '80vw',
    height: '40vw',
  },
})

export default function VideoDialog(props) {
  const classes = useStyles(props)

  return (
    <Dialog
      PaperProps={{ square: true }}
      open={props.open}
      onClose={props.handleOpen}
      className={classes.root}
      fullWidth={true}
      maxWidth={false}
      classes={{
        paper: classes.paper,
      }}
    >
      <iframe
        width='100%'
        height='100%'
        title='JECRC MUN Video'
        src='https://www.youtube.com/embed/g1XSCfJFNJA'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen='allowfullscreen'
        mozallowfullscreen='mozallowfullscreen'
        msallowfullscreen='msallowfullscreen'
        oallowfullscreen='oallowfullscreen'
        webkitallowfullscreen='webkitallowfullscreen'
      />
    </Dialog>
  )
}
