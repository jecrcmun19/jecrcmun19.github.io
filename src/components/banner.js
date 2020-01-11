import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const styles = {
  backgroundImage: `linear-gradient(rgba(41, 24, 2, 0.75), rgba(41, 24, 2, 0.75)), url(images/bg.png)`,
  height: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
}

const useStyles = makeStyles(theme => ({
  content: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  header: {
    display: 'table',
    width: '100%',
    zIndex: 1200,
  },
  munTextProperty: {
    color: '#FF8E01',
    fontWeight: 'bold',
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  diplomacyTextProperty: {
    color: '#fff',
    fontFamily: "'Rubik' , sans-serif",
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '28px',
  },
}))

function Banner(props) {
  const classes = useStyles()
  return (
    <div>
      <div style={styles} className={classes.header}>
        <div className={classes.content}>
          <div>
            <Typography className={classes.munTextProperty}>
              JECRC MUN 2020
            </Typography>
            <Typography className={classes.diplomacyTextProperty}>
              Deplomacy At It’s Zenith
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
