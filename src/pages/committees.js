import React from 'react'
import Helmet from 'react-helmet'

import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import makeStyles from '@material-ui/styles/makeStyles'
import useTheme from '@material-ui/styles/useTheme'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'

import { Committe, CommitteName, Agenda } from '../data/committees-data'
import Wrapper from '../components/wrapper'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import Banner from '../components/banner'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  root: {
    paddingTop: 10,
    paddingBottom: 10,
    background: '#D90845',
  },
  tabsTextProperty: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#FFF',
  },
  cardStyle: {
    marginBottom: '10%',
    marginTop: '3%',
    paddingTop: 0,
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'justify',
    display: 'flex',
    justifyContent: 'center',
  },
  contentArea: {
    width: '100%',
    maxWidth: '1000px',
  },
  textProperty: {
    textAlign: 'center',
    fontWeight: 700,
    lineHeight: 1,
    display: 'flex',
    marginBottom: '1%',
    justifyContent: 'center',
    width: '100%',
  },
  agendaProperty: {
    textAlign: 'center',
    fontWeight: 400,
    lineHeight: 1,
    display: 'flex',
    marginTop: '1%',
    marginBottom: '2%',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: '1%',
    fontStyle: 'italic',
  },
  bgCardContentProperty: {
    padding: 0,
  },
}))

function CountryMatrix() {
  const classes = useStyles()
  const theme = useTheme()

  const [value, setValue] = React.useState(0)

  const { image, bgImage } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/committees.png" }) {
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

  const handleChange = (event, newValue) => {
    setValue(newValue)
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
        height='50vh'
      >
        <Typography
          color='primary'
          component='h2'
          className={classes.munTextProperty}
        >
          COMMITTEES
        </Typography>
      </Banner>
      <BackgroundImage
        className='flex flex-col justify-center items-center'
        fluid={bgImage.sharp.fluid}
        durationFadeIn={50}
      >
        <Card raised={true} className='my-16 w-10/12 lg:w-8/12'>
          <CardContent className={classes.bgCardContentProperty}>
            <Grid container justify='center' className={classes.root}>
              <Tabs
                value={value}
                variant='scrollable'
                onChange={handleChange}
                indicatorColor='#FFFF8C'
                scrollButtons='desktop'
              >
                <Tab className={classes.tabsTextProperty} label='UNSC' />
                <Tab className={classes.tabsTextProperty} label='UNODC' />
                <Tab className={classes.tabsTextProperty} label='DISEC' />
                <Tab className={classes.tabsTextProperty} label='UNCSW' />
                <Tab className={classes.tabsTextProperty} label='WHO' />
                <Tab className={classes.tabsTextProperty} label='AIPPM' />
              </Tabs>
            </Grid>
            <div className={classes.cardStyle}>
              <Grid
                container
                justify='center'
                alignContent='space-around'
                className={classes.contentArea}
              >
                <Typography
                  variant='subtitle1'
                  className={classes.textProperty}
                >
                  {CommitteName[value]}
                </Typography>
                <Typography
                  variant='subtitle2'
                  className={classes.agendaProperty}
                >
                  Agenda - {Agenda[value]}
                </Typography>
                <div>{Committe[value]}</div>
              </Grid>
            </div>
          </CardContent>
        </Card>
      </BackgroundImage>
    </Wrapper>
  )
}

export default CountryMatrix
