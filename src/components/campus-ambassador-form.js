import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import BackgroundImage from 'gatsby-background-image'
import Typography from '@material-ui/core/Typography'
import ContentBox from './content-box'
import InputField from './input-field'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Link from '@material-ui/core/Link'
import { Link as GatsbyLink } from 'gatsby'

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    maxWidth: '700px',
  },
}))

const FormCompleted = () => (
  <ContentBox className='mb-16'>
    <div>
      <Typography variant='h4' className='my-8' component='h1' paragraph>
        Thank You for Registration
      </Typography>
      <Typography variant='body1' component='p' paragraph>
        Our team will contact you for further information regarding event.
      </Typography>
      <Typography variant='body2' component='p'>
        For more queries, you can contact:
      </Typography>
      <div className='mt-4'>
        <Typography variant='subtitle2' component='p' paragraph>
          Porush Choudhary: <Link href='tel:9413900468'>9413900468</Link>
        </Typography>
      </div>
    </div>
  </ContentBox>
)
export default function CampusAmbassadorForm() {
  const classes = useStyles()
  const fullName = useForm('')
  const email = useForm('')
  const contact = useForm('')
  const institute = useForm('')
  const expDelegate = useForm('')
  const expEB = useForm('')
  const expCA = useForm('')
  const expOC = useForm('')
  const benefits = useForm('')
  const otherinfo = useForm('')
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState(false)

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "pages-background.png" }) {
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
      'https://script.google.com/macros/s/AKfycbyjwsELUWO8CvRWX7gySnKShZgTgWVrQCC7hx-D8t2gqXeKHj4/exec',
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
    <BackgroundImage
      className='flex flex-col justify-center items-center'
      fluid={image.sharp.fluid}
      durationFadeIn={50}
    >
      <ContentBox className='my-16'>
        <div>
          <Typography variant='body1' component='p' paragraph>
            Roles of our Campus Ambassador
          </Typography>
          <ol className='ml-4 list-decimal'>
            <li>
              <Typography variant='body1' component='p' paragraph>
                Promote JECRC MUN 2020 to your institution.
              </Typography>
            </li>
            <li>
              <Typography variant='body1' component='p' paragraph>
                Help facilitate registrations in your campus and others.
              </Typography>
            </li>
            <li>
              <Typography variant='body1' component='p' paragraph>
                Perform Weekly Tasks.
              </Typography>
            </li>
          </ol>
          <Typography variant='body1' component='p' paragraph>
            Benefits of being an Ambassador
          </Typography>
          {/* <ol className='ml-4 list-decimal'>
            <li>
              <Typography variant='body1' component='p' paragraph>
                A campus ambassador will be given a unique ambassador badge,
                special recognition certificate and felicitation at the end of
                the conference.
              </Typography>
            </li>
            <li>
              <Typography variant='body1' component='p' paragraph>
                Ambassadors are updated regularly on the changes and information
                regarding the conference.
              </Typography>
            </li>
            <li>
              <Typography variant='body1' component='p' paragraph>
                A direct line of communication and privilege of interacting
                personally with members of the Secretariat.
              </Typography>
            </li>
            <li>
              <Typography variant='body1' component='p' paragraph>
                Any suggestions or queries by Ambassadors regarding JECRC MUN
                2020 will be responded immediately by the Secretariat.
              </Typography>
            </li>
          </ol> */}
          <Typography>Will be declared soon....</Typography>
        </div>
      </ContentBox>
      {completed ? (
        <FormCompleted />
      ) : (
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
              {...institute}
            />
            <div className='mt-8 mb-3'>
              <Typography variant='h6' component='p'>
                Prior MUN Experience
              </Typography>
              <Typography variant='body1' component='p'>
                Please mention the detailed MUN experience in the below format:
                (Name of Conference/ Year /Committee /Position /Awards(if any))
              </Typography>
            </div>
            <InputField
              required
              label='Campus Ambassador Experience'
              name='expCA'
              {...expCA}
            />
            <InputField
              required
              label='Delegate Experience'
              name='expDelegate'
              {...expDelegate}
            />
            <InputField
              required
              label='Executive Board Experience'
              name='expEB'
              {...expEB}
            />
            <InputField
              required
              label='Organising Committee Experience'
              name='expOC'
              {...expOC}
            />
            <InputField
              required
              label='How Do people benefit from MUN?(max 100 Words)'
              name='benefits'
              {...benefits}
            />
            <InputField
              label='Anything you want to know?'
              name='otherinfo'
              {...otherinfo}
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
    </BackgroundImage>
  )
}

function useForm(initialValue) {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    setValue(e.target.value)
  }
  return { value, onChange: handleChange }
}
