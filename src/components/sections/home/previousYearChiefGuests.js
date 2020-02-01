import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const PreviousYearChiefGuest = () => {
  const guests = [
    {
      name: 'Dr. Jawahar Surisetti',
      description: `Dr Jawahar Surisetti is a psychologist and educationist of international repute whose 1300 + speeches, seminars and workshops have been heard by lakhs of people around the globe. He is known worldwide as the Think Professor for his "Art of Thinking " and his " Think for India " movement for introduction of thinking in education. He has received innumerable accolades for his pioneering works and thoughts on various issues of strategic interest to corporates and school as well as higher education. He advises States and central governments in India and U.S. He is also the brand ambassador of skill development for the State of Queensland. `,
      image: 'Jawahar',
    },
    {
      name: 'Ms. Harichandana Dasari',
      description: `Currently the Zonal Commissioner (West Zone) of the Greater Hyderabad Municipal Corporation (GHMC), Dasari has been dedicatedly invested in numerous recycling initiatives under her jurisdiction for over two years now. Right from installing upcycled furniture made from unused tyres and oil drums at over 120 parks in the city to the conception of housing and sanitation projects where paver tiles and roofing sheets are made of recycled plastic, Hyderabad is witnessing a remarkable charge thanks to Ms. Dasari's extra interest in the initiative. `,
      image: 'Harichandana',
    },
    {
      name: 'Shri Mani Shankar Aiyar',
      description: `JECRC MUN was fortunate to host Shri Mani Shankar Aiyar as the chief guest for the 7th edition. It was an absolute honor to have such an erudite personality amidst us who delivered words of impetus that continue to inspire us.  Mani Shankar Aiyar is a former Indian diplomat turned politician who was a part of First Cabinet (2004-2009) of Prime Minister, Dr. Manmohan Singh. He has also held office of first Minister of Development of North Eastern Region and represented the Mayiladuthurai constituency of Tamil Badi in the 14th Lok Sabha.`,
      image: 'ManiShankarAiyar',
    },
    {
      name: 'Shri Anand Chulani',
      description: `JECRC MUN was utterly delighted to have Shri Anand Chulani as the chief guest for older edition of the conference.  An international speaker, legacy advisor and peak performance coach, he activated the energy among the delegates with his presence. He is the inventor of the very effective speak performance pyramid, a model devised to empower individuals, teams and organizations to excel. As a personal mentor, he has worked intimately with leading figures of sports and entertainment such as Serena Williams, Hugh Jackman and Ross Taylor to name a few.`,
      image: 'anandChulani',
    },
  ]

  return (
    <div>
      <Typography className='w-full text-white font-black py-10' variant='h4'>
        OUR PREVIOUS CHIEF GUESTS
      </Typography>
      {guests.map((guest, index) => (
        <Grid
          container
          key={index}
          className='my-10 mx-auto'
          xl={8}
          lg={10}
          md={11}
          sm={9}
          xs={11}
        >
          <Grid
            container
            className='py-4 align-middle md:m-0'
            md={4}
            sm={12}
            lg={3}
            style={{ background: '#d90845' }}
          >
            <div className='w-full self-center'>
              <img
                alt={guest.image}
                src={`/images/${guest.image}.jpg`}
                className='rounded-full w-32 h-32 m-auto bg-white'
              />
            </div>
            <div className='text-center w-full mt-1'>
              <Typography className='w-full text-white px-2' variant='h6'>
                {guest.name}
              </Typography>
              {/* <Typography variant='subtitle1' className='text-white w-full'>
                Designation
              </Typography> */}
            </div>
          </Grid>
          <Grid item className='bg-white' md={8} lg={9} sm={12}>
            <div className='px-8 py-8 text-left text-justify'>
              <Typography variant='subtitle1'>{guest.description}</Typography>
            </div>
          </Grid>
        </Grid>
      ))}
    </div>
  )
}

export default PreviousYearChiefGuest
