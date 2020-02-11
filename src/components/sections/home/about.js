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
        className='pt-20 h-full'
        alignContent='center'
      >
        <Grid container>
          <Grid item md={2} sm={0} xs={0} />
          <Grid item md={4} xs={12} className='p-5 text-center lg:text-left'>
            <Fade bottom cascade>
              <Typography variant='subtitle1' className='italic'>
                About Us
              </Typography>
              <Typography variant='h4'>WELCOME TO JECRC MUN</Typography>
              <img
                src='/images/line.png'
                className='mx-auto lg:m-0'
                alt='---------------------'
              />
            </Fade>
            <Fade bottom cascade>
              <Typography className='text-center p-10 lg:text-left lg:pt-8 lg:pr-10 lg:pl-0'>
                JECRC MUN is an eight years old legacy established in 2012,
                making JECRC the first host of a MUN conference in Jaipur.
                Inaugurated by the eminent educationist Shri Kul Bhushan Kothari
              </Typography>
              <Button
                type='submit'
                color='primary'
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
          <Grid item md={2} sm={0} xs={0} />
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
      </Grid>
    </>
  )
}
