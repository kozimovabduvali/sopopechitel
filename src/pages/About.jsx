import Hero from '../components/Pages/About/Hero'
import ProjectParticipants from '../components/Pages/About/ProjectParticipants'
import MissionValues from '../components/Pages/About/MissionValues'
import OperatingPrinciple from '../components/Pages/About/OperatingPrinciple'

export default function About() {
  return (
    <>
      <main className='max-w-330 mx-auto px-4 pt-20 lg:pt-15'>
        {/* Hero */}
        <Hero />

        {/* Project participants */}
        <section className='mt-20 md:mt-18 lg:mt-25'>
          <ProjectParticipants />
        </section>

        {/* Project participants */}
        <section className='mt-20 md:mt-18 lg:mt-25'>
          <MissionValues />
        </section>

        {/* Operating Principle */}
        <section className='mt-20 md:mt-18 lg:mt-25'>
          <OperatingPrinciple />
        </section>
      </main>
    </>
  )
}
