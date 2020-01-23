import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, Card, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import theme from '../../../theme'
import { Link } from 'gatsby'

const useStyles = makeStyles({
  cardStyle: {
    borderRadius: 30,
    color: '#000929',
    maxWidth: '370px',
    height: '600px',
    boxShadow: 'none',
  },
  bg: {
    backgroundColor: '#000929',
  },
  btnstyle: {
    padding: 10,
    borderRadius: 10,
    border: 'solid 5px #D90845',
    color: '#fff',
    width: '150px',
  },
  ambassadorButtonStyle: {
    padding: 10,
    borderRadius: 10,
    marginTop: '62px',
    border: 'solid 5px #D90845',
    color: '#fff',
    width: '150px',
  },
  topStyle: {
    backgroundColor: theme.palette.primary.main,
    width: '400px',
    height: '100px',
    borderRadius: '50% / 100%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  bottomStyle: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: '0px',
    height: '19px',
    width: '100%',
    borderRadius: '6%',
    position: 'relative',
    bottom: '5px',
    marginTop: '73px',
  },
  imgStyle: {
    height: '200px',
    width: 'auto',
  },
})

function Apply(props) {
  const classes = useStyles(props)
  const theme = useTheme()
  const matches = useMediaQuery('(min-width:850px)')
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: matches ? 2 : 1,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
  }

  return (
    <div
      className='text-center p-8'
      style={{ backgroundColor: theme.palette.background.pinkish }}
    >
      <Slider {...settings}>
        <div>
          <Card
            raised={true}
            className={
              matches
                ? `float-right mx-8 self-center md:w-9/12 lg:w-7/12 xl:w-5/12 sm:w-4/6 xs:w-11/12 shadow-none  ${classes.cardStyle}`
                : `mx-auto self-center md:w-9/12 sm:w-9/12 xs:w-11/12 shadow-none ${classes.cardStyle}`
            }
          >
            <div
              className={`flex flex-wrap justify-center text-center ${classes.bg}`}
            >
              <div
                className={`p-0 m-0 flex flex-wrap w-full justify-center align-middle ${classes.topStyle}`}
              >
                <p className='p-0 m-6 mt-2 text-white text-xl font-extrabold self-center'>
                  DELEGATE REGISTRATION
                </p>
              </div>
              <div className='w-full flex flex-wrap justify-center m-4 p-4'>
                <img src='images/delegate.png' className={classes.imgStyle} />
              </div>
              <div className='w-full'>
                <Typography className='py-4 text-center text-white'>
                  Application Fees: 1400 /-
                </Typography>
              </div>
              <div className='text-center pt-2 pb-4'>
                <button className={classes.btnstyle}>
                  <Typography
                    component={Link}
                    to='/apply/delegate-priority-register'
                  >
                    Apply Now
                  </Typography>
                </button>
              </div>
              <div className={classes.bottomStyle}></div>
            </div>
          </Card>
        </div>
        <div className={classes.campassAmbassadorDiv}>
          <Card
            raised={true}
            className={
              matches
                ? `float-left mx-8 md:w-9/12 lg:w-7/12 xl:w-5/12 sm:w-4/6 xs:w-11/12 shadow-none ${classes.cardStyle}`
                : `mx-auto md:w-9/12 sm:w-9/12 xs:w-11/12 shadow-none ${classes.cardStyle}`
            }
          >
            <div
              className={`flex flex-wrap justify-center text-center ${classes.bg}`}
            >
              <div
                className={`p-0 m-0 flex flex-wrap w-full justify-center align-middle ${classes.topStyle}`}
              >
                <p className='p-0 m-8 mt-2 text-white text-xl font-extrabold self-center'>
                  CAMPUS AMBASSADOR
                </p>
              </div>
              <div className='w-full flex flex-wrap justify-center m-4 p-4'>
                <img src='images/ambassador.png' className={classes.imgStyle} />
              </div>
              <div className='text-center pt-2 pb-4'>
                <button className={classes.ambassadorButtonStyle}>
                  <Typography
                    component={Link}
                    to='/apply/campus-ambassador-application'
                  >
                    Apply Now
                  </Typography>
                </button>
              </div>
              <div className={classes.bottomStyle}></div>
            </div>
          </Card>
        </div>
      </Slider>
    </div>
  )
}

export default Apply
