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
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormCompleted from '../components/form-completed'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  formContainer: {
    maxWidth: '100%',
  },
  mapContainer: {
    minHeight: '400px',
    width: '90vw',
    marginTop: theme.spacing(3),
    border: `1px solid ${theme.palette.border.pinkish}`,
    boxShadow: theme.palette.boxShadow.content,
    borderRadius: '15px',
  },
  map: {
    height: '400px',
    width: '100%',
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
      'https://script.google.com/macros/s/AKfycbyNtYRjDE5kMuZSot2WDJ81ISK6qDZ5llid6ZuzFsQ03DhzjB1N/exec',
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
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'
          className='py-16'
        >
          <Grid item md={5} lg={4}>
            {completed ? (
              <FormCompleted className={classes.formContainer} />
            ) : (
              <ContentBox className={classes.formContainer}>
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
                    rowsMax={6}
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
            )}
          </Grid>
          <Grid item md={5} lg={4} className={classes.mapContainer}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.825855186854!2d75.81833451496024!3d26.7818204831841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc977c6898ab9%3A0x8010b7bf0b1f29c9!2sJECRC%20Foundation!5e0!3m2!1sen!2sin!4v1579948771763!5m2!1sen!2sin'
              frameborder='0'
              className={classes.map}
              allowfullscreen=''
            ></iframe>
          </Grid>
        </Grid>
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
