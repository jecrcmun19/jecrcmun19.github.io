import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ContentBox from './content-box'
import InputField from './input-field'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import classnames from 'classnames'
import FormCompleted from './form-completed'
import Fade from 'react-reveal/Fade'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    maxWidth: '700px',
  },
  content: {
    justifyContent: 'start',
  },
  smallLabel: {
    fontSize: '0.9rem',
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
  },
}))

export default function CampusAmbassadorForm() {
  const classes = useStyles()
  const fullName = useForm('')
  const email = useForm('')
  const contact = useForm('')
  const institute = useForm('')
  const expEB = useForm('')
  const expCA = useForm('')
  const expDelegate = useForm('')
  const expOC = useForm('')
  const benefits = useForm('')
  const otherinfo = useForm('')
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    setLoading(true)
    fetch(
      'https://script.google.com/macros/s/AKfycbyjwsELUWO8CvRWX7gySnKShZgTgWVrQCC7hx-D8t2gqXeKHj4/exec',
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
        setLoading(false)
        setError(true)
      })
  }
  return (
    <Grid
      className={classnames([
        'flex flex-col justify-center items-center',
        classes.container,
      ])}
    >
      <Fade bottom cascade>
        <ContentBox className={classnames(['my-16', classes.content])}>
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
      </Fade>
      {completed ? (
        <Fade bottom>
          <FormCompleted />
        </Fade>
      ) : (
        <Fade bottom>
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
                  Please mention the detailed MUN experience in the below
                  format: (Name of Conference/ Year /Committee /Position
                  /Awards(if any))
                </Typography>
              </div>
              <InputField
                required
                label='Campus Ambassador Experience'
                name='expCA'
                multiline
                rowsMax={6}
                {...expCA}
              />
              <InputField
                required
                label='Delegate Experience'
                name='expDelegate'
                multiline
                rowsMax={6}
                {...expDelegate}
              />
              <InputField
                required
                label='Executive Board Experience'
                name='expEB'
                multiline
                rowsMax={6}
                {...expEB}
                InputLabelProps={{
                  classes: {
                    root: classes.smallLabel,
                  },
                }}
              />
              <InputField
                required
                label='Organising Committee Experience'
                name='expOC'
                multiline
                rowsMax={6}
                {...expOC}
                InputLabelProps={{
                  classes: {
                    root: classes.smallLabel,
                  },
                }}
              />
              <InputField
                required
                label='How Do people benefit from MUN?'
                name='benefits'
                multiline
                rowsMax={6}
                {...benefits}
                InputLabelProps={{
                  classes: {
                    root: classes.smallLabel,
                  },
                }}
              />
              <InputField
                label='Anything you want to know?'
                name='otherinfo'
                multiline
                rowsMax={6}
                {...otherinfo}
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
        </Fade>
      )}
    </Grid>
  )
}

function useForm(initialValue) {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    setValue(e.target.value)
  }
  return { value, onChange: handleChange }
}
