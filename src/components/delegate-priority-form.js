import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import BackgroundImage from 'gatsby-background-image'
import Typography from '@material-ui/core/Typography'
import ContentBox from './content-box'
import InputField from './input-field'
import classnames from 'classnames'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    maxWidth: '700px',
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
}))

const committees = ['GA-DISEC', 'UN-SC', 'AIPPM', 'WHA', 'UN-ODC', 'UN-CSW']

const useRadioStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    '&$checked': {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
}))

function CommitteePreference({ first, second, third }) {
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
              name='first'
              checked={first.value === name}
              classes={classes}
              value={name}
              onChange={first.onChange}
            />
          </div>
          <div className={radioWidth}>
            <Radio
              name='second'
              checked={second.value === name}
              classes={classes}
              value={name}
              onChange={second.onChange}
            />
          </div>
          <div className={radioWidth}>
            <Radio
              name='third'
              checked={third.value === name}
              classes={classes}
              value={name}
              onChange={third.onChange}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
export default function DelegatePriorityForm() {
  const classes = useStyles()
  const radioClasses = useRadioStyles()
  const fullName = useForm('')
  const email = useForm('')
  const contact = useForm('')
  const institute = useForm('')
  const classYear = useForm('')
  const expDelegate = useForm('')
  const expEB = useForm('')
  const expSec = useForm('')
  const expOther = useForm('')
  const prefFirst = useForm('')
  const prefSecond = useForm('')
  const prefThird = useForm('')
  const portFirst = useForm('')
  const portSecond = useForm('')
  const portThird = useForm('')
  const accommodation = useForm('no')
  const referral = useForm('')
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

  return (
    <BackgroundImage
      className='flex flex-col justify-center items-center'
      fluid={image.sharp.fluid}
      durationFadeIn={50}
    >
      <ContentBox className='my-16'>
        <div>
          <Typography variant='body1' component='p' paragraph>
            Register before day, Feb date, 2020 to gain priority for acceptance
            and maximize the chance of receiving your country preferences.
          </Typography>
          <Typography variant='body1' component='p' paragraph>
            Conference Date : 11th-12th April 2020
          </Typography>
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
                World Health Assembly (WHA)
              </Typography>
            </li>
          </ol>
        </div>
      </ContentBox>
      <ContentBox className='mb-16'>
        <form className={classes.form}>
          <InputField
            required
            label='Full Name'
            autoComplete='name'
            {...fullName}
          />
          <InputField required label='Contact No.' type='tel' {...contact} />
          <InputField required label='Email ID' type='email' {...email} />
          <InputField required label='Institution' {...institute} />
          <InputField required label='Class/Year' {...classYear} />
          <div className='mt-8 mb-3'>
            <Typography variant='h6' component='p'>
              Prior MUN Experience
            </Typography>
            <Typography variant='body1' component='p'>
              Please mention the detailed MUN experience in the below format:
              (Name of Conference/ Year /Committee /Position /Awards(if any))
            </Typography>
          </div>
          <InputField label='As a Delegate' {...expDelegate} />
          <InputField label='As a member of EB' {...expEB} />
          <InputField label='As a member of Secretariat' {...expSec} />
          <InputField label='Any other experience' {...expOther} />
          <div className='mt-8 mb-3'>
            <Typography variant='h6' component='p'>
              Committee Preferences
            </Typography>
          </div>
          <CommitteePreference
            first={prefFirst}
            second={prefSecond}
            third={prefThird}
          />
          <InputField
            required
            label='Country/Portfolio Preference 1'
            {...portFirst}
          />
          <InputField
            required
            label='Country/Portfolio Preference 2'
            {...portSecond}
          />
          <InputField
            required
            label='Country/Portfolio Preference 3'
            {...portThird}
          />
          <div className='mt-4'>
            <FormControl
              component='fieldset'
              fullWidth
              required
              margin='normal'
            >
              <FormLabel component='legend'>
                Do You require accommodation ?
              </FormLabel>
              <RadioGroup name='accommodation' {...accommodation}>
                <FormControlLabel
                  value='yes'
                  control={<Radio classes={radioClasses} />}
                  label='yes'
                />
                <FormControlLabel
                  value='no'
                  control={<Radio classes={radioClasses} />}
                  label='no'
                />
              </RadioGroup>
            </FormControl>
          </div>
          <InputField required label='Referred By' {...referral} />
          <div className='mt-6 text-center'>
            <Button
              type='submit'
              color='primary'
              variant='contained'
              size='large'
            >
              Register
            </Button>
          </div>
        </form>
      </ContentBox>
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
