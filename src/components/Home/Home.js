import React, { Fragment } from 'react'
import Sliding from '../Sliding/Sliding'
import { Typography } from '@mui/material'

const Home = () => {
  return (
   <Fragment>
    <div className='Home-content'>
    <Typography variant='h5' style={{ color: '#888888' }}>
        Welcome To
      </Typography>
      <Typography variant='h3' style={{ color: '#999999' }}>
        Geeks For Geeks Explorer
      </Typography>
      <Typography variant='h3' style={{ color: 'rgb(74, 66, 36)' }}>
        Featured
      </Typography>

    </div>
    <Sliding/>

    <div className='Home-content'>
    <Typography variant='h3' style={{ color: '#999999' }}>
        Interview
      </Typography>
    </div>
    <Sliding/>

    <div className='Home-content'>
    <Typography variant='h3' style={{ color: '#999999' }}>
        Learn
      </Typography>
    </div>
    <Sliding/>
   </Fragment>
  )
}

export default Home