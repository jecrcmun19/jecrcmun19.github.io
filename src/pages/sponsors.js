import React, { useState } from 'react'
import Wrapper from '../components/wrapper'
import InputField from '../components/input-field'
import Banner from '../components/banner'
import ContentBox from '../components/content-box'
import BackgroundImage from 'gatsby-background-image'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { makeStyles, Typography, Grid, useTheme } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    // fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  borderStyle: {
    border: '5px solid #D90845',
  },
  textStyle: {
    color: '#D90845',
    fontWeight: 'bolder',
  },
}))

function Contact(props) {
  const classes = useStyles(props)
  const theme = useTheme()
  const fullName = useForm('')
  const email = useForm('')
  const contact = useForm('')
  const subject = useForm('')
  const message = useForm('')
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState(false)
  const { image, bgImage } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bgImage: file(relativePath: { eq: "pages-background.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    setLoading(true)
    console.log(new FormData(form).entries())
    fetch(
      'https://script.google.com/macros/s/AKfycbz_JnTw8tbJ07ZIaMXkAoTRcs6E6X8DknVyAhxHS4z4sTWO0Oc/exec',
      {
        method: 'POST',
        body: new FormData(form),
      },
    )
      .then(res => {
        console.log(res)
        setLoading(false)
        setCompleted(true)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
        setError(true)
      })
  }

  return (
    <Wrapper>
      <Helmet>
        {/* <link
          href='https://fonts.googleapis.com/css?family=Rubik&display=swap'
          rel='stylesheet'
        /> */}
      </Helmet>
      <Banner
        backgrounds={[
          `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
          image.sharp.fluid,
        ]}
        height='50vh'
      >
        <Typography
          color='primary'
          component='h2'
          className={classes.munTextProperty}
        >
          OUR SPONSORS
        </Typography>
        <Typography className='text-white' variant='h5'>
          JECRC MUN 2020
        </Typography>
      </Banner>
      <BackgroundImage
        className='flex flex-col justify-center items-center'
        fluid={bgImage.sharp.fluid}
        durationFadeIn={50}
      >
        <Typography
          variant='h4'
          className={classes.textStyle}
          style={{ marginTop: '30px' }}
        >
          Year 2019
        </Typography>
        <div className='w-auto max-w-full py-6 flex flex-wrap justify-center'>
          {/* <Grid container justify='center' spacing={5} className='py-6'>
            <Grid item alignContent='center' md={4}> */}

          <div className='flex flex-wrap justify-center text-center m-12 mt-3'>
            <img
              src='/images/chill.png'
              className={`bg-white  h-32 w-64 p-5 ${classes.borderStyle}`}
            />
          </div>
          {/* </Grid> */}
          {/* <Grid item alignContent='center' md={4}> */}
          <div className='flex flex-wrap justify-center text-center m-12 mt-3'>
            <img
              src='/images/paytm.png'
              className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
            />
          </div>
          <div className='flex flex-wrap justify-center text-center m-12 mt-3'>
            <img
              src='/images/omg.png'
              className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
            />
          </div>
        </div>
        <Typography variant='h4' className={classes.textStyle}>
          Year 2018
        </Typography>
        <div className='w-auto max-w-full py-6 flex flex-wrap justify-center'>
          <div className='flex flex-wrap justify-center text-center m-12 mt-3'>
            <img
              src='/images/ip.png'
              className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
            />
          </div>

          <div className='flex flex-wrap justify-center text-center m-12 mt-3'>
            <img
              src='/images/gm.png'
              className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
            />
          </div>
          {/* </Grid>
            <Grid item alignContent='center' md={4}> */}
          <div className='flex flex-wrap justify-center text-center m-12 mt-3'>
            <img
              src='/images/stepout.png'
              className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
            />
          </div>
          <div className='flex flex-wrap justify-center text-center m-12 mt-3'>
            <img
              src='/images/omg.png'
              className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
            />
          </div>
          <div className='flex flex-wrap justify-center text-center m-12 mt-3'>
            <img
              src='/images/euonusit.png'
              className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
            />
          </div>
        </div>
        <Typography variant='h4' className={classes.textStyle}>
          Year 2017
        </Typography>
        <div className='w-auto max-w-full py-6 flex flex-wrap justify-center'>
          <div className='flex flex-wrap justify-center text-center m-12 mt-3'>
            <img
              src='/images/coolberg.png'
              className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
            />
          </div>
          {/* </Grid>
            <Grid item alignContent='center' md={4}> */}
          <div className='flex flex-wrap justify-center text-center m-12 mt-3'>
            <img
              src='/images/bisleri.png'
              className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
            />
          </div>
          {/* </Grid>
            <Grid item alignContent='center' md={4}> */}
          <div className='flex flex-wrap justify-center text-center m-12 mt-3'>
            <img
              src='/images/matrix.jpeg'
              className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
            />
          </div>
        </div>
        <Typography variant='h4' className={classes.textStyle}>
          Year 2016
        </Typography>
        <div className='w-auto max-w-full py-6 flex flex-wrap justify-center'>
          <div className='flex flex-wrap justify-center text-center m-12 mt-3'>
            <img
              src='/images/redbull.png'
              className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
            />
          </div>
          <div className='flex flex-wrap justify-center text-center m-12 mt-3'>
            <img
              src='/images/toko.png'
              className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
            />
          </div>
        </div>
        {/* </Grid>
          </Grid> */}
      </BackgroundImage>
    </Wrapper>
  )
}

function useForm(initialValue) {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    setValue(e.target.value)
  }
  return { value, onChange: handleChange }
}

export default Contact
