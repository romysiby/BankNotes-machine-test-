import React from 'react'
import UpperHeader from './UpperHeader'
import Title from './Title'
import Options from './Options'
import Banner from './Banner'

function Header() {
  return (
    <div className='flex flex-col'>
      <UpperHeader />
      <Title />
      <Options />
      <Banner />
    </div>
  )
}

export default Header