import React, { useState, useEffect } from 'react'
import Wrapper from '../components/wrapper'
import Banner from '../components/banner'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Card, CardContent } from '@material-ui/core'
import Swiper from 'react-id-swiper'
import classnames from 'classnames'
import 'swiper/css/swiper.css'

const useStyles = makeStyles(theme => ({
  munTextProperty: {
    color: '#D90845',
    fontWeight: 'bold',
    fontFamily: "'Rubik' , sans-serif",
    fontSize: 60,
    lineHeight: '71px',
  },
  imageSize: {
    width: '100%',
    height: '70%',
  },
  card: {
    maxWidth: '700px',
    width: '93%',
    background: theme.palette.background.pinkish,
  },
  imageContainer: {
    width: '70%',
    height: '70%',
  },
}))

function Gallery() {
  const classes = useStyles()
  const theme = useTheme()
  const { image, bgImage } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "banners/about.jpg" }) {
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

  const [gallerySwiper, getGallerySwiper] = useState(null)
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null)

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    loopedSlides: 4,
  }

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 3,
    touchRatio: 0.2,
    loop: true,
    loopedSlides: 4,
    slideToClickedSlide: true,
  }

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper
      thumbnailSwiper.controller.control = gallerySwiper
    }
  }, [gallerySwiper, thumbnailSwiper])

  const imagesList = [
    '1__11_.jpg',
    '1__32_.jpg',
    'ay__68_.jpg',
    'dsc_0027.jpg',
    'dsc_0095.jpg',
    'dsc_0131.jpg',
    'h__157_.jpg',
    'img_9743.jpg',
    '1__12_.jpg',
    '1__4_.jpg',
    'ay__91_.jpg',
    'dsc_0034.jpg',
    'dsc_0102.jpg',
    'dsc_0132.jpg',
    'h__164_.jpg',
    'm__71_.jpg',
    '1__15_.jpg',
    'ay__26_.jpg',
    'dsc_0004.jpg',
    'dsc_0039.jpg',
    'dsc_0108.jpg',
    'dsc_0143.jpg',
    'h__34_.jpg',
    '1__17_.jpg',
    'ay__64_.jpg',
    'dsc_0015__1_.jpg',
    'dsc_0078.jpg',
    'dsc_0112.jpg',
    'dsc_0167.jpg',
    'img_0167.jpg',
  ]

  return (
    <Wrapper>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.2.0/css/swiper.css'
        />
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
          GALLERY
        </Typography>
      </Banner>
      <BackgroundImage
        className='flex flex-col justify-center items-center'
        fluid={bgImage.sharp.fluid}
        durationFadeIn={50}
      >
        <Card
          raised={true}
          className={classnames(['md:w-8/12 w-full my-16', classes.card])}
        >
          <CardContent className='w-full mx-auto p-24'>
            <div className='md:p-4 py-2'>
              <Swiper {...gallerySwiperParams}>
                {imagesList.map(imageHere => (
                  <div className={classes.imageContainer}>
                    <img
                      className={classes.imageSize}
                      src={`/gallery/${imageHere}`}
                      alt=''
                    />
                  </div>
                ))}
              </Swiper>
            </div>
            <div className='md:p-4 py-2'>
              <Swiper {...thumbnailSwiperParams}>
                {imagesList.map(imageHere => (
                  <div className={classes.imageContainer}>
                    <img
                      className={classes.thumbnailStyle}
                      src={`/gallery/${imageHere}`}
                      alt=''
                    />
                  </div>
                ))}
              </Swiper>
            </div>
          </CardContent>
        </Card>
      </BackgroundImage>
    </Wrapper>
  )
}

export default Gallery
