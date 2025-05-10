import React from 'react'

function HeroBenefic() {
  return (
    <div className='max-w-295 flex flex-col items-center text-center mx-auto px-5'>
      <div className='border border-accent rounded-lg text-accent backdrop-blur-2xl inline-flex items-center gap-2 px-2 py-1'>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
        >
          <path
            stroke="#0190C3"
            strokeWidth={0.5}
            d="M16.661 7.339 23 1m0 22-6.339-6.339M1 1l6.339 6.339M1 23l6.339-6.339M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Z"
          />
        </svg>

        <span className='font-medium text-sm md:text-base'>КОМУ ПОМОГАЕМ</span>
      </div>
      <h1 className='font-semibold text-4xl md:text-6xl lg:text-[80px]/[90%] mt-4 md:mt-6'>
        Мы верим, что каждый ребёнок заслуживает внимания, заботы и возможности раскрыть свой потенциал
      </h1>
    </div>
  )
}

export default HeroBenefic