import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const PreviousYearChiefGuest = () => {
  const guests = ['Jawahar', 'Harichandana']

  const guestNames = ['Dr. Jawahar Surisetti', 'Ms. Harichandana Dasari']

  const description = [
    `Dr Jawahar Surisetti is a psychologist and educationist of international repute whose 1300 + speeches, seminars and workshops have been heard by lakhs of people around the globe. He is known worldwide as the Think Professor for his "Art of Thinking " and his " Think for India " movement for introduction of thinking in education. He has received innumerable accolades for his pioneering works and thoughts on various issues of strategic interest to corporates and school as well as higher education. He advises States and central governments in India and U.S. He is also the brand ambassador of skill development for the State of Queensland. `,
    `Currently the Zonal Commissioner (West Zone) of the Greater Hyderabad Municipal Corporation (GHMC), Dasari has been dedicatedly invested in numerous recycling initiatives under her jurisdiction for over two years now. Right from installing upcycled furniture made from unused tyres and oil drums at over 120 parks in the city to the conception of housing and sanitation projects where paver tiles and roofing sheets are made of recycled plastic, Hyderabad is witnessing a remarkable charge thanks to Ms. Dasari's extra interest in the initiative`,
  ]

  return (
    <div>
      <Typography className='w-full text-white font-black py-10' variant='h4'>
        OUR PREVIOUS CHIEF GUESTS
      </Typography>
      {guests.map((guest, index) => (
        <Grid container className='h-full my-10 mx-auto' lg={8} md={9} sm={10}>
          <Grid
            item
            alignContent='center'
            className='bg-red-700 md:w-3/12 w-full'
          >
            <Grid
              container
              alignContent='center'
              className='align-middle h-full md:m-0 py-4'
            >
              <div className='w-full'>
                <img
                  src={`/images/${guest}.jpg`}
                  className='rounded-full w-32 h-32 mx-auto bg-white'
                />
              </div>
              <div className='text-center w-full mt-1'>
                <Typography className='w-full text-white px-2' variant='h6'>
                  {guestNames[index]}
                </Typography>
                {/* <Typography variant='subtitle1' className='text-white w-full'>
                Designation
              </Typography> */}
              </div>
            </Grid>
          </Grid>
          <Grid item className='md:w-9/12 w-full bg-white'>
            <div className='px-8 py-8 text-left text-justify'>
              <Typography variant='subtitle1'>{description[index]}</Typography>
            </div>
          </Grid>
        </Grid>
      ))}
    </div>
  )
}

export default PreviousYearChiefGuest
