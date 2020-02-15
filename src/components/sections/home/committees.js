import React from 'react'
import { CommitteesData } from '../../../data/committees-data'
import makeStyles from '@material-ui/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import Fade from 'react-reveal/Fade'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
  content: {
    position: 'relative',
    width: '90%',
    maxWidth: '450px',
    margin: 'auto',
    overflow: 'hidden',
    '&:hover > .layer': {
      opacity: 1,
      width: '100%',
      height: '100%',

      position: 'absolute',
      top: '0%',

      zIndex: '1000',
    },

    '&:hover > .blogImage': {
      top: '50%',
      left: '50%',
      opacity: 1,
    },

    '&:hover > .text': {
      top: '20%',
    },
  },
  overlay: {
    background: 'rgba(217, 8, 69, 0.7)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: '60%',
    right: 0,
    bottom: 0,
    opacity: 1,
    transition: 'all 0.4s ease-in-out 0s',
  },

  bottomText: {
    position: 'absolute',
    textAlign: 'center',
    color: '#FFF',
    width: '100%',
    paddingLeft: '1em',
    paddingight: '1em',
    top: '75%',

    transition: 'all 0.4s ease-in-out 0s',
    zIndex: 1000,
  },
}))

function Committees() {
  const classes = useStyles()
  return (
    <div className='text-center py-10 sm:py-5'>
      <Fade bottom cascade>
        <Typography variant='h4' className='pt-5 text-white'>
          Communities
        </Typography>
        <img
          src='/images/line.png'
          className='mx-auto pb-5'
          alt='---------------------'
        />
      </Fade>
      <Grid container justify='center'>
        {CommitteesData.map(data => (
          <Grid
            item
            md={4}
            key={data.title}
            className='w-full p-5 md:p-10 h-64 mx-12'
          >
            <div className={classes.content}>
              <div className={classnames([classes.overlay, 'layer'])}></div>
              <img src={data.img} className='w-full blogImage h-56' />

              <div className={classnames([classes.bottomText, 'text'])}>
                <Typography variant='h4' className='text-white pb-5 sm:text-xs'>
                  {data.title}
                </Typography>

                <Typography className='text-white pb-5'>
                  {data.agenda}
                </Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid container justify='center' className='mt-8'>
        <Grid item md={3} xs={12} className='p-2 md:p-5 w-64'>
          <Button
            color='primary'
            variant='contained'
            component={Link}
            to='/committee-matrix'
          >
            View CommitteeMatrix
          </Button>
        </Grid>
        <Grid item md={3} xs={12} className='p-2 md:p-5 w-64'>
          <Button
            color='primary'
            variant='contained'
            component={Link}
            to='/country-matrix'
          >
            View CountryMatrix
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Committees
