import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'

export default () => {
  const theme = useTheme()
  return (
    <Grid
      container
      style={{
        backgroundColor: theme.palette.background.pinkish,
        minHeight: '100vh',
      }}
      className='py-20 h-full items-center'
    >
      <Grid item md={2} sm={0} xs={0} />
      <Grid item md={4} xs={12} className='p-5 text-center lg:text-left'>
        <Typography variant='subtitle1' className='italic'>
          About Us
        </Typography>
        <Typography variant='h4'>WELCOME TO JECRC MUN</Typography>
        <img
          src='/images/line.png'
          className='mx-auto lg:m-0'
          alt='---------------------'
        />
        <Typography className='text-center p-10 lg:text-left lg:pt-8 lg:pr-10 lg:pl-0'>
          JECRC MUN is an eight years old legacy established in 2012, making
          JECRC the first host of a MUN conference in Jaipur. Inaugurated by the
          eminent educationist Shri Kul Bhushan Kothari
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
      </Grid>
      <Grid item md={4} xs={12}>
        <img
          src='/images/image.png'
          className='mx-auto p-10 lg:mx-0 lg:px-10 lg:py-0'
          alt='JECRC MUN'
        />
      </Grid>
      <Grid item md={2} sm={0} xs={0} />
    </Grid>
  )
}
