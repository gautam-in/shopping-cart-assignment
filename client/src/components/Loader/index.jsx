import React from 'react'

import LoaderStyle from './Loader.styled';

const Loader = () => {
  return (
    <LoaderStyle>
      <div className='skChaseDot' />
      <div className='skChaseDot' />
      <div className='skChaseDot' />
      <div className='skChaseDot' />
      <div className='skChaseDot' />
    </LoaderStyle>
  )
}

export default Loader;
