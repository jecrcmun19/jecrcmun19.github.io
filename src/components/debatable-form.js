import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Typography, TextField } from '@material-ui/core'
import ContentBox from './content-box'
import InputField from './input-field'

import Radio from '@material-ui/core/Radio'
import Grid from '@material-ui/core/Grid'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import FormCompleted from './form-completed'
import Fade from 'react-reveal/Fade'
import classnames from 'classnames'

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    maxWidth: '700px',
  },
  content: {
    justifyContent: 'start',
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

export default function DebatableForm() {
  const classes = useStyles()
  const radioClasses = useRadioStyles()
  const fullName = useForm('')
  const email = useForm('')
  const contact = useForm('')
  const institute = useForm('')
  const classSemYear = useForm('')
  const stand = useForm('')
  const time = useForm('')
  const platform = useForm('')
  const queries = useForm('')
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    setLoading(true)
    fetch(
      'https://script.google.com/macros/s/AKfycbz_JnTw8tbJ07ZIaMXkAoTRcs6E6X8DknVyAhxHS4z4sTWO0Oc/exec',
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
              Drive away your Lockdown laziness, and get a space to share the
              thoughts quarantined in your mind these days with online debate!
            </Typography>
            <Typography variant='body1' component='p' paragraph>
              Date: 12 April 2020
            </Typography>
            <Typography variant='body1' component='p' paragraph>
              Topic: "CORONA VIRUS AS AN ACT OF GOD"
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
                label='Class/Semester/Year'
                name='classSemYear'
                {...classSemYear}
              />
              <InputField
                required
                label='Contact No.'
                type='tel'
                name='contact'
                {...contact}
              />

              <div className='mt-4'>
                <FormControl
                  component='fieldset'
                  fullWidth
                  required
                  margin='normal'
                >
                  <FormLabel component='legend'>
                    Stand With The Agenda
                  </FormLabel>
                  <RadioGroup name='stand' {...stand}>
                    <FormControlLabel
                      value='For'
                      control={<Radio classes={radioClasses} name='stand' />}
                      label='For'
                    />
                    <FormControlLabel
                      value='Against'
                      control={<Radio classes={radioClasses} name='stand' />}
                      label='Against'
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <InputField
                label='Your Preferred Time'
                name='time'
                type='time'
                defaultValue='09:00'
                {...time}
              />
              <InputField label='Platform' name='platform' {...platform} />
              <InputField
                label='Any Queries?'
                multiline
                rowsMax={6}
                name='queries'
                {...queries}
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
                    Register
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
