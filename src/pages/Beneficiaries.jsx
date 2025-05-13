import HeroBenefic from '../components/Pages/Beneficiaries/HeroBenefic'
import MentorProject from '../components/Pages/Beneficiaries/MentorProject'
import Taps from '../components/Pages/Beneficiaries/Taps'

function Beneficiaries() {
  return (

    <>
      <main className='max-w-330 mx-auto px-4 pt-20 lg:pt-15'>
        {/* HeroBenefic */}
        <HeroBenefic />

        {/* MentorProject */}
        <section className='mt-20 md:mt-18 lg:mt-25'>
          <MentorProject />
        </section>


        <section className='mt-20 md:mt-18 lg:mt-25'>
          <Taps />
        </section>
      </main>
    </>
  )
}

export default Beneficiaries