import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'
import Fade from 'react-reveal/Fade'
import { useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  layer: {
    backgroundColor: 'rgba(217, 8, 69, 0.7)',
    position: 'relative',
    paddingTop: '20px',
    bottom: 0,
  },
  content: {
    color: '#fff',
    lineHeight: '30px',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2rem',
    },
  },
}))

const OurChiefGuest = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <div>
      <Fade bottom cascade>
        <Typography className='text-white pt-10' variant='h4'>
          Our Chief Guests
        </Typography>
        <img
          src='/images/line.png'
          className='mx-auto pb-10'
          alt='---------------------'
        />
      </Fade>
      <Grid container className='h-full' alignContent='center'>
        <Grid container justify='center'>
          <Grid item md={4} xs={12}>
            <Fade bottom>
              <div className={classnames(['text-center mx-auto'])}>
                <img
                  src='images/SanjayJha.png'
                  className='w-56 h-full mt-12 mx-auto lg:m-0'
                />
                <div className={classnames(['w-56', classes.layer])}>
                  <Typography variant='h5' className='text-white'>
                    Sanjay Jha
                  </Typography>
                  <Typography variant='subtitle1' className='text-white'>
                    National Spokesman INC
                  </Typography>
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item md={6} xs={12}>
            <Fade bottom cascade>
              <Typography
                className={classnames([
                  'text-center p-10 text-justify lg:pt-8 lg:pr-10 lg:pl-0',
                  classes.content,
                ])}
              >
                Sanjay Jha is the National Spokesperson of INC since 2013, and
                also the President of All India Professionals Congress,
                Maharashtra. He has addressed numerous gatherings at world-class
                business schools and MNCs as a TEDx Speaker, also regularly
                contributing to social media and internationally acclaimed
                newspapers. Jha founded CricketNext. com and has also held
                senior positions at various reputed investment and banking
                firms. Coming as an MBA graduate from XLRI, Jamshedpur, he holds
                graduation and PG degrees in Economics from Fergusson College
                and Gokhale Institute of Politics and Economics respectively.
                Jha has also co-authored a leadership bestseller, The Superstar
                Syndrome.
              </Typography>
              <Button
                type='submit'
                color='primary'
                variant='contained'
                size='large'
                component={Link}
                to='/prevChiefGuest'
              >
                Our Previous Year Cheif Guests
              </Button>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default OurChiefGuest
