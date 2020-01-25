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
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
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
        <link
          href='https://fonts.googleapis.com/css?family=Rubik&display=swap'
          rel='stylesheet'
        />
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
          CONTACT US
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
        <div className='text-center' className='w-auto m-0 max-w-full'>
          <Grid container justify='space-around' spacing={1} className='py-6'>
            <Grid item alignContent='center' md={4}>
              <div className='flex flex-wrap justify-center text-center'>
                <ContentBox className='mb-16'>
                  <form className={classes.form} onSubmit={handleSubmit}>
                    <InputField
                      required
                      label='Full Name'
                      autoComplete='name'
                      name='fullName'
                      {...fullName}
                    />
                    <InputField
                      required
                      label='Contact No.'
                      type='tel'
                      name='contact'
                      {...contact}
                    />
                    <InputField
                      required
                      label='Email ID'
                      type='email'
                      name='email'
                      {...email}
                    />
                    <InputField
                      required
                      label='Institution'
                      name='institute'
                      {...subject}
                    />
                    <InputField
                      required
                      label='Message'
                      name='message'
                      multiline
                      {...message}
                    />
                    <div className='mt-6 text-center'>
                      {loading ? (
                        <CircularProgress />
                      ) : (
                        <Button
                          type='submit'
                          color='primary'
                          variant='contained'
                          size='large'
                        >
                          Submit
                        </Button>
                      )}
                      <div>
                        {error ? (
                          <Typography variant='h6' component='p' color='error'>
                            Cannot submit form. Please refresh the page and try
                            again.
                          </Typography>
                        ) : null}
                      </div>
                    </div>
                  </form>
                </ContentBox>
              </div>
            </Grid>
            <Grid item alignContent='center' md={4}>
              <div className='flex flex-wrap justify-center text-center'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227908.73069868487!2d75.6670073777921!3d26.805774924086492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9f559acdd37%3A0xe17d9d15540b196b!2sJaipur%20Engineering%20College%20And%20Research%20Centre!5e0!3m2!1sen!2sin!4v1579793971191!5m2!1sen!2sin'
                  frameborder='0'
                  allowfullscreen=''
                  className='xs:w-12 md:w-full rounded-lg'
                  style={{
                    height: '525px',
                    boxShadow:
                      '10px 20px 38px rgba(0, 0, 0, 0.3), 5px 15px 12px rgba(0, 0, 0, 0.22)',
                  }}
                ></iframe>
              </div>
            </Grid>
          </Grid>
        </div>
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
