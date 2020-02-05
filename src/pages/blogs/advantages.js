import React from 'react'
import Helmet from 'react-helmet'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

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
}))

function Advantages() {
  const classes = useStyles()
  const theme = useTheme()
  const { image, bgImage } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bgImage: file(relativePath: { eq: "pages-background.png" }) {
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
      <BackgroundImage
        className='flex flex-col justify-center items-center'
        fluid={bgImage.sharp.fluid}
        durationFadeIn={50}
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
            What are the advantages of participating in MUN?
          </Typography>
          <Grid container justify='center' className='md:p-4'>
            <Grid item md={10}>
              <Typography className='text-justify py-5'>
                Rather than being a 2-3 day event, MUN conferences are a
                journey. It is a procedure of learning and evolving. It is not
                only about winning; but becoming better versions of ourselves.
                What you can get at an MUN conference can be an experience of a
                lifetime. It has preparations, debating, enthusiastic peers, and
                like-minded youth oriented to bring a change in world. All this
                can cast a magic spell on you. Attending MUN conference will
                definitely have the following advantages for you –
              </Typography>
              <div className='w-11/12 mx-auto'>
                <img
                  src='/images/advantages.jpg'
                  alt='blogger image'
                  className='mx-auto'
                />
              </div>
              <Typography className='text-justify py-5'>
                <strong>1. Oratory Skills-</strong> Public speaking has two
                kinds of followers, the ones who are highly confident, or the
                ones who are terrified. If you are the former, MUN is an
                opportunity to flaunt and improve them. But if you are one of
                latter, MUN is the platform which will help you erase this fear.
                Imbibe qualities of expression and articulation with MUN.
              </Typography>
              <Typography className='text-justify py-5'>
                <strong>2. Global outlook-</strong> The debating environment is
                hard to find in our regular surroundings. MUN conferences give
                you an ambience with politically driven minds all having
                different opinions. Discussing about agendas of national and
                global importance gives you unforeseen insights which wouldn’t
                have crossed your mind otherwise.
              </Typography>
              <Typography className='text-justify py-5'>
                <strong>3. Social Skills-</strong> Meeting and interacting with
                new people from different places enhances socializing abilities.
                You learn to dwell in various environments and adapt to
                different mindsets. MUN helps you develop social skills that are
                needed in our day-to-day lives. Your fellow delegates will open
                your eyes to a new dimension of the world.
              </Typography>
              <Typography className='text-justify py-5'>
                <strong>4. Self-awareness-</strong> While debating with people
                well versed with facts and figures of any agenda, you gain a lot
                of information. Corrections and additions to our own knowledge
                are a must. And there is no better way than MUN to improve it.
                You would certainly feel much enlightened about issues which you
                had no idea about, all in a better light.
              </Typography>
              <Typography className='text-justify py-5'>
                <strong>5. Diplomacy and leadership-</strong> Development of
                personal attributes is a key focus at all MUN conferences.
                Diplomatic tactics and leadership skills are nurtured. Here you
                learn to dive deeper into conversations and defend your line of
                thought, or correct it. You can only favor what’s in the rules,
                and this makes you maneuver the discussion in your favor.
              </Typography>
              <Typography className='text-justify py-5'>
                <strong>6. Experience UN proceedings-</strong> United Nations
                Conference is an experience all aspiring leaders dream of. It is
                an assembly of the world’s most diplomatic intellectuals. MUN is
                a simulation of such an environment. Here the stimulus to become
                better future leaders and create a place for you in the world
                can be found.
              </Typography>
              <Typography className='text-justify py-5'>
                At JECRC MUN, you find all these plus a lot more to add to your
                list of advantages. We make sure that our delegates take back
                the most from here, both memories and skills. Leaving no stone
                unturned, we make JECRC MUN a one of its kind experience for
                every participant. Do not miss out on this opportunity of
                availing this long list of advantages. Hurry up and register
                now!
              </Typography>
            </Grid>
          </Grid>
        </ContentBox>
      </BackgroundImage>
    </Wrapper>
  )
}

export default Advantages
