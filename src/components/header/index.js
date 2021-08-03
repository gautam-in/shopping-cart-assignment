import React from 'react'

import SubHeader from './subHeader';
import PrimaryHeader from './primaryHeader';

export default function Header() {

  return (
    <header className="SB_Header">
      <PrimaryHeader />
      <hr />
      <SubHeader />

    </header>
  )
}
