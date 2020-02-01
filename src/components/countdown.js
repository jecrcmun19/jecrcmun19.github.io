import React from 'react'
import { withStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import moment from 'moment'

const styles = theme => ({
  borderRound: {
    color: '#D90845',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '10px',
    position: 'relative',
    width: '100px',
    height: '25vh',
    marginRight: '20px',
    marginLeft: '20px',
  },
  countdown: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  // countdownSvg: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100px',
  //   height: '100px',
  // },
})

class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props
      const then = moment('2020-01-31T16:25:07', moment.ISO_8601)
      const now = new Date()
      const countdown = moment(then - now)
      console.log(then, now, countdown)
      const days = countdown.format('DD')
      const hours = countdown.format('HH')
      const minutes = countdown.format('mm')
      const seconds = countdown.format('ss')

      this.setState({ days, hours, minutes, seconds })
    }, 1000)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render() {
    const { classes } = this.props
    const { days, hours, minutes, seconds } = this.state
    const daysRadius = mapNumber(days, 30, 0, 0, 360)
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360)
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360)
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360)

    if (!seconds) {
      return null
    }

    return (
      <React.Fragment>
        <div className={classes.countdown}>
          {days && (
            <div className={classes.borderRound}>
              <SVGCircle radius={daysRadius} />
              <Typography style={{ marginTop: -136 }}>
                <Typography style={{ fontSize: '28px' }}>{days}</Typography>
                <Typography>
                  <span className='text-white'>DAYS</span>
                </Typography>
              </Typography>
            </div>
          )}
          {hours && (
            <div className={classes.borderRound}>
              <SVGCircle radius={hoursRadius} />
              <Typography style={{ marginTop: -136 }}>
                <Typography style={{ fontSize: '28px' }}>{hours}</Typography>
                <Typography>
                  <span className='text-white'>HOURS</span>
                </Typography>
              </Typography>
            </div>
          )}

          {minutes && (
            <div className={classes.borderRound}>
              <SVGCircle radius={minutesRadius} />
              <Typography style={{ marginTop: -136 }}>
                <Typography style={{ fontSize: '28px' }}>{minutes}</Typography>
                <Typography>
                  <span className='text-white'>MINUTES</span>
                </Typography>
              </Typography>
            </div>
          )}

          {seconds && (
            <div className={classes.borderRound}>
              <SVGCircle radius={secondsRadius} />
              <Typography style={{ marginTop: -136 }}>
                <Typography style={{ fontSize: '28px' }}>{seconds}</Typography>
                <Typography>
                  <span className='text-white'>SECONDS</span>
                </Typography>
              </Typography>
            </div>
          )}
        </div>
      </React.Fragment>
    )
  }
}

const SVGCircle = ({ radius }) => (
  <svg>
    <path
      fill='none'
      stroke='#fff'
      stroke-width='4'
      d={describeArc(50, 50, 48, 0, 359)}
    />
    <path
      fill='none'
      stroke='#D90845'
      stroke-width='6'
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
)

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle)
  var end = polarToCartesian(x, y, radius, startAngle)

  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  var d = [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(' ')

  return d
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

export default withStyles(styles)(Countdown)
