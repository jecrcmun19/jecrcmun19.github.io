import React from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import About from '../components/sections/home/about'
import ChiefGuest from '../components/sections/home/ourChiefGuest'
import Registrations from '../components/sections/home/registrations'
import HomeBlogs from '../components/sections/home/blogs'
import Committees from '../components/sections/home/committees'
import Countdown from '../components/countdown'
import VideoDialog from '../components/sections/home/videoDialog'
// import Fab from '@material-ui/core/Fab'
// import PlayIcon from '@material-ui/icons/PlayArrowSharp'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CalendarIcon from '@material-ui/icons/CalendarTodayOutlined'
import LocationIcon from '@material-ui/icons/PlaceOutlined'
import classnames from 'classnames'
import MunExcellencies from '../components/sections/home/munExcellencies'
import Ambassador from '../components/sections/home/ambassador'
import Fade from 'react-reveal/Fade'

const useStyles = makeStyles(theme => ({
  munLogo: {
    height: '200px',
    [theme.breakpoints.down('lg')]: {
      height: '150px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '120px',
    },
  },
  munTextProperty: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    // fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
    letterSpacing: '0.08em',
    [theme.breakpoints.up('md')]: {
      fontSize: 80,
    },
  },
  diplomacyTextProperty: {
    color: '#fff',
    fontFamily: "'Rubik' , sans-serif",
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '58px',
    [theme.breakpoints.up('md')]: {
      fontSize: 35,
    },
  },
  FontInfo: {
    [theme.breakpoints.up('md')]: {
      fontSize: 30,
    },
  },
}))

export default () => {
  const [openVideoDialog, setVideoDialogOpen] = React.useState(false)
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery('(min-width:640px)')
  const logoMatches = useMediaQuery('(min-height:600px)')
  const {
    image,
    chiefGuestImage,
    blogsImage,
    ambassadorImage,
  } = useStaticQuery(graphql`
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
      ambassadorImage: file(relativePath: { eq: "banners/ambassador.jpg" }) {
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
        {logoMatches && (
          <Fade top>
            <img
              src='images/mun-logo-white.png'
              className={classnames(['mx-auto mt-10 w-auto', classes.munLogo])}
              alt='logo'
            />
          </Fade>
        )}
        <div className='self-start self-center'>
          {matches && <Countdown date='11 April 2020 09:00:000 GMT+05:30' />}
        </div>
        <div className='my-5'>
          <Typography className={classes.munTextProperty}>
            JECRC MUN 2020
          </Typography>
          <Typography className={classes.diplomacyTextProperty}>
            Diplomacy At It’s Zenith
          </Typography>
        </div>
        <div className='my-5'>
          <Typography
            className={classnames('text-white', classes.FontInfo)}
            variant='h6'
          >
            <LocationIcon color='primary' /> Jaipur Engineering College and
            Research Center, Jaipur
          </Typography>
          <Typography
            className={classnames('text-white', classes.FontInfo)}
            variant='h6'
          >
            <CalendarIcon color='primary' /> 11th - 12th April 2020
          </Typography>
        </div>
        <div>
          {/* <Fab color='primary' size='large' onClick={handleOpenVideoDialog}>
            <PlayIcon fontSize='large' />
          </Fab> */}
          <VideoDialog
            open={openVideoDialog}
            handleOpen={handleOpenVideoDialog}
          />
        </div>
      </Banner>
      <div
        id='about'
        style={{
          minHeight: '100vh',
          background: theme.palette.background.pinkish,
        }}
      >
        <About />
        <MunExcellencies />
      </div>
      <div id='ambassador' className='flex flex-wrap justify-center'>
        <Banner
          backgrounds={[
            `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
            ambassadorImage.sharp.fluid,
          ]}
          height='auto'
          minHeight={true}
        >
          <div className='py-10'>
            <Ambassador />
          </div>
        </Banner>
      </div>
      <div
        id='registrations'
        style={{
          minHeight: '100vh',
          background: theme.palette.background.pinkish,
        }}
      >
        <Registrations />
      </div>
      <div className='flex flex-wrap justify-center h-auto' id='chief-guest'>
        <Banner
          backgrounds={[
            `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
            chiefGuestImage.sharp.fluid,
          ]}
          height='auto'
          minHeight={true}
        >
          <div className='py-10'>
            <ChiefGuest />
          </div>
        </Banner>
      </div>
      <div
        id='resources'
        className='pt-10'
        style={{
          minHeight: '100vh',
          background: theme.palette.background.pinkish,
        }}
      >
        <HomeBlogs />
      </div>
      <div id='committees' className='flex flex-wrap justify-center h-auto'>
        <Banner
          backgrounds={[
            `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
            blogsImage.sharp.fluid,
          ]}
          height='auto'
          minHeight={true}
        >
          <div className='py-10'>
            <Committees />
          </div>
        </Banner>
      </div>
    </Wrapper>
  )
}
