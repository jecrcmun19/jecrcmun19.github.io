import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import About from '../components/sections/home/about'
import PreviousYearChiefGuest from '../components/sections/home/previousYearChiefGuests'
import Registrations from '../components/sections/home/registrations'
import HomeBlogs from '../components/sections/home/blogs'
import Committees from '../components/sections/home/committees'
import Countdown from '../components/countdown'
import VideoDialog from '../components/sections/home/videoDialog'
import Fab from '@material-ui/core/Fab'
import PlayIcon from '@material-ui/icons/PlayArrowSharp'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CalendarIcon from '@material-ui/icons/CalendarTodayOutlined'
import LocationIcon from '@material-ui/icons/PlaceOutlined'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
    letterSpacing: '0.08em',
  },
  diplomacyTextProperty: {
    color: '#fff',
    fontFamily: "'Rubik' , sans-serif",
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '28px',
  },
}))

export default () => {
  const [openVideoDialog, setVideoDialogOpen] = React.useState(false)
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery('(min-width:640px)')
  const { image, chiefGuestImage, blogsImage } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/bg.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      chiefGuestImage: file(relativePath: { eq: "banners/chief-guest.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      blogsImage: file(relativePath: { eq: "banners/blogs.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const handleOpenVideoDialog = () => {
    setVideoDialogOpen(!openVideoDialog)
    console.log(openVideoDialog)
  }

  return (
    <Wrapper>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css?family=Rubik&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <Banner
        backgrounds={[
          `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
          image.sharp.fluid,
        ]}
        className='flex flex-col justify-center item-center'
      >
        <div className='self-start self-center'>
          {matches && <Countdown date='11 April 2020 09:00:000 GMT+05:30' />}
        </div>
        <div className='my-10'>
          <Typography className={classes.munTextProperty}>
            JECRC MUN 2020
          </Typography>
          <Typography className={classes.diplomacyTextProperty}>
            Diplomacy At It’s Zenith
          </Typography>
        </div>
        <div className='my-10'>
          <Typography className='text-white' variant='h6'>
            <LocationIcon color='primary' /> Jaipur Engineering College and
            Research Center, Jaipur
          </Typography>
          <Typography className='text-white' variant='h6'>
            <CalendarIcon color='primary' /> 11th - 12th April 2020
          </Typography>
        </div>
        <div>
          <Fab color='primary' size='large' onClick={handleOpenVideoDialog}>
            <PlayIcon fontSize='large' />
          </Fab>
          <VideoDialog
            open={openVideoDialog}
            handleOpen={handleOpenVideoDialog}
          />
        </div>
      </Banner>
      <div id='about' style={{ minHeight: '100vh' }}>
        <About />
      </div>
      <div className='flex flex-wrap justify-center h-auto'>
        <Banner
          backgrounds={[
            `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
            chiefGuestImage.sharp.fluid,
          ]}
          height='auto'
          minHeight={true}
        >
          <div className='pb-10'>
            <PreviousYearChiefGuest />
          </div>
        </Banner>
      </div>
      <div id='registrations' style={{ minHeight: '100vh' }}>
        <Registrations />
      </div>
      <div
        id='committees'
        className='flex flex-wrap justify-center h-auto pt-10'
      >
        <Banner
          backgrounds={[
            `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
            blogsImage.sharp.fluid,
          ]}
          height='auto'
          minHeight={true}
        >
          <div className='pb-10'>
            <Committees />
          </div>
        </Banner>
      </div>
      <div id='blogs' style={{ minHeight: '100vh' }}>
        <HomeBlogs />
      </div>
    </Wrapper>
  )
}
