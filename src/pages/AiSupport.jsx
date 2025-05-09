import React from 'react'
import Hero from '../components/Pages/Help/Hero'
import HeroSupport from '../components/Pages/AiSupport/HeroSupport'
import GroupsForum from '../components/Pages/AiSupport/GroupsForum'
// import Hero from '../components/Pages/AiSupport/Hero'

function AiSupport() {
  return (
    <>
      <main className='max-w-330 mx-auto px-5 pt-20 lg:pt-15'>
        <HeroSupport />

        {/* Group Forum */}
        <div className='mt-20 md:mt-18 lg:mt-25'>
          <GroupsForum />
        </div>
      </main>
    </>
  )
}

export default AiSupport