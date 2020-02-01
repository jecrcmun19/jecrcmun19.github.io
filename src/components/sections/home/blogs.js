import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'

const HomeBlogs = () => {
  const blogData = [
    {
      blogTitle: 'What is MUN?',
      description: `Have you recently heard about MUN and are curious to know what they are? Then this blog will give you an insight into the fascinating world of MUN. MUN or Model United Nations is the model of United Nations proceedings that help you experience the environment of a UN  `,
      btnLink: '/blogs/MUN',
      image: 'MUN.jpg',
    },
    {
      blogTitle: 'What are the advantages of participating in MUN?',
      description: `Rather than being a 2-3 day event, MUN conferences are a journey. It is a procedure of learning and evolving. It is not only about winning; but becoming better versions of ourselves. What you can get at an MUN conference can be an experience of a lifetime. It has preparations, debating,`,
      btnLink: '/blogs/advantages',
      image: 'advantages.jpg',
    },
    {
      blogTitle: 'What the college MUN freshman must know?',
      description: `Model United Nations in college can be challenging for the freshmen. Whether it your first MUN conference or you have achieved a lot in high school MUNs, the experience is different for all. Here are some tips for you to excel at college MUN and earn much more than just experience`,
      btnLink: '/blogs/freshmen',
      image: 'freshmen.jpg',
    },
    {
      blogTitle: 'How does it feel like to attend your first MUN conference?',
      description: `Model United Nations need a lot of pre-preparations if you want to succeed at it. Before your first MUN, anxiety and excitement are at an all time high. The pressure of performance is there. But there is so much for you to look forward to. Meet new people and have interesting conversations`,
      btnLink: '/blogs/firstMUN',
      image: 'firstMUN.jpg',
    },
  ]

  return (
    <div className='flex flex-wrap justify-center md:px-4 px-2'>
      <Typography className='w-full text-white font-black py-10' variant='h4'>
        BLOGS
      </Typography>
      {blogData.map((blog, index) => (
        <div className='h-full py-10 mx-2 sm:px-4' style={{ width: '300px' }}>
          <div className='w-full'>
            <img
              alt={blog.blogTitle}
              src={`/images/${blog.image}`}
              className='mx-auto bg-white'
              style={{
                width: '100%',
                height: '300px',
              }}
            />
          </div>

          <div className='sm:px-8 px-2 py-4  bg-white'>
            <Typography
              className=' font-extrabold'
              variant='h6'
              style={{
                height: '108px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {blog.blogTitle}
            </Typography>
            <Typography
              className=' text-left text-justify pt-4'
              variant='subtitle1'
              style={{
                fontSize: '18px',
              }}
            >
              {blog.description}
            </Typography>
          </div>
          <div className='bg-white pt-4 pb-8'>
            <Button
              variant='contained'
              component={Link}
              to={blog.btnLink}
              style={{
                background: '#d90845',
                color: 'white',
                borderRadius: '5px',
              }}
            >
              Read More
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeBlogs
