import React from 'react'
import Wrapper from '../components/wrapper'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import { makeStyles, useTheme } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { graphql, useStaticQuery } from 'gatsby'

import { Committe, MembersUNSC } from '../data/country-data'
import Countries from '../data/country-code.json'
import Banner from '../components/banner'
import Leaders from '../data/leader-code.json'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    fontSize: 60,
    lineHeight: '71px',
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
  },

  root: {
    paddingTop: 10,
    paddingBottom: 10,
    background: '#D90845',
  },
  cardStyle: {
    marginBottom: '10%',
    marginTop: '4%',
    paddingTop: 0,
  },
  listItemStyle: {
    borderRadius: '2%',
    margin: 5,
  },
  cardProperty: {
    margin: 5,
    background: '#f7f7f7',
    marginTop: '5px',
  },
  textProperty: {
    textAlign: 'center',
    fontWeight: 400,
    lineHeight: 1,
    fontSize: '0.875rem',
    display: 'flex',
    justifyContent: 'center',
  },
  backgroundCardProperty: {
    width: '80%',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      margin: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    margin: theme.spacing(8),
  },
  bgCardContentProperty: {
    padding: 0,
  },

  textPropertyHeading: {
    textAlign: 'center',
    fontWeight: 700,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  tabsTextProperty: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#FFF',
  },
  cardTextMargin: {
    margin: 'auto',
  },
}))

function CountryMatrix(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const theme = useTheme()

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/committees.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const membersObject = {
    permanentMembers: 'Permanent Members',
    nonPermanentMembers: 'Non Permanent Members',
    observers: 'Observer',
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Wrapper>
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
          COUNTRY MATRIX
        </Typography>
      </Banner>
      <Grid
        className={[
          'flex flex-col justify-center items-center',
          classes.container,
        ]}
      >
        <Card className={classes.backgroundCardProperty} raised={true}>
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
              <div>
                <span class='flag-icon flag-icon-gr w-32'></span>
              </div>
              {MembersUNSC.map(members => (
                <Grid container justify='center' alignContent='space-around'>
                  {value === 0 ? (
                    <Typography className={classes.textPropertyHeading}>
                      {membersObject[members]}
                    </Typography>
                  ) : null}
                  {Committe[value][members].sort().map((text, index) => {
                    const CountryCode = Countries[`${text.toLowerCase()}`]
                    const LeaderCode = Leaders[`${text}`]
                    return (
                      <Grid
                        item
                        className={classes.listItemStyle}
                        xl={2}
                        md={4}
                        lg={3}
                        sm={6}
                        xs={12}
                      >
                        <Card className={classes.cardProperty}>
                          <CardContent className={classes.textProperty}>
                            <span className={classes.cardTextMargin}>
                              {text}
                            </span>
                            {CountryCode ? (
                              <img
                                src={`/flags-mini/${CountryCode}.png`}
                                className='h-5'
                                alt={CountryCode}
                              />
                            ) : null}
                            {LeaderCode ? (
                              <img
                                src={`/leader-logo/${LeaderCode}.png`}
                                className='h-5'
                                alt={CountryCode}
                              />
                            ) : null}
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}
                </Grid>
              ))}
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Wrapper>
  )
}

export default CountryMatrix
