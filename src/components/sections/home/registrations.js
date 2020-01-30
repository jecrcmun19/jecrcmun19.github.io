import React from 'react'
import classnames from 'classnames'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import theme from '../../../theme'
import { Link } from 'gatsby'

const useStyles = makeStyles({
  card: {
    backgroundColor: '#000929',
    maxWidth: '350px',
    width: '300px',
    borderBottom: '10px solid #d90845',
    borderRadius: '20px',
  },
  curve: {
    backgroundColor: theme.palette.primary.main,
    height: '100px',
    borderRadius: '50% / 100%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  imgStyle: {
    height: '150px',
    width: 'auto',
  },
  button: {
    border: '3px solid #d90845',
    color: 'white',
  },
})

function Registrations(props) {
  const classes = useStyles(props)
  const theme = useTheme()
  const data = [
    {
      title: 'Delegate Registrations',
      img: 'images/delegate.png',
      info: 'Application Fees: 1400 /-',
      btn: 'Apply Now',
      btnLink: '/apply/delegate-priority-register',
    },
    {
      title: 'Campus Ambassador',
      img: 'images/ambassador.png',
      btn: 'Apply Now',
      btnLink: '/apply/campus-ambassador-application',
    },
    {
      title: 'International Press',
      img: 'images/IPA.png',
      info: 'Application Fees: 1000 /-',
      btn: 'Apply Now',
      btnLink: '/apply/international-press-application',
    },
  ]

  return (
    <div
      className='text-center'
      style={{
        backgroundColor: theme.palette.background.pinkish,
        paddingTop: '80px',
        minHeight: '100vh',
      }}
    >
      <Typography variant='h4' className='p-5' color='primary'>
        REGISTRATIONS
      </Typography>
      <div className='flex flex-wrap justify-center'>
        {data.map(section => (
          <Card
            raised={true}
            className={classnames([
              'my-10 mx-10 justify-center text-center flex flex-col',
              classes.card,
            ])}
          >
            <div
              className={classnames(['m-0 flex justify-center', classes.curve])}
            >
              <Typography variant='h6' className='p-5 text-white'>
                {section.title}
              </Typography>
            </div>
            <img
              src={section.img}
              alt={section.title}
              className={classnames(['mx-auto my-10', classes.imgStyle])}
            />
            <div className='w-full my-5'>
              <Typography className='text-white'>
                {section.info ? section.info : null}
              </Typography>
            </div>
            <div className='mt-auto mb-10'>
              <Button
                variant='outlined'
                component={Link}
                to={section.btnLink}
                className={classes.button}
              >
                {section.btn}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Registrations
