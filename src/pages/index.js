import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import Helmet from 'react-helmet'
import { Grid, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  readmore: {
    background: '#D90845',
    borderRadius: '5px',
    color: '#ffffff',
    width: '135px',
    height: '27px',
    marginTop: '2rem',
  },
}))
function Home() {
  const classes = useStyles()
  return (
    <Wrapper>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css?family=Rubik&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <Banner />
      <div className='p-20' style={{ backgroundColor: '#FFF5F8' }}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} style={{ padding: '5rem' }}>
            <Typography variant='subtitle1' className='italic'>
              About Us
            </Typography>
            <Typography variant='h6'>WELCOME TO JECRC MUN</Typography>
            <div>
              <img src='/images/line.png'></img>
            </div>
            <Typography className='pt-8'>
              JECRC MUN, being conducted from 2012, has now become a widely
              acclaimed Model United Nations platform. Over the years, it has
              developed itself as the ideal to strengthen the skills of
              diplomacy and leadership.
            </Typography>
            <button className={`flex justify-center ${classes.readmore}`}>
              Read More
            </button>
          </Grid>
          <Grid item md={6} xs={12}>
            <div>
              <img src='/images/image.png'></img>
            </div>
          </Grid>
        </Grid>
      </div>
    </Wrapper>
  )
}
export default Home
