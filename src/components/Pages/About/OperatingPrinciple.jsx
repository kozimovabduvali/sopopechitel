
function OperatingPrinciple() {
  return (
    <>
      <div>
        <h3 className='font-extrabold text-xl  leading-none'>Принцип работы</h3>
        <h2 className='max-w-210 font-semibold text-xl md:text-[2rem] lg:text-[40px]  leading-none mt-6 md:mt-8 lg:mt-10'>
          Создаем систему взаимодействия между наставником и ребёнком
        </h2>

        <div className='max-w-212 ml-auto grid grid-cols-2 gap-5 mt-10 md:mt-15 lg:mt-18'>
          {/* 1 */}
          <div>
            <h4 className='font-semibold lg:text-xl  leading-none'>Работа с наставниками</h4>
            <p className='font-medium text-sm lg:text-base  leading-none mt-4 md:mt-6'>
              Наставник проходит многоступенчатый отбор и обучение, получает необходимое сопровождение команды специалистов и доступ к digital инструментарию, чтобы выстроить доверительные отношения с ребёнком
            </p>
          </div>
          {/* 2 */}
          <div>
            <h4 className='font-semibold lg:text-xl  leading-none'>Работа с детьми</h4>
            <p className='font-medium text-sm lg:text-base  leading-none mt-4 md:mt-6'>
              Организуем дополнительную помощь в формате юридического сопровождения, предоставления доступа к образовательным программам и профориентационным мероприятиям, а также поддержка мотивации к участию в программах фонда
            </p>
          </div>
        </div>
        <div className='max-w-210 mx-auto text-center py-25 md:py-30'>
          <h2 className='font-bold text-[32px] md:text-5xl lg:text-[64px]  leading-none tracking-[-2%] lg:tracking-[-4%]'>
            Мы&nbsp;стремимся выстроить для каждого ребёнка индивидуальный путь поддержки, учитывая его цели и&nbsp;жизненные обстоятельства
          </h2>
        </div>
      </div>
    </>
  )
}

export default OperatingPrinciple