import React from 'react'

function WhoHelp() {
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-8'>
        <h3 className='font-extrabold md:text-xl  leading-none'>Кому помогаем</h3>
        <div className='md:max-w-142 lg:max-w-212 md:ml-auto'>
          <h2 className='font-semibold text-xl md:text-[32px] lg:text-[40px]  leading-none'>
            Мы помогаем детям от 14 лет, которые живут в детских домах или приёмных семьях и оказались в трудной жизненной ситуации. Им не хватает поддержки для того, чтобы преодолеть сложности
          </h2>

          <div className='grid md:grid-cols-2 gap-5 mt-10 md:mt-15 lg:mt-18'>
            <div className='space-y-6'>
              <h5 className='font-semibold text-base lg:text-xl  leading-none'>Почему это важно?</h5>
              <p className='font-medium text-sm lg:text-base  leading-none'>Подростковый возраст — ключевой момент, когда формируются основы будущего. Без поддержки этим детям трудно понять себя, поверить в свои силы и научиться принимать важные решения</p>
            </div>
            <div className='space-y-6'>
              <h5 className='font-semibold text-base lg:text-xl  leading-none'>Почему это важно?</h5>
              <p className='font-medium text-sm lg:text-base  leading-none'>
                Проект помогает подросткам найти близкого взрослого, который станет другом и наставником. Этот взрослый поддержит в кризисные моменты, научит практическим навыкам и поможет определить цели для успешного будущего. Коммуникация в группах помогает преодолевать трудности социализации и строить здоровые отношения окружающими
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhoHelp