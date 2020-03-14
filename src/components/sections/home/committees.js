import React from 'react'
import { CommitteesData } from '../../../data/committees-data'
import makeStyles from '@material-ui/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import classnames from 'classnames'
import Fade from 'react-reveal/Fade'

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    height: '300px',
    [theme.breakpoints.down('xs')]: {
      height: '250px',
    },
  },
  content: {
    width: '400px',
    margin: '3%',
    position: 'relative',
    overflowY: 'hidden',
    '&:hover > .layer': {
      opacity: 1,
      position: 'absolute',
      top: '0',
    },
    '&:hover > .text': {
      top: '25%',
    },
    [theme.breakpoints.down('lg')]: {
      width: '350px',
      margin: '2%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '300px',
      margin: '20px auto',
      '&:hover > .text': {
        top: '20%',
      },
    },
  },
  overlay: {
    background: 'rgba(217, 8, 69, 0.7)',
    position: 'absolute',
    left: 0,
    top: '70%',
    right: 0,
    bottom: 0,
    transition: 'all 0.4s ease-in-out 0s',
  },

  bottomText: {
    position: 'absolute',
    top: '80%',
    textAlign: 'center',
    color: '#FFF',
    width: '100%',
    paddingLeft: '1em',
    paddingRight: '1em',
    transition: 'all 0.4s ease-in-out 0s',
  },
  agenda: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3rem',
    },
  },
}))

function Committees() {
  const classes = useStyles()
  return (
    <div className='text-center py-10 sm:py-5'>
      <Fade bottom cascade>
        <Typography variant='h4' className='pt-5 text-white'>
          Committees
        </Typography>
        <img
          src='/images/line.png'
          className='mx-auto pb-5'
          alt='---------------------'
        />
      </Fade>
      <Grid container justify='center'>
        {CommitteesData.map(data => (
          <Grid key={data.title} item className={classes.content}>
            <img src={data.img} alt={data.img} className={classes.image} />

            <div className={classnames([classes.overlay, 'layer'])} />

            <div className={classnames([classes.bottomText, 'text'])}>
              <Typography variant='h4' className='pb-5'>
                {data.title}
              </Typography>
              <Typography className={classnames([classes.agenda, 'pb-5'])}>
                {data.agenda}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid container justify='center' className='mt-8'>
        <Grid item xl={2} lg={3} md={4} sm={5} xs={10} className='px-5 py-2'>
          <Button
            color='primary'
            variant='contained'
            component={Link}
            to='/committee'
            size='large'
            fullWidth
          >
            Committee Details
          </Button>
        </Grid>
        <Grid item xl={2} lg={3} md={4} sm={5} xs={10} className='px-5 py-2'>
          <Button
            color='primary'
            variant='contained'
            component={Link}
            to='/country-matrix'
            size='large'
            fullWidth
          >
            View Country Matrix
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Committees
