import React from 'react'

function OurGoal() {
  return (
    <div>
      <h3 className='font-extrabold md:text-xl uppercase'>Наша цель</h3>
      <div className='flex justify-between flex-col md:flex-row gap-x-5 md:gap-x-10 lg:gap-x-19 gap-y-10 mt-6 md:mt-8 lg:mt-10'>
        <p className='font-medium md:text-xl'>
          Стремимся дать каждому ребёнку шанс вырасти благополучным взрослым
        </p>
        {/* Right */}
        <div className='w-full max-w-211.5 space-y-8 md:space-y-15 lg:space-y-18'>
          <div>
            <h2 className='font-semibold text-xl md:text-[2rem]/[100%] lg:text-[2.5rem]/[100%]'>
              Формируем сообщество взрослых, готовых к осознанной и устойчивой поддержке детей
            </h2>
            <button className="border border-dark rounded-xl inline-flex items-center transition duration-200 hover:bg-dark/10 gap-3 h-9 px-5 mt-6">
              <span className="font-medium">Как вы можете помочь</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={12}
                fill="none"
              >
                <path
                  fill="#0D2D42"
                  d="M40.53 6.53a.75.75 0 0 0 0-1.06L35.757.697a.75.75 0 0 0-1.06 1.06L38.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L40.53 6.53ZM0 6v.75h40v-1.5H0V6Z"
                />
              </svg>
            </button>
          </div>
          <div>
            <h2 className='font-semibold text-xl md:text-[2rem]/[100%] lg:text-[2.5rem]/[100%]'>
              Создаём масштабируемую модель наставничества с методологиейи ИИ-сопровождением
            </h2>
            <button className="border border-dark rounded-xl inline-flex items-center transition duration-200 hover:bg-dark/10 gap-3 h-9 px-5 mt-6">
              <span className="font-medium">Как внедряем ИИ модель</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={12}
                fill="none"
              >
                <path
                  fill="#0D2D42"
                  d="M40.53 6.53a.75.75 0 0 0 0-1.06L35.757.697a.75.75 0 0 0-1.06 1.06L38.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L40.53 6.53ZM0 6v.75h40v-1.5H0V6Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='max-w-195 mx-auto pt-35 md:pt-30'>
        <h2 className='font-semibold text-center text-[2rem]/[100%] md:text-5xl lg:text-[64px]/[100%]'>
          Мы даём ребёнку удочку, а не рыбу, чтобы он выловил нужный и эффективный путь для становления успешным взрослым
        </h2>
      </div>
    </div>
  )
}

export default OurGoal