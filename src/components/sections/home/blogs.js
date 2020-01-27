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
    `Dr Jawahar Surisetti is a psychologist and educationist of international repute whose 1300 + speeches, seminars and workshops have been heard by lakhs of people around the globe. He is known worldwide as the Think Professor for his "Art of Thinking " and his " Think for India " movement for introduction of thinking in education. He has received innumerable accolades for his pioneering works and thoughts on various issues of strategic interest to corporates and school as well as higher education. He advises States and central governments in India and U.S. He is also the brand ambassador of skill development for the State of Queensland. `,
    `Dr Jawahar Surisetti is a psychologist and educationist of international repute whose 1300 + speeches, seminars and workshops have been heard by lakhs of people around the globe. He is known worldwide as the Think Professor for his "Art of Thinking " and his " Think for India " movement for introduction of thinking in education. He has received innumerable accolades for his pioneering works and thoughts on various issues of strategic interest to corporates and school as well as higher education. He advises States and central governments in India and U.S. He is also the brand ambassador of skill development for the State of Queensland. `,
    `Dr Jawahar Surisetti is a psychologist and educationist of international repute whose 1300 + speeches, seminars and workshops have been heard by lakhs of people around the globe. He is known worldwide as the Think Professor for his "Art of Thinking " and his " Think for India " movement for introduction of thinking in education. He has received innumerable accolades for his pioneering works and thoughts on various issues of strategic interest to corporates and school as well as higher education. He advises States and central governments in India and U.S. He is also the brand ambassador of skill development for the State of Queensland. `,
  ]

  return (
    <div className='flex flex-wrap justify-center mx-2'>
      <Typography className='w-full text-white font-black py-10' variant='h4'>
        BLOGS
      </Typography>
      {guests.map((guest, index) => (
        <div
          container
          className='xl:w-3/12 lg:w-4/12 md:w-8/12 w-full md:p-4 py-4 h-full'
        >
          <div className='w-full'>
            <img
              alt={guest}
              src={`/images/${guest}.jpg`}
              className='w-full mx-auto bg-white'
            />
          </div>

          <div className='p-8  bg-white'>
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
