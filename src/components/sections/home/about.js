import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import makeStyles from '@material-ui/styles/makeStyles'
import classnames from 'classnames'
import Fade from 'react-reveal/Fade'

const useStyles = makeStyles(theme => ({
  bg: {
    backgroundColor: '#D90845',
    background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))`,
    minWidth: '300px',
    border: '2px solid #fff',
  },
  heading: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
  },
  content: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3rem',
    },
  },
  button: {
    marginTop: '10px',
  },
  image: {
    margin: '0 auto',
    width: '300px',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '400px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '500px',
    },
  },
}))

export default () => {
  const theme = useTheme()
  const classes = useStyles()
  const stats = [
    { count: '1700+', value: 'DELEGATES' },
    { count: '20+', value: 'INTERNATIONAL DELEGATES' },
    { count: '700+', value: 'PARTICIPATION INSTITUTES' },
    { count: '13 LAKH+', value: 'MASSIVE OUTREACH' },
  ]

  return (
    <>
      <Grid
        container
        style={{
          backgroundColor: theme.palette.background.pinkish,
        }}
        className='py-5 h-full'
        alignContent='center'
      >
        <Grid container justify='center' alignItems='center'>
          <Grid item md={6} xs={12} className='p-5 text-center lg:text-left'>
            <Fade bottom cascade>
              <Typography
                variant='subtitle1'
                className={classnames(['italic', classes.content])}
              >
                About Us
              </Typography>
              <Typography variant='h4' className={classes.heading}>
                WELCOME TO JECRC MUN
              </Typography>
              <img
                src='/images/line.png'
                className='mx-auto mb-10 lg:m-0'
                alt='---------------------'
              />
            </Fade>
            <Fade bottom cascade>
              <Typography
                className={classnames([
                  'text-center lg:text-justify lg:pt-8 lg:pr-10 lg:pl-0',
                  classes.content,
                ])}
              >
                JECRC MUN is an eight years old legacy established in 2012,
                making JECRC the first host of a MUN conference in Jaipur.
                Inaugurated by the eminent educationist Shri Kul Bhushan
                Kothari, JECRC MUN has spiraled out exponentially to achieve the
                pinnacle of growth. With the zealous efforts of extensive
                organizing committees over the 8 years of conducting MUN
                conferences, we have gained a lot of momentum inviting immense
                participation from across the country.
              </Typography>
              <Button
                type='submit'
                color='primary'
                className={classes.button}
                variant='contained'
                size='large'
                component={Link}
                to='/about'
              >
                READ MORE
              </Button>
            </Fade>
          </Grid>
          <Grid item md={4} xs={12}>
            <Fade bottom>
              <img
                src='/images/image.png'
                className='mx-auto p-10 lg:mx-0 lg:px-10 lg:py-0'
                alt='JECRC MUN'
              />
            </Fade>
          </Grid>
        </Grid>
        <Grid container justify='center' className='p-5 my-5'>
          {stats.map(stat => (
            <Grid
              item
              md={2}
              sm={0}
              xs={0}
              className={classnames([classes.bg, 'text-center py-5'])}
              key={stat.count}
            >
              <Fade bottom cascade>
                <Typography className='text-white' style={{ fontSize: '30px' }}>
                  {stat.count}
                </Typography>
                <Typography className='text-white' style={{ fontSize: '20px' }}>
                  {stat.value}
                </Typography>
              </Fade>
            </Grid>
          ))}
        </Grid>
        <Grid container justify='center' alignItems='center'>
          <Grid item md={4} xs={12}>
            <Fade bottom>
              <img
                src='/images/unic.png'
                className={classes.image}
                alt='JECRC MUN'
              />
            </Fade>
          </Grid>
          <Grid item md={6} xs={12} className='p-5 text-center lg:text-left'>
            <Fade bottom cascade>
              <Typography variant='h4' className={classes.heading}>
                COLLABORATION WITH UNIC
              </Typography>
              <img
                src='/images/line.png'
                className='mx-auto mb-10 lg:m-0'
                alt='---------------------'
              />
            </Fade>
            <Fade bottom cascade>
              <Typography
                className={classnames([
                  'text-center lg:text-justify lg:pt-8 lg:pr-10 lg:pl-0',
                  classes.content,
                ])}
              >
                JECRC MUN 2020 is now in collaboration with the United Nations
                Information Centre (UNIC) for India and Bhutan. The United
                Nations Information Centre for India and Bhutan is based in New
                Delhi, India and is one of 63 United Nations Information Centres
                established worldwide. The United Nations Information Centre for
                India and Bhutan performs an essential role in broadcasting and
                communicating information from the United Nations to India and
                Bhutan. It interprets the information in the regional languages
                of India including Hindi, Tamil, and Telugu to create
                communication easier and more convenient.
              </Typography>
              <Button
                type='submit'
                color='primary'
                className={classes.button}
                variant='contained'
                size='large'
                component={Link}
                to='/unic-collaboration'
              >
                READ MORE
              </Button>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
