import React from 'react'

function ProjectProvide() {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between gap-x-5 gap-y-8'>
        <h3 className='font-extrabold md:text-xl  leading-none uppercase'>Что даёт проект</h3>
        <div>
          <div className='max-w-142 lg:max-w-212 ml-auto grid md:grid-cols-2 gap-y-5 gap-x-10'>
            <p className='font-medium lg:text-xl  leading-none'>
              На первом этапе между наставником и ребёнком строятся доверительные отношения через совместное времяпрепровождение (музеи, кино, прогулки и мероприятия)
            </p>
            <p className='font-medium lg:text-xl  leading-none'>
              Когда доверие установлено, при поддержке психолога наставник и ребёнок определяют образовательную цель — освоение нового навыка, подготовка к экзаменам или выбор профессии
            </p>
          </div>
        </div>
      </div>
      {/* Radius */}
      <div className='flex flex-col md:flex-row md:-space-x-5 -space-y-7 md:space-y-0 items-center justify-center text-center mt-10 md:mt-15 lg:mt-18'>
        {/* 1 */}
        <div className='bg-white border-[0.4px] border-accent rounded-full size-50 md:size-60 lg:size-80 xl:size-110 inline-flex items-center justify-center px-3 lg:px-7'>
          <h4 className='font-semibold md:text-xl lg:text-[2rem]  leading-none'>
            Поддержка и дружба надёжного взрослого
          </h4>
        </div>
        {/* 2 */}
        <div className='bg-white border-[0.4px] border-accent rounded-full size-50 md:size-60 lg:size-80 xl:size-110 inline-flex items-center justify-center px-3 lg:px-7'>
          <h4 className='font-semibold text- md:text-xl lg:text-[2rem]  leading-none'>
            Социализация, уверенность в себе и новые впечатления
          </h4>
        </div>
        {/* 3 */}
        <div className='bg-white border-[0.4px] border-accent rounded-full size-50 md:size-60 lg:size-80 xl:size-110 inline-flex items-center justify-center px-3 lg:px-7'>
          <h4 className='font-semibold md:text-xl lg:text-[2rem]  leading-none'>
            Помощь в выборе будущего и достижение целей
          </h4>
        </div>
      </div>
    </>
  )
}

export default ProjectProvide