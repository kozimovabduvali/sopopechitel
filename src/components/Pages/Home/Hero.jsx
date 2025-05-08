import React from 'react'
import IconGlobe from '../../../assets/icons/globe.svg'
function Hero() {
  return (
    <>
      <div className='max-w-245 flex flex-col items-center text-center mx-auto px-5'>
        <div className='border border-accent rounded-lg text-accent backdrop-blur-2xl inline-flex items-center gap-2 px-2 py-1'>
          <img className='size-4 lg:size-6' src={IconGlobe} alt="" />
          <span className='font-medium text-sm md:text-base'>СИСТЕМА НАСТАВНИЧЕСТВА</span>
        </div>
        <h1 className='font-semibold text-4xl md:text-6xl lg:text-[80px]/[90%] mt-4 md:mt-6'>
          Помогаем детям стать успешными взрослыми
        </h1>
        <p className='max-w-170 font-medium text-gray text-sm md:text-xl mt-10 md:mt-6'>
          При участии наставников и специалистов проекта создаём среду для поддержки и развития детей в сложных жизненных обстоятельствах
        </p>
        <button className='h-11.5 bg-dark text-white rounded-xl inline-flex items-center gap-3 px-6 transition duration-200 hover:bg-dark/85 mt-10 md:mt-15'>
          <span className='font-semibold lg:text-xl'>Хочу помочь</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={42}
            height={12}
            fill="none"
          >
            <path
              fill="#fff"
              d="M41.03 6.53a.75.75 0 0 0 0-1.06L36.257.697a.75.75 0 0 0-1.06 1.06L39.439 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L41.03 6.53ZM.5 6v.75h40v-1.5H.5V6Z"
            />
          </svg>
        </button>
      </div>
    </>
  )
}

export default Hero