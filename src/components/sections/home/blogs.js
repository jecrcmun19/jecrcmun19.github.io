import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const HomeBlogs = () => {
  const guests = ['Jawahar', 'Jawahar', 'Jawahar']

  const guestNames = [
    'Dr. Jawahar Surisetti',
    'Ms. Harichandana Dasari',
    'Dr. Jawahar Surisetti',
  ]

  const description = [
    `Dr Jawahar Surisetti is a psychologist and educationist of international repute whose 1300 + speeches, seminars and workshops have been heard by lakhs of people around the globe. He is known worldwide as the. `,
    `Dr Jawahar Surisetti is a psychologist and educationist of international repute whose 1300 + speeches, seminars and workshops have been heard by lakhs of people around the globe. He is known worldwide as the. `,
    `Dr Jawahar Surisetti is a psychologist and educationist of international repute whose 1300 + speeches, seminars and workshops have been heard by lakhs of people around the globe. He is known worldwide as the. `,
  ]

  return (
    <div className='flex flex-wrap justify-center sm:px-4 px-2'>
      <Typography
        className='w-full text-white font-black py-10 xl:w-10/12'
        variant='h4'
      >
        BLOGS
      </Typography>
      {guests.map((guest, index) => (
        <div
          container
          className='xl:w-3/12 lg:w-4/12 md:w-7/12 sm:w-10/12 h-full py-10 sm:px-4 xl:px-10'
        >
          <div className='w-full'>
            <img
              alt={guest}
              src={`/images/${guest}.jpg`}
              className='mx-auto bg-white'
              style={{
                width: '100%',
                height: '300px',
              }}
            />
          </div>

          <div className='sm:p-8 p-4  bg-white'>
            <Typography className='text-center pont-extrabold' variant='h6'>
              BLOG HEADING
            </Typography>
            <Typography className=' text-left text-justify' variant='subtitle1'>
              {description[index]}
            </Typography>
          </div>
          <div className='bg-white pt-4 pb-8'>
            <Button
              variant='contained'
              // component={Link}
              // to={section.btnLink}
              style={{
                background: '#d90845',
                color: 'white',
                borderRadius: '5px',
              }}
            >
              Read More
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeBlogs
