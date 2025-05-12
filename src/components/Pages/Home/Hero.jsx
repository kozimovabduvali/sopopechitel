import React from "react";
import IconGlobe from "../../../assets/icons/globe.svg";
import ButtonLink from "../../shared/ButtonLink";
function Hero() {
  return (
    <>
      <div className="max-w-245 flex flex-col items-center text-center mx-auto px-5">
        <div className="border border-accent rounded-lg text-accent backdrop-blur-2xl inline-flex items-center gap-2 px-2 py-1">
          <img className="size-4 lg:size-6" src={IconGlobe} alt="" />
          <span className="font-medium text-sm md:text-base">СИСТЕМА НАСТАВНИЧЕСТВА</span>
        </div>
        <h1 className="font-semibold text-4xl md:text-6xl lg:text-[80px] leading-[90%] mt-4 md:mt-6">
          Помогаем детям стать успешными взрослыми
        </h1>
        <p className="max-w-170 font-medium text-gray text-sm md:text-xl leading-[100%] mt-10 md:mt-6">
          При участии наставников и&nbsp;специалистов проекта создаём среду для поддержки и&nbsp;развития детей
          в&nbsp;сложных жизненных обстоятельствах
        </p>

        <ButtonLink size="xl" variant="filled" arrowRight className="mt-10 md:mt-15">
          Хочу помочь
        </ButtonLink>
      </div>
    </>
  );
}

export default Hero;
