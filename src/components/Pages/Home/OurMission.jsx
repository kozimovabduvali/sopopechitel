import React from "react";
import IconGlobe from "../../../assets/images/globe.png";
import IconTarget from "../../../assets/images/target.png";
import IconAtom from "../../../assets/images/atom.png";
import HighlightTexts from "../../shared/HighlightTexts";
import ButtonLink from "../../shared/ButtonLink";

function OurMission() {
  return (
    <>
      {/* Top */}

      <div className="relative">
        <h3 className="font-extrabold md:text-xl uppercase">Наша миссия</h3>
        <HighlightTexts
          text={
            "Формируем у детей внутреннюю опору, развиваем мотивацию, помогаем определить цели сфорировать своё будущее"
          }
          containerClassName="max-w-190 mt-6 md:mt-8 lg:mt-10"
          wordClassName="font-semibold text-xl md:text-[2rem] lg:text-[2.5rem] leading-none"
        />

        <ButtonLink arrowRight className="md:absolute top-0 right-0 mt-8 md:mt-0">
          Подробнее о фонде
        </ButtonLink>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl grid md:grid-cols-3 gap-5 pt-10 md:pt-15 lg:pt-18">
        {/* 1 */}
        <div className="bg-light-gray rounded-3xl p-4 lg:p-6">
          <div className="bg-gradient-to-b from-[#D8FDFF] to-[#EDF2FE] rounded-[10px] p-1.5 md:p-2.5 inline-flex items-center justify-center">
            <img className="size-7 md:size-9 lg:size-14" src={IconGlobe} alt="Globe" />
          </div>
          <div className="mt-10">
            <h4 className="text-2xl/[100%] lg:text-[2rem]/[100%]">Безопасность и&nbsp;доверие</h4>
            <p className="font-medium text-gray  leading-none mt-4">
              Работаем с&nbsp;детьми, которые остались без попечения родителей, и&nbsp;через систему наставничества
              создаём для них среду доверия, развития и&nbsp;поддержки
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="bg-light-gray rounded-3xl p-4 lg:p-6">
          <div className="bg-gradient-to-b from-[#D8FDFF] to-[#EDF2FE] rounded-[10px] p-1.5 md:p-2.5 inline-flex items-center justify-center">
            <img className="size-7 md:size-9 lg:size-14" src={IconTarget} alt="IconTarget" />
          </div>
          <div className="mt-10">
            <h4 className="text-2xl/[100%] lg:text-[2rem]/[100%]">Ответственное наставничество</h4>
            <p className="font-medium text-gray  leading-none mt-4">
              Наставник&nbsp;&mdash; осознанный взрослый, прошедший многоэтапный отбор и&nbsp;обучение, понимает
              ответственность перед ребёнком, утратившим опору
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="bg-light-gray rounded-3xl p-4 lg:p-6">
          <div className="bg-gradient-to-b from-[#D8FDFF] to-[#EDF2FE] rounded-[10px] p-1.5 md:p-2.5 inline-flex items-center justify-center">
            <img className="size-7 md:size-9 lg:size-14" src={IconAtom} alt="IconAtom" />
          </div>
          <div className="mt-10">
            <h4 className="text-2xl/[100%] lg:text-[2rem]/[100%]">
              Долгосрочная <br /> работа
            </h4>
            <p className="font-medium text-gray  leading-none mt-4">
              Формируем пары &laquo;ребёнок&mdash;наставник&raquo;, где в&nbsp;первый год выстраиваются доверительные
              отношения, а&nbsp;затем&nbsp;&mdash; социальные маршруты развития ребёнка
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurMission;
