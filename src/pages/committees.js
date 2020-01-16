import React from 'react'
import Wrapper from '../components/wrapper'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import makeStyles from '@material-ui/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import classNames from 'classnames'
import { Committe, CommitteName } from '../data/committees-data'

import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  banner: {
    background: `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main}), url(images/country-matrix.png)`,
    height: 300,
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  root: {
    paddingTop: 10,
    paddingBottom: 10,
    background: '#D90845',
  },
  cardContent: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5px',
    padding: '5px',
  },
  cardStyle: {
    marginBottom: '10%',
    marginTop: '3%',
    paddingTop: 0,
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'justify',
  },
  listItemStyle: {
    borderRadius: '2%',
    margin: 5,
  },
  cardProperty: {
    margin: 5,
    background: '#f7f7f7',
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
    marginBottom: '1%',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: '1%',
    fontStyle: 'italic',
  },
  bgCardContentProperty: {
    padding: 0,
  },
  countryMatrixBackground: {
    background: 'url(images/committees-card.png)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '300px',
    padding: '6%',
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

  const bannerClasses = classNames(classes.header, classes.banner)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Wrapper>
      <div className={bannerClasses}></div>
      <div className={classes.countryMatrixBackground}>
        <div>
          <Card raised={true}>
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
                <Grid container justify='center' alignContent='space-around'>
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
                    Agenda
                  </Typography>
                  <div>{Committe[value]}</div>
                </Grid>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Wrapper>
  )
}

export default CountryMatrix
