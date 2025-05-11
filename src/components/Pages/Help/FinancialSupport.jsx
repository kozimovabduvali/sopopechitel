import React from 'react'

function FinancialSupport() {
  return (
    <div>
      <h3 className='font-extrabold md:text-xl uppercase'>Спонсорство и материальная поддержка</h3>
      <h2 className='font-semibold text-xl md:text-[2rem]/[100%] lg:text-[2.5rem]/[100%] mt-6 md:mt-8 lg:mt-10'>
        Мы принимаем спонсорскую помощь для обеспечения работы проекта: поддержки психологов, курирования наставников, проведения мероприятий и помощи детям
      </h2>
      <button className='h-11.5 bg-dark text-white rounded-xl inline-flex items-center gap-3 px-6 transition duration-200 hover:bg-dark/75 mt-10 md:mt-15 lg:mt18
      '>
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
  )
}

export default FinancialSupport