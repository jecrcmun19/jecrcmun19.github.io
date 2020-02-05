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

function Mun() {
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
            What is MUN?
          </Typography>
          <Grid container justify='center' className='md:p-4'>
            <Grid item md={10}>
              <Typography className='text-justify py-5'>
                Have you recently heard about MUN and are curious to know what
                they are? Then this blog will give you an insight into the
                fascinating world of MUN. MUN or Model United Nations is the
                model of United Nations proceedings that help you experience the
                environment of a UN conference. It simulates various councils
                replicating the actual conference to make students aware about
                it. MUN is an extra-curricular activity for students in colleges
                and high schools. The student represents the country allotted to
                him/her. He presents the views that resonate with the country’s
                national and international policies. But, the delegate has to
                take care not to present personal opinions. This is the spirit
                of MUN that helps you develop diplomatic skills and open your
                mind to new outlooks.
              </Typography>
              <div className='w-11/12 mx-auto'>
                <img
                  src='/images/MUN.jpg'
                  alt='blogger image'
                  className='mx-auto h-40 sm:h-64 md:h-64 rounded-lg'
                />
              </div>
              <Typography className='text-justify py-5'>
                Most students interested in political discourse look forward to
                MUN. Here they get the inspiration to become future leaders. You
                can take part in various MUN conferences held each year in most
                parts of the world to gain experience. The delegates are awarded
                on the basis of their performance in the conference. Best
                delegate of each council is presented with a gavel. Some other
                awards may vary from conference to conference. Sometimes,
                councils other than the ones present in UN are also simulated.
                This is in coherence with the national political environment.
                This is beneficial for youth who wants to understand the working
                of the country’s government. If you have a hunger for change,
                and want to drive the difference, there is no better way than
                participating in MUN conferences.
              </Typography>
              <Typography className='text-justify py-5'>
                If you are still unsure about the purpose of participation, the
                key aspect of it is to learn to stand by your voice. You should
                take part in MUN conferences to achieve a broader perspective on
                most global and national issues. In national councils that
                belong to a specific country, students have to represent
                portfolios of its leaders. The Executive Board members of each
                council first explain all the rules and then open the
                discussion. Each student gives detailed speeches about his take
                on the agenda. The discussion is monitored by the Executive
                Board as per the norms of the council in actuality. This is how
                you can dive into the realm of politics and understand
                everything with valuable experience.
              </Typography>
              <Typography className='text-justify py-5'>
                MUN widens your sense on issues of national and international
                importance. This will train your mind to look at everyday issues
                with a transformed vision. For beginners, JECRC MUN is the
                perfect opportunity to kickstart their MUN journey. The
                experience one gains here is highly invaluable. JECRC MUN holds
                a strong position in MUN circuits and you avail the benefits.
                Set out to bring this perfect opportunity to fruition by
                participating now!
              </Typography>
            </Grid>
          </Grid>
        </ContentBox>
      </BackgroundImage>
    </Wrapper>
  )
}

export default Mun
