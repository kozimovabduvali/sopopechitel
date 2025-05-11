import React from 'react';

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
        <div className="bg-light-gray rounded-3xl p-4 lg:p-6">
          <div className="bg-gradient-to-b from-[#D8FDFF] to-[#EDF2FE] rounded-[10px] p-1.5 md:p-2.5 inline-flex items-center justify-center">
            {/* SVG 1 */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-7  md:size-9 lg:size-14">
              <path
                stroke="#0190C3"
                strokeWidth={1.4}
                d="M53 27c0 14.36-11.64 26-26 26m26-26C53 12.64 41.36 1 27 1m26 26H1m26 26C12.64 53 1 41.36 1 27m26 26c7.301 0 13.22-11.64 13.22-26S34.301 1 27 1m0 52c-7.301 0-13.22-11.64-13.22-26S19.699 1 27 1M1 27C1 12.64 12.64 1 27 1"
              />
            </svg>
          </div>
          <div className="mt-10">
            <h4 className="text-2xl/[100%] lg:text-[2rem]/[100%]">Безопасность и доверие</h4>
            <p className="font-medium text-gray leading-[100%] mt-4">
              Работаем с детьми, которые остались без попечения родителей, и через систему наставничества создаём для них среду доверия, развития и поддержки
            </p>
          </div>
        </div>

        <div className="bg-light-gray rounded-3xl p-4 lg:p-6">
          <div className="bg-gradient-to-b from-[#D8FDFF] to-[#EDF2FE] rounded-[10px] p-1.5 md:p-2.5 inline-flex items-center justify-center">
            {/* SVG 2 */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-7  md:size-9 lg:size-14">
              <path
                stroke="#0190C3"
                strokeWidth={1.4}
                d="M54 28c0 14.36-11.64 26-26 26S2 42.36 2 28 13.64 2 28 2s26 11.64 26 26Z"
              />
              <path
                stroke="#0190C3"
                strokeWidth={1.4}
                d="M36.814 28a8.814 8.814 0 1 1-17.628 0 8.814 8.814 0 0 1 17.628 0Z"
              />
              <path
                stroke="#0190C3"
                strokeWidth={1.4}
                d="M45.627 28c0 9.735-7.892 17.627-17.627 17.627S10.373 37.735 10.373 28 18.265 10.373 28 10.373 45.627 18.265 45.627 28Z"
              />
            </svg>
          </div>
          <div className="mt-10">
            <h4 className="text-2xl/[100%] lg:text-[2rem]/[100%]">Ответственное наставничество</h4>
            <p className="font-medium text-gray leading-[100%] mt-4">
              Наставник — осознанный взрослый, прошедший многоэтапный отбор и обучение, понимает ответственность перед ребёнком, утратившим опору
            </p>
          </div>
        </div>

        <div className="bg-light-gray rounded-3xl p-4 lg:p-6">
          <div className="bg-gradient-to-b from-[#D8FDFF] to-[#EDF2FE] rounded-[10px] p-1.5 md:p-2.5 inline-flex items-center justify-center">
            {/* SVG 3 */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-7  md:size-9 lg:size-14">
              <g stroke="#0190C3" strokeWidth={1.4} clipPath="url(#a)">
                <path d="M20.017 19.348C32.904 6.461 46.926-.412 51.334 3.996c4.41 4.41-2.464 18.43-15.351 31.318C23.096 48.2 9.074 55.074 4.665 50.666c-4.408-4.41 2.465-18.43 15.352-31.318Z" />
                <path d="M35.983 19.348c12.887 12.887 19.76 26.909 15.352 31.318-4.41 4.408-18.43-2.465-31.318-15.352C7.13 22.427.257 8.405 4.665 3.996c4.41-4.408 18.43 2.465 31.318 15.352Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h56v56H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="mt-10">
            <h4 className="text-2xl/[100%] lg:text-[2rem]/[100%]">Долгосрочная <br /> работа</h4>
            <p className="font-medium text-gray leading-[100%] mt-4">
              Формируем пары «ребёнок–наставник», где в первый год выстраиваются доверительные отношения, а затем — социальные маршруты развития ребёнка
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurMission;
