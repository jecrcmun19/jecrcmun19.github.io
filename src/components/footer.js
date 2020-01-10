import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  flex: {
    flexGrow: 1,
    marginBottom: '4vh',
    marginTop: '5vh',
  },
  footer: {
    position: 'absolute',
    textAlign: 'center',
    left: 0,
    bottom: 0,
    right: 0,
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  orange: {
    color: '#fff',
    backgroundColor: '#FF8E01',
  },
  paper: {
    backgroundColor: 'transparent',
  },
  footerDetails: {
    padding: 0,
    margin: 0,
  },
  borderLine: {
    borderTop: '#E9AB1A dashed 2px',
    width: '100%',
    paddingTop: 10,
    marginBottom: 10,
    marginTop: 10,
    alignContent: 'center',
  },
  alignFooter: {
    height: '110%',
    // alignItems: 'center',
    alignContent: 'center',
  },
  head: {
    marginTop: '5vh',
  },
  root: {
    marginLeft: '20vw',
  },
}))

const style = {
  backgroundImage:
    'linear-gradient(rgba(41, 24, 2, 0.85), rgba(41, 24, 2, 0.85)), url(/images/footer-bg.png)',
  height: '300px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}
function Footer(props) {
  const classes = useStyles()
  return (
    <Paper elevation={0} className={classes.footer} style={style}>
      <Grid
        container
        spacing={8}
        className={(classes.footerDetails, classes.alignFooter)}
      >
        <Grid container justify='center' spacing={0} className={classes.head}>
          <Grid item md={0} xs={0} lg={0} sm={0}>
            <img
              src='/images/munLogo.png'
              width='25px'
              style={{ paddingTop: '3px' }}
            ></img>
          </Grid>
          <Grid item md={2} xs={2} lg={2} sm={2}>
            <Typography style={{ color: 'white' }} variant='h5'>
              JECRC &nbsp; MUN &nbsp;2020
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify='center' className={classes.root} spacing={0}>
          <Grid item md={4} xs={12} lg={4} sm={12}>
            <Paper elevation={0} className={classes.paper}>
              <Grid item md={4} xs={12} lg={4} sm={4}>
                <Typography variant='h6' style={{ color: '#FF8E01' }}>
                  Address
                </Typography>
              </Grid>
              <Grid item md={4} xs={12} lg={4} sm={4}>
                <Typography variant='body2' style={{ color: 'white' }}>
                  Shri Ram Ki Nangal,
                </Typography>
              </Grid>
              <Grid item md={4} xs={12} lg={4} sm={4}>
                <Typography variant='body2' style={{ color: 'white' }}>
                  via Sitapura RIICO,
                </Typography>
              </Grid>
              <Grid item md={4} xs={12} lg={4} sm={4}>
                <Typography variant='body2' style={{ color: 'white' }}>
                  Tonk Road, Jaipur
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={4} xs={12} lg={4} sm={12}>
            <Paper elevation={0} className={classes.paper}>
              <Grid item md={4} xs={12} lg={4} sm={4}>
                <Typography variant='h6' style={{ color: '#FF8E01' }}>
                  Contacts
                </Typography>
              </Grid>
              <Grid item md={4} xs={12} lg={4} sm={4}>
                <Typography variant='body2' style={{ color: 'white' }}>
                  +91-999999999
                </Typography>
              </Grid>
              <Grid item md={4} xs={12} lg={4} sm={4}>
                <Typography variant='body2' style={{ color: 'white' }}>
                  jecrcmun@jecrc.ac.in
                </Typography>
              </Grid>
              <Grid item md={4} xs={12} lg={4} sm={4}>
                <Typography variant='body2'> </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Typography
          variant='caption'
          className={classes.flex}
          style={{ color: 'white' }}
        >
          <hr
            width='70%'
            style={{
              color: '#E9AB1A',
              backgroundColor: 'transparent',
              borderStyle: 'dashed',
              zIndex: 1200,
            }}
          />
          © Copyright
        </Typography>
        <Grid
          container
          justify='center'
          spacing={2}
          style={{ marginBottom: '0vw' }}
        >
          <Grid item md={0} xs={0} lg={0} sm={0}>
            <Avatar className={classes.orange}>
              <FacebookIcon />
            </Avatar>
          </Grid>
          <Grid item md={0} xs={0} lg={0} sm={0}>
            <Avatar className={classes.orange}>
              <InstagramIcon />
            </Avatar>
          </Grid>
          <Grid item md={0} xs={0} lg={0} sm={0}>
            <Avatar className={classes.orange}>
              <TwitterIcon />
            </Avatar>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Footer
