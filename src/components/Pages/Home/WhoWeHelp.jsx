import React from 'react'
import UserImage1 from '../../../assets/images/user_ilina.png'
import UserImage2 from '../../../assets/images/user_2.png'
import UserImage3 from '../../../assets/images/user_3.png'
import UserImage4 from '../../../assets/images/user_4.png'
import UserImage5 from '../../../assets/images/user_5.png'
import UserImage6 from '../../../assets/images/user_6.png'
import UserImage7 from '../../../assets/images/user_7.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const cardsData = [
  {
    name: 'Ильина Настя',
    age: '17 лет',
    img: UserImage1,
    description:
      'Анастасия добрая, отзывчивая, коммуникабельная, усердная и послушная. Несмотря на жизненные трудности, делится теплом с другими — учится в колледже на воспитателя. Имеет чёткую цель в жизни и хочет стать хорошим специалистом, чтобы помогать детям. Есть творческие увлечения: любит собирать пазлы от 1000 штук и интересуется маникюром. Несмотря на то, что Насте скоро 18 ей нужна поддержка и тепло.',
  },
  {
    name: 'Злобин Андрей',
    age: '16 лет',
    img: UserImage2,
    description:
      'Андрей - жизнерадостный, открытый и упорный. Легко находит общий язык как с детьми, так и с воспитателями, любит прогулки и проводить время с друзьями. А ещё интересуется разными вещами и стремится идти к своим целям. Играет в футбол, любит кино и смотреть новинки фильмов. Активно принимает участие в творческих мероприятиях связанных с приготовлением еды.',
  },
  {
    name: 'Колесников Дима',
    age: '11 лет',
    img: UserImage3,
    description:
      'Дмитрий добрый, открытый, улыбчивый, но в то же время ранимый и чувствительный. Любит внимание и общение, активно участвует в творческих и спортивных мероприятиях. Дмитрий любознательный, стремится к знаниям и активной жизни, увлекается историей и любит ухаживать за растениями. Ребенок сирота, мать и отец умерли. Нуждается во внимании и вере в свои силы.',
  },
  {
    name: 'Злобина Лида',
    age: '15 лет',
    img: UserImage4,
    description:
      'Лида открытая и добрая к окружающим. Всегда помогает по хозяйству и воспитателям с маленькими детьми. Увлекается творчеством: собирает алмазные мозаики, рисует и занимается танцами. Интересуется корейской культурой, любит мультики и книги анимэ. Изучает корейский язык.',
  },
  {
    name: 'Коломпар Толя',
    age: '17 лет',
    img: UserImage5,
    description:
      'Анатолий добрый, отзывчивый, эмпатичный и всегда готов прийти на помощь. Любит прогулки и проводить время с друзьями. Увлекается активными видами спорта, любит бокс и футбол, занимается восточными единоборствами. Интересуется техникой. Воспитанием Анатолия занимается дедушка.',
  },
  {
    name: 'Шаркози Лиза',
    age: '17 лет',
    img: UserImage6,
    description:
      'Елизавета добрая, но в связи с тем, что ребенок остался без мамы недоверчива к окружающим. Кроме тети у ребёнка родственников нет, однако тётя не посещает. Проявляет себя в творчестве: интересуется танцами и любит петь. Мечтает стать визажистом.',
  },
  {
    name: 'Коморов Дима',
    age: '13 лет',
    img: UserImage7,
    description:
      'Дмитрий открытый, добрый, вежливый и культурный. Всегда помогает воспитателям с малышами, помогает поддерживать чистоту в группах. Увлекается активным спортом: играет футбол и хочет заниматься боксом. Активно участвует в спортивных мероприятиях.',
  },
]

function WhoWeHelp() {
  return (
    <>
      {/* Section */}
      <div>
        <div className="flex items-center justify-between gap-5">
          <h3 className="font-extrabold md:text-xl uppercase">Кому мы помогаем</h3>
          <button className="border border-dark rounded-xl hidden md:inline-flex items-center transition duration-200 hover:bg-dark/10 gap-3 h-9 px-5">
            <span className="font-medium">Подробнее кому мы помогаем</span>
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

        <h2 className="max-w-190 font-semibold text-xl md:text-[2rem]/[100%] lg:text-[2.5rem]/[100%] mt-6 md:mt-8 lg:mt-10">
          Сотрудничаем с семейным центром помощи семье и детям
        </h2>

        {/* Mobile Button */}
        <button className="border border-dark rounded-xl md:hidden inline-flex items-center transition duration-200 hover:bg-dark/10 gap-3 h-9 px-5 mt-8">
          <span className="font-medium">Подробнее кому мы помогаем</span>
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

      {/* Grid View (Desktop) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-15 lg:mt-18">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-light-gray rounded-3xl cursor-pointer p-4 lg:p-6">
            <div className="size-41 rounded-full overflow-hidden mx-auto">
              <img className="size-full object-cover" src={card.img} alt="User" />
            </div>
            <div className="mt-10 lg:mt-15">
              <h4 className="text-2xl lg:text-[2rem]/[100%]">{card.name}</h4>
              <span className="inline-block font-medium text-gray mt-4">{card.age}</span>
              <p className="line-clamp-3 mt-4">{card.description}</p>
            </div>
          </div>
        ))}

        {/* 8th card - Button only */}
        <div className="bg-gradient-to-b from-[#D8FDFF] to-[#EDF2FE] rounded-3xl flex items-center justify-center p-4 lg:p-6 cursor-pointer">
          <button className="text-blue font-medium hover:underline">
            Перейти к историям ребят →
          </button>
        </div>
      </div>

      {/* Slider View (Mobile) */}
      <div className="md:hidden mt-10 -mx-4">
        <Swiper className='!px-4' spaceBetween={12} slidesPerView={1.2}>
          {cardsData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="bg-light-gray rounded-3xl cursor-pointer p-4">
                <div className="size-41 rounded-full overflow-hidden mx-auto">
                  <img className="size-full object-cover" src={card.img} alt="User" />
                </div>
                <div className="mt-10">
                  <h4 className="text-2xl">{card.name}</h4>
                  <span className="inline-block font-medium text-gray mt-4">{card.age}</span>
                  <p className="line-clamp-3 mt-4">{card.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='px-4'>
          {/* 8th card - Button (mobile view) */}
          <div className="bg-gradient-to-b from-[#D8FDFF] to-[#EDF2FE] rounded-3xl flex items-center justify-center p-4 mt-5 cursor-pointer h-40">
            <button className="text-blue font-medium hover:underline">
              Перейти к историям ребят →
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhoWeHelp
