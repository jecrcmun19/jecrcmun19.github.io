import React from 'react'
import Wrapper from '../components/wrapper'
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ListItem from '@material-ui/core/ListItem'
import classNames from 'classnames'
import { Committe } from './country-data'

const useStyles = makeStyles(theme => ({
  banner: {
    background: `linear-gradient(${theme.palette.glare.main}, ${theme.palette.glare.main}), url(images/country-matrix.png)`,
    height: 300,
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  root: {
    paddingTop: 80,
    paddingBottom: 30,
  },
  cardContent: {
    // backgroundColor: '#888',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5px',
    padding: '5px',
  },
  cardStyle: {
    margin: 10,
    marginTop: 0,
    paddingTop: 0,
  },
  listItemStyle: {
    background: `linear-gradient(rgba(0,0,0,.14), rgba(0,0,0,.23))`,
    borderRadius: '2%',
    margin: 5,
  },
  content: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  munTextProperty: {
    color: '#FF8E01',
    fontWeight: 'bold',
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  diplomacyTextProperty: {
    color: '#fff',
    fontFamily: "'Rubik' , sans-serif",
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '28px',
  },
}))

function CountryMatrix(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const bannerClasses = classNames(classes.header, classes.banner)

  const handleChange = (event, newValue) => {
    console.log(event, newValue)
    setValue(newValue)
    console.log(Committe[1])
    console.log(Committe[newValue])
  }
  return (
    <Wrapper>
      <div className={bannerClasses}></div>
      <Grid container justify='center' className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
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
        <Card className={classes.cardContent}>
          <CardContent>
            <Grid container justify='center' alignContent='space-around'>
              {Committe[value].map((text, index) => (
                <Grid
                  item
                  className={classes.listItemStyle}
                  xl={2}
                  md={3}
                  lg={3}
                  sm={6}
                  xs={12}
                >
                  <ListItem alignItems='center'>
                    <Typography>{text}</Typography>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </div>
    </Wrapper>
  )
}

export default CountryMatrix
