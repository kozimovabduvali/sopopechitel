import ImageHero from '../../../assets/images/arm.png'

function Hero() {
  return (
    <>
      <div>
        <div className='max-w-300 flex flex-col items-center text-center mx-auto px-5'>
          <div className='border border-accent rounded-lg text-accent backdrop-blur-2xl inline-flex items-center gap-2 px-2 py-1'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={24}
              fill="none"
            >
              <path
                stroke="#0190C3"
                strokeWidth={0.6}
                d="M23.5 12c0 6.075-4.925 11-11 11m11-11c0-6.075-4.925-11-11-11m11 11h-4.385m4.385 0h-4.385M12.5 23c-6.075 0-11-4.925-11-11m11 11c-2.005 0-3.802-1.545-5.016-3.943M12.5 23c-.678 0-1.285-1.545-1.696-3.943M12.5 23c.678 0 1.284-1.545 1.694-3.943M12.5 23c2.005 0 3.8-1.545 5.013-3.943M1.5 12c0-6.075 4.925-11 11-11m-11 11h4.38M1.5 12h4.38M12.5 1C8.845 1 5.88 5.71 5.88 11.786V12M12.5 1c3.655 0 6.617 4.71 6.617 10.786 0 .071 0 .143-.002.214M12.5 1c-1.236 0-2.24 4.71-2.24 10.786l.001.214M12.5 1c1.236 0 2.235 4.71 2.235 10.786V12M4.295 4.515h16.453m-16.5 14.542h3.236m13.264 0h-3.235m-10.029 0C6.51 17.134 5.911 14.662 5.881 12m1.603 7.057h3.32M5.88 12h4.38m-4.38 0h4.38m.543 7.057c-.33-1.923-.533-4.395-.543-7.057m.543 7.057h3.39M10.26 12h4.474m-4.474 0h4.474m-.541 7.057c.329-1.923.53-4.395.54-7.057m-.54 7.057h3.32M14.733 12h4.381m-4.38 0h4.38m-1.602 7.057c.973-1.923 1.572-4.395 1.602-7.057"
              />
            </svg>
            <span className='font-medium text-sm md:text-base'>О ФОНДЕ</span>
          </div>
          <h1 className='font-semibold text-4xl md:text-6xl lg:text-[80px]/[90%] mt-4 md:mt-6'>
            Наставничество. Поддержка. Успешное будущее
          </h1>
          <p className='font-medium text-gray text-sm md:text-xl mt-10 md:mt-15 lg:mt-18'>
            «Сопопечители» — это программа наставничества, которая помогает детям в трудной жизненной ситуации найти поддержку взрослого, развиваться и учиться строить своё будущее
          </p>
        </div>
      </div>
      <div className='w-full h-55 md:h-53.5 lg:h-100 overflow-hidden rounded-md md:rounded-2xl lg:rounded-3xl mt-15 md:mt-20'>
        <img className='size-full object-cover' src={ImageHero} alt="ImageHero" />
      </div>
    </>
  )
}

export default Hero