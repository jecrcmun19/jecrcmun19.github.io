import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const PreviousYearChiefGuest = () => {
  return (
    <Grid container className='h-full mx-auto' lg={8} md={9} sm={10}>
      <Grid item alignContent='center' className='bg-red-700 md:w-3/12 w-full'>
        <Grid
          container
          alignContent='center'
          className='align-middle h-full md:m-0 py-4'
        >
          <div className='w-full'>
            <img
              src='/images/bg2.png'
              className='rounded-full w-32 h-32 mx-auto'
            />
          </div>
          <div className='text-center w-full mt-1'>
            <Typography className='w-full text-white' variant='h6'>
              Name
            </Typography>
            <Typography variant='subtitle1' className='text-white w-full'>
              Designation
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid item className='md:w-9/12 w-full bg-white'>
        <div className='px-8 py-8 text-left text-justify'>
          <Typography variant='subtitle1'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            officia dolores id illo, dolore neque necessitatibus dolorum iure
            sapiente ab doloribus explicabo? Recusandae aliquid error eos, nam
            in laboriosam totam.Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Voluptates officia dolores id illo, dolore neque
            necessitatibus dolorum iure sapiente ab doloribus explicabo?
            Recusandae aliquid error eos, nam in laboriosam totam.
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}

export default PreviousYearChiefGuest
