import React from 'react'
import Hero from '../components/Pages/Help/Hero'
import MentorProject from '../components/Pages/Help/MentorProject'
import BecomeMentor from '../components/Pages/Help/BecomeMentor'
import FinancialSupport from '../components/Pages/Help/FinancialSupport'

function Help() {
  return (
    <>
      <div className='max-w-330 mx-auto px-4 pt-20 lg:pt-15'>
        {/* Hero */}
        <Hero />

        {/* Mentor Project */}
        <div className='mt-20 md:mt-18 lg:mt-25'>
          <MentorProject />
        </div>

        {/* BecomeMentor */}
        <div className='mt-20 md:mt-18 lg:mt-25'>
          <BecomeMentor />
        </div>

        {/* FinancialSupport */}
        <div className='mt-20 md:mt-18 lg:mt-25'>
          <FinancialSupport />
        </div>
      </div>
    </>
  )
}

export default Help