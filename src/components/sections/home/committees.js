import React from 'react'

import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import makeStyles from '@material-ui/styles/makeStyles'
import { useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import Fade from 'react-reveal/Fade'
import {
  Committe,
  CommitteName,
  Agenda,
  CommitteLogo,
} from '../../../data/committees-data'
import { graphql, useStaticQuery } from 'gatsby'

const useStyles = makeStyles(theme => ({
  primaryBackgroundColor: {
    background: '#D90845',
  },
  cardContainer: {
    width: '65vw',
    [theme.breakpoints.down('md')]: {
      width: '80vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '95vw',
    },
  },
  tabsTextProperty: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#FFF',
  },
  paddingZero: {
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
    <>
      <div className='text-center my-10 text-white'>
        <Fade bottom cascade>
          <Typography variant='h4'>Committees</Typography>
          <img
            src='/images/line.png'
            className='mx-auto'
            alt='---------------------'
          />
        </Fade>
      </div>
      <Fade bottom>
        <Card
          raised={true}
          className={classnames([classes.cardContainer, 'my-10 mx-auto'])}
        >
          <CardContent className={classes.paddingZero}>
            <Grid
              container
              justify='center'
              className={classnames([classes.primaryBackgroundColor, 'py-3'])}
            >
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
            <div className='mx-auto text-justify p-5 md:p-10'>
              <Fade bottom cascade>
                <Grid container justify='center' alignContent='space-around'>
                  <Grid item xs={12}>
                    <img
                      src={CommitteLogo[value]}
                      className='w-48 h-48 mx-auto'
                    />
                  </Grid>
                  <Grid item className='text-center'>
                    <Typography variant='h6'>{CommitteName[value]}</Typography>
                    <Typography
                      variant='subtitle2'
                      className='italic pt-1 pb-5'
                    >
                      Agenda - {Agenda[value]}
                    </Typography>
                  </Grid>
                  <Grid item>{Committe[value]}</Grid>
                </Grid>
              </Fade>
            </div>
          </CardContent>
        </Card>
      </Fade>
    </>
  )
}

export default CountryMatrix
