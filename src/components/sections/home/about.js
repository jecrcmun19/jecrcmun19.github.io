import React from 'react'
import { Button, Grid, Typography, useTheme } from '@material-ui/core'
import { Link } from 'gatsby'

export default () => {
  const theme = useTheme()
  return (
    <Grid
      container
      style={{ backgroundColor: theme.palette.background.pinkish }}
      className='py-20'
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
          JECRC MUN, being conducted from 2012, has now become a widely
          acclaimed Model United Nations platform. Over the years, it has
          developed itself as the ideal to strengthen the skills of diplomacy
          and leadership.
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
