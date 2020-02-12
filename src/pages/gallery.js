import React, { useState } from 'react'
import Helmet from 'react-helmet'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import GalleryDialog from '../components/galleryDialog'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  container: {
    backgroundColor: theme.palette.background.pinkish,
  },
  imageContainer: {
    width: '25%',
    [theme.breakpoints.down('md')]: {
      width: '30.34%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  image: {
    width: '100%',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: `16px`,
    '&:hover': {
      cursor: 'pointer',
      transition: 'all 0.3s ease-in',
      opacity: 0.9,
    },
  },
  gridContainer: {
    margin: theme.spacing(4, 0),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}))

function Gallery() {
  const classes = useStyles()
  const theme = useTheme()
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDialogOpen = index => {
    setDialogOpen(true)
    setImageFile(index)
  }
  const handleDialogClose = () => setDialogOpen(false)

  const { image, gallery } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      gallery: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        images: nodes {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  const [imageIndex, setImageFile] = useState(image.sharp.fluid)

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
          GALLERY
        </Typography>
      </Banner>
      <Grid
        className={[
          'flex flex-col justify-center items-center',
          classes.container,
        ]}
      >
        <Grid
          container
          spacing={2}
          xs={11}
          sm={11}
          md={10}
          className={classes.gridContainer}
          justify='center'
        >
          {gallery.images.map((image, index) => (
            <Grid
              item
              className={classes.imageContainer}
              onClick={() => handleDialogOpen(index)}
            >
              <Image
                fluid={image.sharp.fluid}
                fadeIn={false}
                alt='JECRC MUN Gallery'
                className={classes.image}
              />
            </Grid>
          ))}
        </Grid>
        <GalleryDialog
          imageIndex={imageIndex}
          handleDialogClose={handleDialogClose}
          dialogOpen={dialogOpen}
        />
      </Grid>
    </Wrapper>
  )
}

export default Gallery
