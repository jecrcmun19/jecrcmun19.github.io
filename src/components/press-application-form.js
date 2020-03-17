import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ContentBox from './content-box'
import InputField from './input-field'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import classnames from 'classnames'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Grid from '@material-ui/core/Grid'
import FormCompleted from './form-completed'
import Fade from 'react-reveal/Fade'

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
  feesText: {
    fontWeight: '500',
  },
  radio: {
    root: {
      color: theme.palette.primary.main,
      '&$checked': {
        color: theme.palette.primary.main,
      },
    },
    checked: {},
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
  },
}))

const useRadioStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    '&$checked': {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
}))

export default function PressApplicationForm() {
  const radioClasses = useRadioStyles()
  const classes = useStyles()
  const fullName = useForm('')
  const email = useForm('')
  const contact = useForm('')
  const institute = useForm('')
  const expMun = useForm('')
  const expOC = useForm('')
  const expIP = useForm('')
  const otherinfo = useForm('')
  const referral = useForm('')
  const accommodation = useForm('no')
  const secPref = useForm('')
  const firPref = useForm('')
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
    <Grid
      className={classnames([
        'flex flex-col justify-center items-center',
        classes.container,
      ])}
    >
      <Fade bottom>
        <ContentBox className={classnames(['my-16', classes.content])}>
          <div>
            <Typography variant='body1' component='p' paragraph>
              Conference Date : 11th - 12th April 2020
            </Typography>
            <Typography variant='body1' component='p' paragraph>
              Apply As:
            </Typography>
            <ol className='ml-4 list-decimal'>
              <li>
                <Typography variant='body1' component='p' paragraph>
                  Journalist
                </Typography>
              </li>
              <li>
                <Typography variant='body1' component='p' paragraph>
                  Artist(Caricaturist)
                </Typography>
              </li>
              <li>
                <Typography variant='body1' component='p' paragraph>
                  Photographer
                </Typography>
              </li>
            </ol>
            <Typography
              variant='body1'
              className={classes.feesText}
              component='p'
              paragraph
            >
              Application Fees: 1000 /-
            </Typography>
            <Typography variant='subtitle2' component='p' paragraph>
              Accommodation Fees (If needed): 800 /-
            </Typography>
          </div>
        </ContentBox>
      </Fade>
      {completed ? (
        <FormCompleted />
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

              <InputField
                required
                label='Contact No.'
                type='tel'
                name='contact'
                {...contact}
              />
              <InputField
                required
                label='Previous MUN Experience(If any)'
                name='expMun'
                multiline
                rowsMax={6}
                {...expMun}
                InputLabelProps={{
                  classes: {
                    root: classes.smallLabel,
                  },
                }}
              />
              <InputField
                label='Previous OC Experience(If any)'
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
                label='Previous IP Experience(If any)'
                name='expIP'
                multiline
                rowsMax={6}
                {...expIP}
              />
              <div className='mt-4'>
                <FormControl
                  component='fieldset'
                  fullWidth
                  required
                  margin='normal'
                >
                  <FormLabel component='legend'>1st Preference</FormLabel>
                  <RadioGroup name='1st preference' {...firPref}>
                    <FormControlLabel
                      value='Journalist'
                      control={
                        <Radio classes={radioClasses} name='1st preference' />
                      }
                      label='Journalist'
                    />
                    <FormControlLabel
                      value='Photographer'
                      control={
                        <Radio classes={radioClasses} name='1st preference' />
                      }
                      label='Photographer'
                    />
                    <FormControlLabel
                      value='Artist(Caricaturist)'
                      control={
                        <Radio classes={radioClasses} name='1st preference' />
                      }
                      label='Artist(Caricaturist)'
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className='mt-4'>
                <FormControl
                  component='fieldset'
                  fullWidth
                  required
                  margin='normal'
                >
                  <FormLabel component='legend'>2nd Preference</FormLabel>
                  <RadioGroup name='2nd preference' {...secPref}>
                    <FormControlLabel
                      value='Journalist'
                      control={
                        <Radio classes={radioClasses} name='2nd preference' />
                      }
                      label='Journalist'
                    />
                    <FormControlLabel
                      value='Photographer'
                      control={
                        <Radio classes={radioClasses} name='2nd preference' />
                      }
                      label='Photographer'
                    />
                    <FormControlLabel
                      value='Artist(Caricaturist)'
                      control={
                        <Radio classes={radioClasses} name='2nd preference' />
                      }
                      label='Artist(Caricaturist)'
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className='mt-4'>
                <FormControl
                  component='fieldset'
                  fullWidth
                  required
                  margin='normal'
                >
                  <FormLabel component='legend'>
                    Accommodation Needed?
                  </FormLabel>
                  <RadioGroup name='accommodation' {...accommodation}>
                    <FormControlLabel
                      value='Yes'
                      control={
                        <Radio classes={radioClasses} name='accommodation' />
                      }
                      label='Yes'
                    />
                    <FormControlLabel
                      value='No'
                      control={
                        <Radio classes={radioClasses} name='accommodation' />
                      }
                      label='No'
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <InputField
                required
                label='Referred By'
                name='referred'
                {...referral}
              />
              <InputField
                label='Anything you want us to know?'
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
