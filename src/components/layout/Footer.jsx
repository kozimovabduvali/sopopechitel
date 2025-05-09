import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerMenu = {
    "О фонде": [
      "Роли в проекте",
      "Миссия и ценности ",
      "Принципы работы",
      "Команда",
    ],
    "Кому помогаем": [
      "Истории ребят",
      "Кому помогаем",
      "Нужна помощь?",
      "Что даёт проект",
    ],
    "Как помочь": [
      "Роль наставника",
      "Как стать наставником",
      "Спонсорство и материальная поддержка",
    ],
    "ИИ сопровождение": ["Внедрение ИИ", "Назначение ИИ ассистента"],
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-dark mt-20 lg:mt-25">
      <div className="max-w-330 mx-auto px-5 text-light-gray py-5 h-full">
        {/* Top part with logo and scroll up button */}
        <div className="flex items-center justify-between gap-3">
          <Link to="/">
            <img src={"/footer-logo.png"} alt="Logo" />
          </Link>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 border border-light-gray rounded-xl py-3 px-5 transition duration-200 hover:bg-light-gray/10"
          >
            <span className="text-xl font-semibold text-light-gray">
              Наверх
            </span>
            <img src="/icon.png" alt="" />
          </button>
        </div>

        {/* Content */}
        <div className="md:flex flex-row justify-between md:min-h-150 md:gap-10 gap-5 mt-10 h-full ">
          {/* Left Column */}
          <div className="md:w-1/2 flex flex-col gap-3 justify-between md:min-h-150 h-full">
            <div className="max-md:flex max-sm:flex-col">
              <div>
                <p className="text-white font-normal sm:text-[2rem] text-xl">
                  address@email
                </p>
                <ul className="space-y-4 mt-10">
                  <li className="font-medium text-xl">физический адрес</li>
                  <li className="font-medium text-xl">
                    + 7 (…)… — по вопросам
                  </li>
                  <li className="font-medium text-xl">
                    + 7 (…)… — по вопросам проекта
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-4 mt-9">
                <div className="bg-[#D9D9D9] rounded-full size-10 md:size-14 lg:size-18"></div>
                <div className="bg-[#D9D9D9] rounded-full size-10 md:size-14 lg:size-18"></div>
              </div>
            </div>

            {/* Hidden on mobile */}
            <div className="space-y-5 leading-none max-md:hidden">
              <p className="text-gray font-medium sm:text-xl text-base">
                Свидетельство о государственной регистрации автономной
                некоммерческой организации регистрационный №1143400000380
                учетный №х
              </p>
              <p className="text-gray font-medium sm:text-xl text-base">
                Автономная некоммерческая организация дополнительного
                профессионального образования «Академия развития компетенций»
                <br />
                <span>ИНН 3 444 410 340 КПП 344 301 001</span>
              </p>
              <p className="text-gray font-medium sm:text-xl text-base">
                @{new Date().getFullYear()} Сопопечители
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 h-full max-md:mt-10">
            <div className="grid grid-cols-2 gap-10">
              {Object.entries(footerMenu).map(
                ([sectionTitle, links], index) => (
                  <ul key={index} className="space-y-4 leading-none">
                    <li className="uppercase font-normal text-gray sm:text-base text-sm">
                      {sectionTitle}
                    </li>
                    {links.map((linkText, idx) => (
                      <li
                        key={idx}
                        className="font-medium text-light-gray text-xl"
                      >
                        <Link className="transition duration-200 hover:opacity-75" to={"#"}>{linkText}</Link>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>

            <p className="mt-10 underline font-medium text-light-gray sm:text-xl text-base leading-tight">
              Политика обработки персональных данных др политики
            </p>

            {/* Shown on mobile only */}
            <div className="space-y-5 leading-none md:hidden max-md:mt-10">
              <p className="text-gray font-medium sm:text-xl text-base">
                Свидетельство о государственной регистрации автономной
                некоммерческой организации регистрационный №1143400000380
                учетный №х
              </p>
              <p className="text-gray font-medium sm:text-xl text-base">
                Автономная некоммерческая организация дополнительного
                профессионального образования «Академия развития компетенций»
                <br />
                <span>ИНН 3 444 410 340 КПП 344 301 001</span>
              </p>
              <p className="text-gray font-medium sm:text-xl text-base">
                @{new Date().getFullYear()} Сопопечители
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
