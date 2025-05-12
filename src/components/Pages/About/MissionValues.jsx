
function MissionValues() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between gap-x-5 gap-y-6 md:gap-y-8">
        <h3 className='font-extrabold md:text-xl uppercase'>
          Миссия и ценности
        </h3>
        <h2 className='max-w-217 md:text-2xl lg:text-[2rem] leading-[100%]'>
          Помогаем детям, оставшимся без родительской поддержки, обрести значимого взрослого&nbsp;&mdash; наставника, который станет для них опорой, поддержит в&nbsp;трудных ситуациях и&nbsp;поможет поверить в&nbsp;свои силы
        </h2>
      </div>

      {/* Radius */}
      <div className='uppercase flex flex-col md:flex-row md:-space-x-5 -space-y-7 md:space-y-0 items-center justify-center text-center mt-10 md:mt-15 lg:mt-18'>
        {/* 1 */}
        <div className='bg-white border-[0.4px] border-accent rounded-full size-50 md:size-60 lg:size-80 xl:size-110 inline-flex items-center justify-center px-1 lg:px-6 xl:px-10'>
          <h4 className='font-extrabold md:text-xl lg:text-2xl xl:text-[2rem] leading-[100%]leading-[100%]'>
            безопасность, равенство, доверие
          </h4>
        </div>
        {/* 2 */}
        <div className='bg-white border-[0.4px] border-accent rounded-full size-50 md:size-60 lg:size-80 xl:size-110 inline-flex items-center justify-center px-1 lg:px-6 xl:px-10'>
          <h4 className='font-extrabold md:text-xl lg:text-2xl xl:text-[2rem] leading-[100%]leading-[100%]'>
            многоуровневая система поддержки
          </h4>
        </div>
        {/* 3 */}
        <div className='bg-white border-[0.4px] border-accent rounded-full size-50 md:size-60 lg:size-80 xl:size-110 inline-flex items-center justify-center px-1 lg:px-6 xl:px-10'>
          <h4 className='font-extrabold md:text-xl lg:text-2xl xl:text-[2rem] leading-[100%]'>
            фокус на практический результат
          </h4>
        </div>
      </div>
    </>
  )
}

export default MissionValues