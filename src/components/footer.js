import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  footer: {
    position: 'absolute',
    textAlign: 'center',
    left: 0,
    bottom: 0,
    right: 0,
    overflowX: 'hidden',
    backgroundImage:
      'linear-gradient(rgba(41, 24, 2, 0.85), rgba(41, 24, 2, 0.85)), url(/images/footer-bg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
}))

function Footer(props) {
  const classes = useStyles()
  return (
    <Paper className={classes.footer}>
      <Grid container alignContent='center'>
        <Grid container justify='center' className='my-10'>
          <img src='/images/munLogo.png' width='25px' className='mr-5' />
          <Typography className='text-white' display='inline' variant='h5'>
            JECRC &nbsp; MUN &nbsp;2020
          </Typography>
        </Grid>
        <Grid container justify='center' spacing={0} className='text-white'>
          <Grid item md={2} sm={12} xs={12} />
          <Grid item md={4} sm={12} xs={12} className='py-5'>
            <Typography variant='h6' style={{ color: '#FF8E01' }}>
              Address
            </Typography>
            <Typography>Shri Ram Ki Nangal,</Typography>
            <Typography>via Sitapura RIICO,</Typography>
            <Typography>Tonk Road, Jaipur</Typography>
          </Grid>
          <Grid item md={4} sm={12} xs={12} className='py-5'>
            <Typography variant='h6' style={{ color: '#FF8E01' }}>
              Contacts
            </Typography>
            <Typography>+91-999999999</Typography>
            <Typography>jecrcmun@jecrc.ac.in</Typography>
          </Grid>
          <Grid item md={2} sm={12} xs={12} />
        </Grid>
        <Grid container justify='center' className='mb-4'>
          <Grid item xs={12}>
            <hr
              width='70%'
              className='inline-flex border-dashed'
              style={{ borderColor: '#FF8E01' }}
            />
          </Grid>
          <Typography className='text-center text-white pt-1'>
            © Copyright
          </Typography>
        </Grid>
        <Grid container justify='center'>
          <Avatar style={{ background: '#FF8E01' }} className='m-2'>
            <FacebookIcon />
          </Avatar>
          <Avatar style={{ background: '#FF8E01' }} className='m-2'>
            <InstagramIcon />
          </Avatar>
          <Avatar style={{ background: '#FF8E01' }} className='m-2'>
            <TwitterIcon />
          </Avatar>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Footer
