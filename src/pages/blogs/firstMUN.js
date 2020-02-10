import React from 'react'
import Helmet from 'react-helmet'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { graphql, useStaticQuery } from 'gatsby'

import Wrapper from '../../components/wrapper'
import Banner from '../../components/banner'
import ContentBox from '../../components/content-box'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    // fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
  },
}))

function Firstmun() {
  const classes = useStyles()
  const theme = useTheme()
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Helmet>
        {/* <link
          href='https://fonts.googleapis.com/css?family=Rubik&display=swap'
          rel='stylesheet'
        /> */}
      </Helmet>
      <Banner
        backgrounds={[
          `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main})`,
          image.sharp.fluid,
        ]}
        height='50vh'
      >
        <Typography
          color='primary'
          component='h2'
          className={classes.munTextProperty}
        >
          BLOGS
        </Typography>
      </Banner>
      <Grid
        className={[
          'flex flex-col justify-center items-center',
          classes.container,
        ]}
      >
        <ContentBox className='my-16'>
          <Typography
            style={{
              fontSize: '40px',
              fontWeight: 500,
              color: theme.palette.primary.main,
              textAlign: 'center',
            }}
          >
            How does it feel like to attend your first MUN conference?
          </Typography>
          <Grid container justify='center' className='md:p-4'>
            <Grid item md={10}>
              <Typography className='text-justify py-5'>
                Model United Nations need a lot of pre-preparations if you want
                to succeed at it. Before your first MUN, anxiety and excitement
                are at an all time high. The pressure of performance is there.
                But there is so much for you to look forward to. Meet new people
                and have interesting conversations. Your first delegate
                experience will hold everything in proportion. With dopamine and
                adrenaline rushing in your veins, it will be memorable for you.
                You will carry back home a bundle of knowledge and acquaintance
                of people from across the country, or even the world.
              </Typography>
              <div className='w-11/12 mx-auto'>
                <img
                  src='/images/advantages.jpg'
                  alt='blogger image'
                  className='mx-auto h-40 sm:h-64 md:h-64 rounded-lg'
                />
              </div>
              <Typography className='text-justify py-5'>
                The proceedings of the committee begin with a discussion of the
                Rules of Procedure by the Executive Board. The chair and the
                vice-chair formally begin the session and open the discussion as
                per the principles. This is your time to speak and deliberate.
                Amidst the many sessions that will be conducted, the first one
                is important as you get a chance to create a great first
                impression. What remains necessary is to not feel intimidated by
                your fellow delegates. You might be awestruck by other’s
                diplomacy and tactics, but don’t forget to lose your ground.
                There are all sorts of inexperienced and experienced people at
                MUN, but you should be determined to work your way up.
              </Typography>
              <Typography className='text-justify py-5'>
                The lunch and dinner time would serve as more rounds of
                socializing. You can bring up discussions about the sessions or
                simply have some light chat with your mates. Every session
                brings a fresh chance to outshine your previous performance.
                Self-improvement is the key. There can be times you might feel
                tongue-tied or but slowly you will learn to regain composure and
                give intelligent replies. Doing MUN is an art, and at first no
                artist has any idea about the masterpiece he is beginning to
                create.
              </Typography>
              <Typography className='text-justify py-5'>
                The closing ceremony will keep you stressed. If you have given
                satisfactory performance, your fingers will remain crossed for
                an award or a special mention. The cheers and applause will fuel
                your desire. If not this time, the closing ceremony would
                inspire you to work better in the next MUN. The socials at the
                end have always done a great job to release all the worry of the
                conference. Have a gala time here!
              </Typography>
              <Typography className='text-justify py-5'>
                JECRC MUN is a complete package of what you should look forward
                to as a first time delegate. Hurry up and register now to not
                miss this exclusive chance. Registrations open now!
              </Typography>
            </Grid>
          </Grid>
        </ContentBox>
      </Grid>
    </Wrapper>
  )
}

export default Firstmun
