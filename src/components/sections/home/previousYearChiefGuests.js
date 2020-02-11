import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import guests from '../../../data/previous-year-cg-data'
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'
import Fade from 'react-reveal/Fade'

const useStyles = makeStyles(theme => ({
  imageBlock: {
    background: '#d90845',
    borderRadius: '12px 0px 0px 12px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '12px 12px 0px 0px',
    },
  },
  containerStyle: {
    '&:hover': {
      boxShadow: '0 0 5px #DDD',
    },
    borderRadius: '12px',
  },
  contentBlock: {
    background: 'rgb(255, 245, 248)',
    borderRadius: '0px 12px 12px 0px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0px 0px 12px 12px',
    },
  },
}))

const PreviousYearChiefGuest = () => {
  const classes = useStyles()
  return (
    <div>
      <Fade bottom cascade>
        <Typography className='text-white pt-10' variant='h4'>
          Our Previous Chief Guests
        </Typography>
        <img
          src='/images/line.png'
          className='mx-auto pb-10'
          alt='---------------------'
        />
      </Fade>
      {guests.map((guest, index) => (
        <Fade bottom>
          <Grid bottom>
            <Grid
              container
              key={index}
              className={classnames([
                'my-10',
                'mx-auto',
                classes.containerStyle,
              ])}
              lg={8}
              md={11}
              sm={9}
              xs={11}
            >
              <Grid
                id='imageDiv'
                container
                alignContent='center'
                className={classnames(['py-4', classes.imageBlock])}
                md={4}
                sm={12}
                lg={3}
              >
                <div className='w-full'>
                  <img
                    alt={guest.image}
                    src={`/images/${guest.image}.jpg`}
                    className='rounded-full w-32 h-32 m-auto bg-white'
                  />
                </div>
                <div className='text-center w-full mt-1'>
                  <Typography className='text-white px-2' variant='h6'>
                    {guest.name}
                  </Typography>
                </div>
              </Grid>
              <Grid item className={classes.contentBlock} md={8} lg={9} sm={12}>
                <div className='py-8 md:px-8 px-4 text-left text-justify'>
                  <Typography variant='subtitle1'>
                    {guest.description}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Fade>
      ))}
    </div>
  )
}

export default PreviousYearChiefGuest
