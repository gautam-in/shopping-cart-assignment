import React, { Fragment } from 'react'
import SignupForm from '../../../authorization/signupForm/signupForm'
import Header from '../../common/header/header'
import './homePage.scss'

function HomePage() {
  return (
    <Fragment>
        <Header/>
        <SignupForm/>
        <div className='homeSec'>homePage</div>

    </Fragment>
  )
}

export default HomePage