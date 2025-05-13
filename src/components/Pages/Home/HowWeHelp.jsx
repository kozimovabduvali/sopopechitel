import ImageShape from '../../../assets/images/shape.png'

function HowWeHelp() {
  return (
    <>
      <div>  
        <div className="flex items-center justify-between gap-5">
          <h3 className="font-extrabold md:text-xl uppercase">Как мы помогаем</h3>
          <button className="border border-dark rounded-xl hidden md:inline-flex items-center transition duration-200 hover:bg-dark hover:text-white  gap-3 h-9 px-5">
            <span className="font-medium">Подробнее о модели работы</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={41}
              height={12}
              fill="none"
            >
              <path
                fill="currentColor"
                d="M40.53 6.53a.75.75 0 0 0 0-1.06L35.757.697a.75.75 0 0 0-1.06 1.06L38.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L40.53 6.53ZM0 6v.75h40v-1.5H0V6Z"
              />
            </svg>
          </button>
        </div>
        <div className='flex flex-col lg:flex-row justify-between gap-x-5 gap-y-10 md:gap-y-15 mt-6 md:mt-8 lg:mt-10'>
          <div className='max-w-175 w-full'>
            <h2 className="max-w-190 font-semibold text-xl md:text-[2rem] lg:text-[2.5rem]  leading-none">
              Форум-группы — ядро методологии работы наставника и ребёнка
            </h2>
            <p className='font-medium lg:text-xl  leading-none mt-6'>
              Группы, 2-3 наставника и до 10 детей, проводятся непосредственно наставниками и детьми, с периодическим привлечением психолога
            </p>

            {/* Mobile Button */}
            <button className="border border-dark rounded-xl md:hidden inline-flex items-center transition duration-200 hover:bg-dark hover:text-white  gap-3 h-9 px-5 mt-8">
              <span className="font-medium">Подробнее о модели работы</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={12}
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M40.53 6.53a.75.75 0 0 0 0-1.06L35.757.697a.75.75 0 0 0-1.06 1.06L38.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L40.53 6.53ZM0 6v.75h40v-1.5H0V6Z"
                />
              </svg>
            </button>
          </div>
          <div className='lg:max-w-130.5 w-full rounded-[20px] md:rounded-2xl lg:rounded-4xl overflow-hidden bg-gradient-to-b from-[#D8FDFF] to-[#EDF2FE]'>
            <img className='mx-auto h-36 md:h-56.5' src={ImageShape} alt="shape" />
          </div>
        </div>
      </div>

      {/* Radius */}
      <div className='flex flex-col md:flex-row md:-space-x-5 -space-y-7 md:space-y-0 items-center justify-center text-center mt-10 md:mt-15 lg:mt-18'>
        {/* 1 */}
        <div className='bg-white border-[0.4px] border-accent rounded-full size-50 md:size-60 lg:size-80 xl:size-110 inline-flex items-center justify-center px-3'>
          <h4 className='font-semibold text-xl md:text-2xl lg:text-[2rem]  leading-none'>
            Форум группа «Наставник-ребёнок»
          </h4>
        </div>
        {/* 2 */}
        <div className='bg-white border-[0.4px] border-accent rounded-full size-50 md:size-60 lg:size-80 xl:size-110 inline-flex items-center justify-center px-3'>
          <h4 className='font-semibold text-xl md:text-2xl lg:text-[2rem]  leading-none'>
          Форум группа «Наставник-ребёнок-психолог»
          </h4>
        </div>
        {/* 3 */}
        <div className='bg-white border-[0.4px] border-accent rounded-full size-50 md:size-60 lg:size-80 xl:size-110 inline-flex items-center justify-center px-3'>
          <h4 className='font-semibold text-xl md:text-2xl lg:text-[2rem] '>
          Форум группа «Наставник-психолог»
          </h4>
        </div>
      </div>
    </>
  )
}

export default HowWeHelp