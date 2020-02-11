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
    letterSpacing: '0.08em',
    [theme.breakpoints.up('md')]: {
      fontSize: 80,
    },
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
  },
}))

function Freshmen() {
  const classes = useStyles()
  const theme = useTheme()
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/blog3.jpg" }) {
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
            What the college MUN freshman must know?
          </Typography>
          <Grid container justify='center' className='md:p-4'>
            <Grid item md={10}>
              <Typography className='text-justify py-5'>
                Model United Nations in college can be challenging for the
                freshmen. Whether it your first MUN conference or you have
                achieved a lot in high school MUNs, the experience is different
                for all. Here are some tips for you to excel at college MUN and
                earn much more than just experience at these conferences –
              </Typography>
              <div className='w-11/12 mx-auto'>
                <img
                  src='/images/freshmen.jpg'
                  alt='blogger'
                  className='mx-auto h-40 sm:h-64 md:h-64 rounded-lg'
                />
              </div>
              <Typography className='text-justify py-5'>
                <strong>1. Start from scratch-</strong> You might have a
                successful MUN career in high school. And could also have a list
                of accomplishments credited to your name, even then don't flaunt
                about it. In college you will meet even better delegates with
                much higher experience and it becomes necessary to stay humble
                and learn from them. You can begin by gaining respect and
                building a profile of a learner rather than someone who is
                reveling in old successes. This would prove to be a successful
                first step for college MUN.
              </Typography>
              <Typography className='text-justify py-5'>
                <strong>2. Contribute with your experience-</strong> One looks
                for leadership positions if you have enough experience in
                college. If you wish to guide the newcomers in the world of MUN,
                there will be ample of opportunities for you. You can apply for
                chairing the conferences or helping the organizers. You can also
                suggest and work on ways for improving the club. This will
                strengthen your position and give you a better insight about
                working with the team.
              </Typography>
              <Typography className='text-justify py-5'>
                <strong>3. Research well-</strong> If you are confident and do
                not fear public speaking, good research can be a cherry on top
                of the cake. But if your speeches lack facts and figures and
                have no evident support of actual references, then speaking on
                top of your voice will not prove to be much effective. College
                MUN chairs are experienced and figure out when someone is
                throwing wild guesses confidently.
              </Typography>
              <Typography className='text-justify py-5'>
                <strong>4. Be less competitive-</strong> While competing against
                fellow delegates is necessary for a debate, a healthy
                competition persists when you are not trying to pull others
                down. Improve your tactics and skills instead of making others
                look less skilled, help them up. This would build a better
                reputation for you. Also create a positive impression among your
                fellows.
              </Typography>
              <Typography className='text-justify py-5'>
                <strong>5. Socialize and branch out-</strong> College MUNs are
                the perfect opportunity to connect with like-minded people who
                can help you in later stages. Connecting with students from
                other colleges having different backgrounds can help you in
                diversifying your knowledge. You can also get opportunities from
                various fields. You can seek help from your MUN friends for
                internships, competitions or improving your circuit.
              </Typography>
              <Typography className='text-justify py-5'>
                JECRC MUN is perfectly suitable to begin your college MUN
                journey as a freshman. Here you find opportunities belonging to
                all levels, as a beginner or an expert. We have the best of
                everything about MUN for everyone. Hurry up and register now to
                avail the exclusive benefits of being a college MUN freshman at
                JECRC MUN conference.
              </Typography>
            </Grid>
          </Grid>
        </ContentBox>
      </Grid>
    </Wrapper>
  )
}

export default Freshmen
