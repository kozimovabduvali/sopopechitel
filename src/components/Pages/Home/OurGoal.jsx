import React from "react";
import HighlightTexts from "../../shared/HighlightTexts";
import ButtonLink from "../../shared/ButtonLink";

function OurGoal() {
  return (
    <div>
      <h3 className="font-extrabold md:text-xl uppercase">Наша цель</h3>
      <div className="flex flex-col md:flex-row gap-x-5 md:gap-x-10 lg:gap-x-19 gap-y-10 mt-6 md:mt-8 lg:mt-10">
        <p className="lg:max-w-90 leading-[100%] font-medium md:text-xl">
          Стремимся дать каждому ребёнку шанс вырасти благополучным взрослым
        </p>
        {/* Right */}
        <div className="w-full max-w-211.5 space-y-8 md:space-y-15 lg:space-y-18 ml-auto">
          <div>
            <HighlightTexts
              text={"Формируем сообщество взрослых, готовых к осознанной и устойчивой поддержке детей"}
              wordClassName="font-semibold text-xl md:text-[2rem]  lg:text-[2.5rem] leading-[100%]"
            />

            <ButtonLink arrowRight className="mt-6">
              Как вы можете помочь
            </ButtonLink>
          </div>
          <div>
            <HighlightTexts
              text={"Создаём масштабируемую модель наставничества с методологиейи ИИ-сопровождением"}
              wordClassName="font-semibold text-xl md:text-[2rem] lg:text-[2.5rem] leading-[100%]"
            />

            <ButtonLink arrowRight className="mt-6">
              Как внедряем ИИ модель
            </ButtonLink>
          </div>
        </div>
      </div>

      <HighlightTexts
        containerClassName="max-w-200 mx-auto pt-25 md:py-30"
        text={"Создаём масштабируемую модель наставничества с методологиейи ИИ-сопровождением"}
        wordClassName="font-semibold text-center text-[2rem]/[100%] md:text-5xl lg:text-[64px]/[100%]"
      />
    </div>
  );
}

export default OurGoal;
