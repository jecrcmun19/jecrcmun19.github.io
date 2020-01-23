import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, Card, Typography } from '@material-ui/core'
import theme from '../../../theme'

const useStyles = makeStyles({
  cardStyle: {
    borderRadius: 30,
    color: '#000929',
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
    top: '5px',
  },
  imgStyle: {
    height: '200px',
    width: 'auto',
  },
})

function Apply(props) {
  const classes = useStyles(props)
  const theme = useTheme()
  return (
    <div className='text-center' className='w-auto m-0 max-w-full'>
      <Grid
        container
        justify='center'
        spacing={2}
        style={{ backgroundColor: theme.palette.background.pinkish }}
        className='py-6'
      >
        <Grid item alignContent='center' className='w-1/4'>
          <Card raised='true' className={`m-4 ${classes.cardStyle}`}>
            <div
              className={`flex flex-wrap justify-center text-center ${classes.bg}`}
            >
              <div
                className={`p-0 m-0 flex flex-wrap w-full justify-center align-middle ${classes.topStyle}`}
              >
                <p className='p-0 text-white text-xl font-extrabold self-center'>
                  DELEGATE REGISTRATION
                </p>
              </div>
              <div className='w-full flex flex-wrap justify-center m-4 p-4'>
                <img src='images/delegate.png' className={classes.imgStyle} />
              </div>
              <div class='w-full'>
                <Typography className='py-4 text-center text-white'>
                  Application Fees: 1400 /-
                </Typography>
              </div>
              <div className='text-center pt-2 pb-4'>
                <button className={classes.btnstyle}>Apply Now</button>
              </div>
              <div className={classes.bottomStyle}></div>
            </div>
          </Card>
        </Grid>
        <Grid item alignContent='center' className='w-1/4'>
          <Card raised='true' className={`m-4 ${classes.cardStyle}`}>
            <div
              className={`flex flex-wrap justify-center text-center ${classes.bg}`}
            >
              <div
                className={`p-0 m-0 flex flex-wrap w-full justify-center align-middle ${classes.topStyle}`}
              >
                <p className='p-0 text-white text-xl font-extrabold self-center'>
                  CAMPUS AMBASSADOR
                </p>
              </div>
              <div className='w-full flex flex-wrap justify-center m-4 p-4'>
                <img src='images/ambassador.png' className={classes.imgStyle} />
              </div>
              <div class='w-full'>
                <Typography className='py-4 text-center text-white'>
                  Application Fees: 1400 /-
                </Typography>
              </div>
              <div className='text-center pt-2 pb-4'>
                <button className={classes.btnstyle}>Apply Now</button>
              </div>
              <div className={classes.bottomStyle}></div>
            </div>
          </Card>
        </Grid>
        <Grid item alignContent='center' className='w-1/4'>
          <Card raised='true' className={`m-4 ${classes.cardStyle}`}>
            <div
              className={`flex flex-wrap justify-center text-center ${classes.bg}`}
            >
              <div
                className={`p-0 m-0 flex flex-wrap w-full justify-center align-middle ${classes.topStyle}`}
              >
                <p className='p-0 text-white text-xl font-extrabold self-center'>
                  INTERNATIONAL PRESS APPLICATION
                </p>
              </div>
              <div className='w-full flex flex-wrap justify-center m-4 p-4'>
                <img src='images/IPA.png' className={classes.imgStyle} />
              </div>
              <div class='w-full'>
                <Typography className='py-4 text-center text-white'>
                  Application Fees: 1000 /-
                </Typography>
              </div>
              <div className='text-center pt-2 pb-4'>
                <button className={classes.btnstyle}>Apply Now</button>
              </div>
              <div className={classes.bottomStyle}></div>
            </div>
          </Card>
        </Grid>
        <Grid item alignContent='center' className='w-1/4'>
          <Card raised='true' className={`m-4 h ${classes.cardStyle}`}>
            <div
              className={`flex flex-wrap justify-center text-center ${classes.bg}`}
            >
              <div
                className={`p-0 m-0 flex flex-wrap w-full justify-center align-middle ${classes.topStyle}`}
              >
                <p className='p-0 text-white text-xl font-extrabold self-center'>
                  EXECUTIVE BOARD MEMBER
                </p>
              </div>
              <div className='w-full flex flex-wrap justify-center m-4 p-4'>
                <img src='images/EBM.png' className={classes.imgStyle} />
              </div>
              <div class='w-full'>
                <Typography className='py-4 text-white text-center'>
                  Application Fees: 1400 /-
                </Typography>
              </div>
              <div className='text-center pt-2 pb-4'>
                <button className={classes.btnstyle}>Apply Now</button>
              </div>
              <div className={classes.bottomStyle}></div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Apply
