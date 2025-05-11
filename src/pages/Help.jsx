 
import Hero from '../components/Pages/Help/Hero'
import MentorProject from '../components/Pages/Help/MentorProject'
import BecomeMentor from '../components/Pages/Help/BecomeMentor'
import FinancialSupport from '../components/Pages/Help/FinancialSupport'

function Help() {
  return (
    <>
      <main className='max-w-330 mx-auto px-4 pt-20 lg:pt-15'>
        {/* Hero */}
        <Hero />

        {/* Mentor Project */}
        <section className='mt-20 md:mt-18 lg:mt-25'>
          <MentorProject />
        </section>

        {/* BecomeMentor */}
        <section className='mt-20 md:mt-18 lg:mt-25'>
          <BecomeMentor />
        </section>

        {/* FinancialSupport */}
        <section className='mt-20 md:mt-18 lg:mt-25'>
          <FinancialSupport />
        </section>
      </main>
    </>
  )
}

export default Help