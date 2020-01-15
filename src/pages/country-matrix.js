import React from 'react'
import Wrapper from '../components/wrapper'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import makeStyles from '@material-ui/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import classNames from 'classnames'

import { Committe } from '../data/country-data'
import Countries from '../data/country-code.json'

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
    // margin: '50px',
  },
  bgCardContentProperty: {
    padding: 0,
    // margin: '40px',
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
  console.log(Countries)
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
                  <Tab className={classes.tabsTextProperty} label='LokSabha' />
                  <Tab className={classes.tabsTextProperty} label='CSW' />
                  <Tab className={classes.tabsTextProperty} label='IMF' />
                  <Tab className={classes.tabsTextProperty} label='CSTD' />
                  <Tab className={classes.tabsTextProperty} label='NSG' />
                  <Tab className={classes.tabsTextProperty} label='SPECPOL' />
                  <Tab className={classes.tabsTextProperty} label='WHA' />
                  <Tab className={classes.tabsTextProperty} label='AIPPM' />
                </Tabs>
              </Grid>
              <div className={classes.cardStyle}>
                <div>
                  <span class='flag-icon flag-icon-gr w-32'></span>
                </div>
                <Grid container justify='center' alignContent='space-around'>
                  {Committe[value].map((text, index) => {
                    const CountryCode = Countries[`${text.toLowerCase()}`]
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
                              <img src={`/flags-mini/${CountryCode}.png`} />
                            ) : null}
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}
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
