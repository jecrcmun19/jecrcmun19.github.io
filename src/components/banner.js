import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const useStyles = makeStyles(theme => ({
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
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

function Banner(props) {
  const classes = useStyles()
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const backgrounds = [
    `linear-gradient(rgba(41, 24, 2, 0.75), rgba(41, 24, 2, 0.75))`,
    image.sharp.fluid,
  ]
  return (
    <BackgroundImage className={classes.header} fluid={backgrounds}>
      <div className='text-center'>
        <Typography className={classes.munTextProperty}>
          JECRC MUN 2020
        </Typography>
        <Typography className={classes.diplomacyTextProperty}>
          Deplomacy At It’s Zenith
        </Typography>
      </div>
    </BackgroundImage>
  )
}

export default Banner
