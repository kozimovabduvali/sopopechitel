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
        <section className='mt-20 md:mt-18 lg:mt-25'>
          <GroupsForum />
        </section>

        {/* Assigning an AI assistant */}
        <section className='mt-20 md:mt-18 lg:mt-25'>
          <h4 className='font-extrabold md:text-xl uppercase'>
            Назначение ИИ ассистента
          </h4>
          <h3 className='font-semibold text-xl md:text-[2rem]/[100%] lg:text-[2.5rem]/[100%] mt-6 md:mt-8 lg:mt-10'>
            Используем искусственный интеллект в процессе формирования и сопровождения встреч наставников и детей. Главная цель — повысить качество взаимодействия, ускорить диагностику и персонализировать подход как к каждому участнику, так и всей группы как системы
          </h3>
        </section>
      </main>
    </>
  )
}

export default AiSupport