import React, { useState } from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import {
  makeStyles,
  Typography,
  useTheme,
  Button,
  CircularProgress,
} from '@material-ui/core'
import sponsorsData from '../data/sponsors-data'
import Helmet from 'react-helmet'
import ContentBox from '../components/content-box'
import InputField from '../components/input-field'
import FormCompleted from '../components/form-completed'
// import GetAppIcon from '@material-ui/icons/GetApp'
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
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '700px',
  },
  smallLabel: {
    fontSize: '0.9rem',
  },
  // button: {
  //   width: 200,
  //   height: 65,
  //   backgroundColor: '#D90845',
  //   color: '#fff',
  // },
}))

function SponsorsForm() {
  const classes = useStyles()
  const organization = useForm('')
  const fullName = useForm('')
  const email = useForm('')
  const contact = useForm('')
  const alterContact = useForm('')
  const subject = useForm('')
  const body = useForm('')

  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    setLoading(true)
    fetch(
      'https://script.google.com/macros/s/AKfycbzkamvbxoXTmOqKlhgCEwpoTKT4Jmekz6_HEdYCKeMhoHepNPO8/exec',
      {
        method: 'POST',
        body: new FormData(form),
      },
    )
      .then(res => {
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
    <div>
      {completed ? (
        <FormCompleted />
      ) : (
        <ContentBox className='m-16'>
          <Typography variant='h6' style={{ color: '#D90845' }}>
            Become Our Sponsor
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <InputField
              required
              label='Name of the Organization'
              name='organizationName'
              {...organization}
            />
            <InputField
              required
              label='Full Name'
              autoComplete='name'
              name='fullName'
              {...fullName}
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
              label='Contact No.'
              type='tel'
              name='contact'
              {...contact}
            />
            <InputField
              required
              label='Alternative Contact No.'
              type='tel'
              name='alternateContact'
              {...alterContact}
            />
            <InputField
              required
              label='Subject'
              name='subject'
              rowsMax={6}
              {...subject}
              InputLabelProps={{
                classes: {
                  root: classes.smallLabel,
                },
              }}
            />
            <InputField
              label='Body'
              name='body'
              multiline
              rowsMax={6}
              {...body}
              InputLabelProps={{
                classes: {
                  root: classes.smallLabel,
                },
              }}
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
                    Cannot submit form. Please refresh the page and try again.
                  </Typography>
                ) : null}
              </div>
            </div>
          </form>
        </ContentBox>
      )}
    </div>
  )
}

function Sponsors(props) {
  const classes = useStyles(props)
  const theme = useTheme()
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

  return (
    <Wrapper>
      <Helmet>
        <title>Sponsors</title>
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
        <div className='py-5 flex flex-wrap justify-center'>
          {sponsorsData.map(sponsor => {
            return (
              <React.Fragment>
                <div className='m-8'>
                  <img
                    src={`/images/${sponsor}.png`}
                    alt={sponsor}
                    className={`bg-white h-32 w-64 p-5 ${classes.borderStyle}`}
                  />
                </div>
              </React.Fragment>
            )
          })}
        </div>
        {/* <div className='flex justify-center'>
          <Button variant='contained' className={classes.button}>
            <div className='flex justify-center'>
              <GetAppIcon />
            </div>
            <Typography>SPONSORSHIP BROCHURE</Typography>
          </Button>
        </div> */}
        <SponsorsForm />
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

export default Sponsors
