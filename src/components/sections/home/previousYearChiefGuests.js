import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import guests from '../../../data/previous-year-cg-data'
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'

const useStyles = makeStyles(theme => ({
  imageBlock: {
    background: '#d90845',
    borderRadius: '12px 0px 0px 12px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '12px 12px 0px 0px',
    },
  },
  containerStyle: {
    boxShadow: '0 0 5px #DDD',
    borderRadius: '12px',
  },
  contentBlock: {
    background: '#FFF',
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
      <Typography className='text-white py-10' variant='h4'>
        OUR PREVIOUS CHIEF GUESTS
      </Typography>
      {guests.map((guest, index) => (
        <Grid
          container
          key={index}
          className={classnames(['my-10', 'mx-auto', classes.containerStyle])}
          xl={8}
          lg={10}
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
              {/* <Typography variant='subtitle1' className='text-white w-full'>
                Designation
              </Typography> */}
            </div>
          </Grid>
          <Grid item className={classes.contentBlock} md={8} lg={9} sm={12}>
            <div className='py-8 md:px-8 px-4 text-left text-justify'>
              <Typography variant='subtitle1'>{guest.description}</Typography>
            </div>
          </Grid>
        </Grid>
      ))}
    </div>
  )
}

export default PreviousYearChiefGuest
