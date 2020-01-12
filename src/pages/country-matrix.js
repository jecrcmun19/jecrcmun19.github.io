import React from 'react'
import Wrapper from '../components/wrapper'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import makeStyles from '@material-ui/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import classNames from 'classnames'

import { Committe } from '../data/country-data'

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
    fontSize: 20,
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
      <Grid container justify='center' className={classes.root}>
        <Tabs
          value={value}
          variant='scrollable'
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          // centered
          scrollButtons='desktop'
        >
          <Tab label='UNSC' />
          <Tab label='UNHRC' />
          <Tab label='DISEC' />
          <Tab label='LokSabha' />
          <Tab label='CSW' />
          <Tab label='IMF' />
          <Tab label='CSTD' />
          <Tab label='NSG' />
          <Tab label='SPECPOL' />
          <Tab label='WHA' />
        </Tabs>
      </Grid>
      <div className={classes.cardStyle}>
        <Grid container justify='center' alignContent='space-around'>
          {Committe[value].map((text, index) => (
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
                  {text}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Wrapper>
  )
}

export default CountryMatrix
