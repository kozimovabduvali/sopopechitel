import ImagePic from '../../../assets/icons/pic.svg'
import ImagePic2 from '../../../assets/icons/pic2.svg'

function MentorProject() {
  return (
    <>
      {/* Section */}
      <div>
        <h3 className="font-extrabold md:text-xl uppercase">Роль наставника в проекте</h3>
        <div className='flex flex-col lg:flex-row gap-y-8 md:gap-y-10 gap-x-8 mt-6 md:mt-8 lg:mt-10'>
          <h2 className="max-w-190 font-semibold text-xl md:text-[2rem]/[100%] lg:text-[2.5rem]/[100%]">
            Наставничество — это осознанная ответственная миссия
          </h2>
          <p className='max-w-102.5 md:ml-auto font-medium text-sm md:text-base lg:text-xl'>
            Мы тщательно готовим каждого наставника, чтобы его участие в жизни ребёнка было безопасным, полезным и комфортным для обеих сторон
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className='grid md:grid-cols-3 gap-5 mt-10 md:mt-15 lg:mt-18'>
        {/* 1 */}
        <div className='h-49 rounded-[18px] flex items-center justify-center bg-gradient-to-b to-[#D8FDFF] from-[#EDF2FE] p-4 lg:p-6'>
          <h4 className='text-lg lg:text-[32px]/[100%]'>
            Наставник прошёл многоэтапный отбор и обучение
          </h4>
        </div>
        {/* 2 */}
        <div className='border border-dark/20 rounded-3xl p-4 lg:p-6'>
          <div className='bg-gradient-to-b to-[#D8FDFF] from-[#EDF2FE] rounded-full overflow-hidden size-41 lg:size-70 mx-auto mb-6 md:mb-8 lg:mb-10'>
            <img className='size-full object-cover' src={ImagePic2} alt="Image" />
          </div>

          <h4 className='font-medium lg:text-xl'>
            Наставник готов делиться опытом, знаниями и временем
          </h4>
        </div>
        {/* 3 */}
        <div className='border border-dark/20 rounded-3xl p-4 lg:p-6'>
          <div className='bg-gradient-to-b to-[#D8FDFF] from-[#EDF2FE] rounded-full overflow-hidden size-41 lg:size-70 mx-auto mb-6 md:mb-8 lg:mb-10'>
            <img className='size-full object-cover' src={ImagePic} alt="Image" />
          </div>

          <h4 className='font-medium lg:text-xl'>
            Наставник осознаёт ответственность перед ребёнком, утратившим опору
          </h4>
        </div>
      </div>
    </>
  )
}

export default MentorProject