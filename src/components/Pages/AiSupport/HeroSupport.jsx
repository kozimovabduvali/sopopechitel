 

function HeroSupport() {
  return (
    <>
      <div className='max-w-295 flex flex-col items-center text-center mx-auto px-5'>
        <div className='border border-accent rounded-lg text-accent backdrop-blur-2xl inline-flex items-center gap-2 px-2 py-1'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={23}
            height={22}
            fill="none"
          >
            <path
              stroke="#0190C3"
              strokeWidth={0.5}
              d="M11.5 0v7.333m7.837-4.17-5.185 5.185M15.167 11H22.5m-3.163 7.837-5.185-5.185M11.5 14.667V22m-7.838-3.163 5.186-5.185M.5 11h7.333m-4.17-7.838 5.185 5.186"
            />
          </svg>
          <span className='font-medium text-sm md:text-base'>ИИ СОПРОВОЖДЕНИЕ</span>
        </div>
        <h1 className='font-semibold text-4xl md:text-6xl lg:text-[80px]/[90%] mt-4 md:mt-6'>
          Внедряем ИИ в свои процессы, чтобы участники проекта получили мощный инструмент для эффективной работы с детьми
        </h1>
      </div>
    </>
  )
}

export default HeroSupport