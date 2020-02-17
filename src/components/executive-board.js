import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import ContentBox from './content-box'
import InputField from './input-field'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import classnames from 'classnames'
import FormCompleted from './form-completed'
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal/Fade'

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

const committees = [
  'GA-DISEC',
  'UN-SC',
  'AIPPM',
  'WHO',
  'UN-ODC',
  'UN-CSW',
  'IP',
]

const useRadioStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    '&$checked': {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
}))

function CommitteePreference({ first, second, third, onChange }) {
  const classes = useRadioStyles()
  const matches = useMediaQuery('(max-width: 480px)')
  const radioWidth = matches ? 'w-12' : 'w-20'
  return (
    <div>
      <div className='flex justify-end'>
        <div className={radioWidth}>
          <Typography variant='h6' component='p'>
            1st
          </Typography>
        </div>
        <div className={radioWidth}>
          <Typography variant='h6' component='p'>
            2nd
          </Typography>
        </div>
        <div className={radioWidth}>
          <Typography variant='h6' component='p'>
            3rd
          </Typography>
        </div>
      </div>
      {committees.map(name => (
        <div className='flex justify-end items-center'>
          <div className='mr-auto'>
            <Typography variant='subtitle1' component='p'>
              {name}
            </Typography>
          </div>
          <div className={radioWidth}>
            <Radio
              checked={first === name}
              name='firstPref'
              classes={classes}
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className={radioWidth}>
            <Radio
              checked={second === name}
              name='secondPref'
              classes={classes}
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className={radioWidth}>
            <Radio
              checked={third === name}
              name='thirdPref'
              classes={classes}
              value={name}
              onChange={onChange}
              required
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ExecutiveBoard() {
  const classes = useStyles()
  const radioClasses = useRadioStyles()
  const fullName = useForm('')
  const email = useForm('')
  const contact = useForm('')
  const altContact = useForm('')
  const institute = useForm('')
  const designation = useForm('')
  const cv = useForm('')
  const [prefFirst, setPrefFirst] = useState('')
  const [prefSecond, setPrefSecond] = useState('')
  const [prefThird, setPrefThird] = useState('')
  const accommodation = useForm('no')
  const remarks = useForm('')
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState(false)

  const handleRadioChange = e => {
    const { name, value } = e.target
    if (name === 'firstPref') {
      if (prefSecond === value) {
        setPrefSecond('')
      }
      if (prefThird === value) {
        setPrefThird('')
      }
      setPrefFirst(value)
    } else if (name === 'secondPref') {
      if (prefFirst === value) {
        setPrefFirst('')
      }
      if (prefThird === value) {
        setPrefThird('')
      }
      setPrefSecond(value)
    } else if (name === 'thirdPref') {
      if (prefFirst === value) {
        setPrefFirst('')
      }
      if (prefSecond === value) {
        setPrefSecond('')
      }
      setPrefThird(value)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    setLoading(true)
    fetch(
      'https://script.google.com/a/jecrc.ac.in/macros/s/AKfycbwSM6_U5O8ASXdonj2Ky0W1P6Tq9_5Vn8ImyqyB/exec',
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
              Committees to be simulated this year are :
            </Typography>
            <ol className='ml-4 list-decimal'>
              <li>
                <Typography variant='body1' component='p' paragraph>
                  United Nations General Assembly-DISEC (GA-DISEC)
                </Typography>
              </li>
              <li>
                <Typography variant='body1' component='p' paragraph>
                  United Nations Office on Drugs and Crimes (UN-ODC)
                </Typography>
              </li>
              <li>
                <Typography variant='body1' component='p' paragraph>
                  All India Political Parties Meet (AIPPM)
                </Typography>
              </li>
              <li>
                <Typography variant='body1' component='p' paragraph>
                  United Nations Commission on the Status of Women (CSW)
                </Typography>
              </li>
              <li>
                <Typography variant='body1' component='p' paragraph>
                  United Nations- Security Council (UN-SC)
                </Typography>
              </li>
              <li>
                <Typography variant='body1' component='p' paragraph>
                  World Health Organization (WHO)
                </Typography>
              </li>
              <li>
                <Typography variant='body1' component='p' paragraph>
                  International Press (IP)
                </Typography>
              </li>
            </ol>
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
                label='Contact No.'
                type='tel'
                name='contact'
                {...contact}
              />
              <InputField
                label='Alternate Contact No.'
                type='tel'
                name='altContact'
                {...altContact}
              />
              <InputField
                required
                label='Where are you study/working?'
                name='institute'
                {...institute}
              />
              <InputField
                required
                label='Preferred Designation'
                name='designation'
                {...designation}
              />
              <InputField
                required
                type='url'
                label='Your CV Link'
                name='cv'
                {...cv}
              />
              <div className='mt-8 mb-3'>
                <Typography variant='h6' component='p'>
                  Committee Preferences
                </Typography>
              </div>
              <CommitteePreference
                first={prefFirst}
                second={prefSecond}
                third={prefThird}
                onChange={handleRadioChange}
              />
              <div className='mt-4'>
                <FormControl
                  component='fieldset'
                  fullWidth
                  required
                  margin='normal'
                >
                  <FormLabel component='legend'>
                    Do you require accommodation ?
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
                label='Anything you would like us to know?'
                name='remarks'
                multiline
                rowsMax={6}
                {...remarks}
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
                    Apply
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
