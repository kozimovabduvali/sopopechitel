 
import ImagePic3 from '../../../assets/icons/pic3.svg'
import ImagePic4 from '../../../assets/icons/pic4.svg'
import ImagePic5 from '../../../assets/icons/pic5.svg'
import ImagePic6 from '../../../assets/icons/pic6.svg'

function GroupsForum() {
  return (
    <div>
      <div className='max-w-187'>
        <h4 className='font-extrabold md:text-xl uppercase'>Как ии помогает в работе форум групп</h4>
        <h3 className='font-semibold text-xl md:text-[2rem]/[100%] lg:text-[2.5rem]/[100%] mt-6 md:mt-8 lg:mt-10'>
          Архитектор доверия — модель, анализирующая данные о подростках и наставниках
        </h3>
      </div>
      {/* Card */}
      <div className='grid md:grid-cols-2 gap-5 mt-10 md:mt-15 lg:mt-18'>
        {/* 1 */}
        <div className='bg-light-gray rounded-2xl lg:rounded-3xl p-4 lg:p-10'>
          <div className='bg-gradient-to-b to-[#D8FDFF] from-[#EDF2FE] size-41 md:size-45 lg:size-60 mx-auto rounded-full overflow-hidden'>
            <img src={ImagePic3} alt="pic3" />
          </div>
          <div className='mt-6 md:mt-8 lg:mt-10'>
            <h4 className='font-semibold text-xl md:text-[2rem]/[100%] lg:text-[2.5rem]/[100%]'>Психотип, ценности, сильные стороны</h4>
            <p className='font-medium text-sm lg:text-base mt-4 md:mt-6'>
              Подбор пары «наставник-ребёнок» по уровню совместимости и уровню эмоциональной зрелости
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className='bg-light-gray rounded-2xl lg:rounded-3xl p-4 lg:p-10'>
          <div className='bg-gradient-to-b to-[#D8FDFF] from-[#EDF2FE] size-41 md:size-45 lg:size-60 mx-auto rounded-full overflow-hidden'>
            <img src={ImagePic4} alt="pic4" />
          </div>
          <div className='mt-6 md:mt-8 lg:mt-10'>
            <h4 className='font-semibold text-xl md:text-[2rem]/[100%] lg:text-[2.5rem]/[100%]'>
              Мотивация, интересы, синергия
            </h4>
            <p className='font-medium text-sm lg:text-base mt-4 md:mt-6'>
              Подбор пары «наставник-ребёнок» по уровню совместимости и уровню эмоциональной зрелости
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className='bg-light-gray rounded-2xl lg:rounded-3xl p-4 lg:p-10'>
          <div className='bg-gradient-to-b to-[#D8FDFF] from-[#EDF2FE] size-41 md:size-45 lg:size-60 mx-auto rounded-full overflow-hidden'>
            <img src={ImagePic5} alt="pic5" />
          </div>
          <div className='mt-6 md:mt-8 lg:mt-10'>
            <h4 className='font-semibold text-xl md:text-[2rem]/[100%] lg:text-[2.5rem]/[100%]'>
              Баланс ролевых моделей, вовлеченность
            </h4>
            <p className='font-medium text-sm lg:text-base mt-4 md:mt-6'>
              Формирование форум-групп с разной мотивацией, чтобы участники усиливали друг друга и получали новый опыт
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className='bg-light-gray rounded-2xl lg:rounded-3xl p-4 lg:p-10'>
          <div className='bg-gradient-to-b to-[#D8FDFF] from-[#EDF2FE] size-41 md:size-45 lg:size-60 mx-auto rounded-full overflow-hidden'>
            <img src={ImagePic6} alt="pic6" />
          </div>
          <div className='mt-6 md:mt-8 lg:mt-10'>
            <h4 className='font-semibold text-xl md:text-[2rem]/[100%] lg:text-[2.5rem]/[100%]'>
              Поведенческий профиль эмоций, реакций
            </h4>
            <p className='font-medium text-sm lg:text-base mt-4 md:mt-6'>
              На основе ответов ребёнка собираются данные для составления дорожной карты ребёнка и наставника
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupsForum