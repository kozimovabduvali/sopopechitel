 ;
import IconGlobe from '../../../assets/images/globe.png';
import IconTarget from '../../../assets/images/target.png';
import IconAtom from '../../../assets/images/Atom.png';

function OurMission() {
  return (
    <>
      {/* Top */}
      <div>
        <div className="flex items-center justify-between gap-5">
          <h3 className="font-extrabold md:text-xl uppercase">Наша миссия</h3>
          <button className="border border-dark rounded-xl hidden md:inline-flex items-center transition duration-200 hover:bg-dark hover:text-white gap-3 h-9 px-5">
            <span className="font-medium">Подробнее о фонде</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={41} height={12} fill="none">
              <path
                fill="currentColor"
                d="M40.53 6.53a.75.75 0 0 0 0-1.06L35.757.697a.75.75 0 0 0-1.06 1.06L38.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L40.53 6.53ZM0 6v.75h40v-1.5H0V6Z"
              />
            </svg>
          </button>
        </div>

        <h2 className="max-w-190 font-semibold text-xl md:text-[2rem] lg:text-[2.5rem] leading-[100%] mt-6 md:mt-8 lg:mt-10">
          Формируем у детей внутреннюю опору, развиваем мотивацию, помогаем определить цели сфорировать своё будущее
        </h2>

        {/* Mobile BTN */}
        <button className="border border-dark rounded-xl md:hidden inline-flex items-center transition duration-200 hover:bg-dark hover:text-white gap-3 h-9 px-5 mt-8">
          <span className="font-medium">Подробнее о фонде</span>
          <svg xmlns="http://www.w3.org/2000/svg" width={41} height={12} fill="none">
            <path
              fill="currentColor"
              d="M40.53 6.53a.75.75 0 0 0 0-1.06L35.757.697a.75.75 0 0 0-1.06 1.06L38.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L40.53 6.53ZM0 6v.75h40v-1.5H0V6Z"
            />
          </svg>
        </button>
      </div>

      {/* Bottom */}
      <div className="grid md:grid-cols-3 gap-5 pt-10 md:pt-15 lg:pt-18">
        {/* 1 */}
        <div className="bg-light-gray rounded-3xl p-4 lg:p-6">
          <div className="bg-gradient-to-b from-[#D8FDFF] to-[#EDF2FE] rounded-[10px] p-1.5 md:p-2.5 inline-flex items-center justify-center">
            <img className='size-7 md:size-9 lg:size-14' src={IconGlobe} alt="Globe" />
          </div>
          <div className="mt-10">
            <h4 className="text-2xl/[100%] lg:text-[2rem]/[100%]">Безопасность и&nbsp;доверие</h4>
            <p className="font-medium text-gray leading-[100%] mt-4">
              Работаем с&nbsp;детьми, которые остались без попечения родителей, и&nbsp;через систему наставничества создаём для них среду доверия, развития и&nbsp;поддержки
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="bg-light-gray rounded-3xl p-4 lg:p-6">
          <div className="bg-gradient-to-b from-[#D8FDFF] to-[#EDF2FE] rounded-[10px] p-1.5 md:p-2.5 inline-flex items-center justify-center">
            <img className='size-7 md:size-9 lg:size-14' src={IconTarget} alt="IconTarget" />
          </div>
          <div className="mt-10">
            <h4 className="text-2xl/[100%] lg:text-[2rem]/[100%]">Ответственное наставничество</h4>
            <p className="font-medium text-gray leading-[100%] mt-4">
              Наставник&nbsp;&mdash; осознанный взрослый, прошедший многоэтапный отбор и&nbsp;обучение, понимает ответственность перед ребёнком, утратившим опору
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="bg-light-gray rounded-3xl p-4 lg:p-6">
          <div className="bg-gradient-to-b from-[#D8FDFF] to-[#EDF2FE] rounded-[10px] p-1.5 md:p-2.5 inline-flex items-center justify-center">
            <img className='size-7 md:size-9 lg:size-14' src={IconAtom} alt="IconAtom" />
          </div>
          <div className="mt-10">
            <h4 className="text-2xl/[100%] lg:text-[2rem]/[100%]">Долгосрочная <br /> работа</h4>
            <p className="font-medium text-gray leading-[100%] mt-4">
              Формируем пары &laquo;ребёнок&mdash;наставник&raquo;, где в&nbsp;первый год выстраиваются доверительные отношения, а&nbsp;затем&nbsp;&mdash; социальные маршруты развития ребёнка
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurMission;
