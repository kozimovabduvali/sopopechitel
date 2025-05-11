import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo-footer.svg";

const Footer = () => {
  const footerMenu = {
    "О фонде": [
      { text: "Роли в проекте", to: "/" },
      { text: "Миссия и ценности", to: "/" },
      { text: "Принципы работы", to: "/" },
      { text: "Команда", to: "/" },
    ],
    "Кому помогаем": [
      { text: "Истории ребят", to: "/" },
      { text: "Кому помогаем", to: "/" },
      { text: "Нужна помощь?", to: "/" },
      { text: "Что даёт проект", to: "/" },
    ],
    "Как помочь": [
      { text: "Роль наставника", to: "#mentor-project" },
      { text: "Как стать наставником", to: "/" },
      { text: "Спонсорство и материальная поддержка", to: "/" },
    ],
    "ИИ сопровождение": [
      { text: "Внедрение ИИ", to: "/" },
      { text: "Назначение ИИ ассистента", to: "/" },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-dark mt-20 lg:mt-25">
      <div className="max-w-330 mx-auto px-5 text-light-gray py-5 h-full">
        {/* Logo and scroll button */}
        <div className="flex items-center justify-between gap-3">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-5 border border-light-gray rounded-xl py-3 px-8 lg:px-13 transition duration-200 hover:bg-light-gray/10"
          >
            <span className="text-xl font-semibold text-light-gray">Наверх</span>
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.03033 0.469671C6.73744 0.176777 6.26256 0.176777 5.96967 0.469671L1.1967 5.24264C0.903805 5.53554 0.903805 6.01041 1.1967 6.3033C1.48959 6.5962 1.96447 6.5962 2.25736 6.3033L6.5 2.06066L10.7426 6.3033C11.0355 6.59619 11.5104 6.59619 11.8033 6.3033C12.0962 6.01041 12.0962 5.53553 11.8033 5.24264L7.03033 0.469671ZM6.5 17L7.25 17L7.25 1L6.5 1L5.75 1L5.75 17L6.5 17Z"
                fill="#F8F9F9"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="md:flex flex-row justify-between md:min-h-150 md:gap-10 gap-5 mt-10 h-full">
          {/* Left Column */}
          <div className="md:w-1/2 flex flex-col gap-3 justify-between md:min-h-150 h-full">
            <div className="max-md:flex max-sm:flex-col">
              <div>
                <p className="text-white font-normal sm:text-[2rem] text-xl">address@email</p>
                <ul className="space-y-4 mt-10">
                  <li className="font-medium text-xl">физический адрес</li>
                  <li className="font-medium text-xl">+ 7 (…)… — по вопросам</li>
                  <li className="font-medium text-xl">+ 7 (…)… — по вопросам проекта</li>
                </ul>
              </div>
              <div className="flex items-center gap-4 mt-9">
                <div className="bg-[#D9D9D9] rounded-full size-10 md:size-14 lg:size-18"></div>
                <div className="bg-[#D9D9D9] rounded-full size-10 md:size-14 lg:size-18"></div>
              </div>
            </div>

            {/* Hidden on mobile */}
            <div className="space-y-5 leading-none max-md:hidden mt-37">
              <p className="text-gray font-medium sm:text-xl text-base leading-[100%]">
                Свидетельство о государственной регистрации автономной некоммерческой организации регистрационный №1143400000380 учетный №х
              </p>
              <p className="text-gray font-medium sm:text-xl text-base leading-[100%]">
                Автономная некоммерческая организация дополнительного профессионального образования «Академия развития компетенций»
                <br />
                <span>ИНН 3 444 410 340 КПП 344 301 001</span>
              </p>
              <p className="text-gray font-medium sm:text-xl text-base leading-[100%]">
                @{new Date().getFullYear()} Сопопечители
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 h-full max-md:mt-10">
            <div className="grid grid-cols-2 gap-10">
              {Object.entries(footerMenu).map(([sectionTitle, links], index) => (
                <ul key={index} className="space-y-4 leading-none">
                  <li className="uppercase font-normal text-gray sm:text-base text-sm">{sectionTitle}</li>
                  {links.map(({ text, to }, idx) => (
                    <li key={idx} className="font-medium text-light-gray md:text-xl">
                      <Link className="transition duration-200 hover:opacity-75" to={to}>
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <p className="mt-10 underline font-medium text-light-gray sm:text-xl text-base leading-tight">
              Политика обработки персональных данных др политики
            </p>

            {/* Shown on mobile only */}
            <div className="space-y-5 leading-none md:hidden mt-10">
              <p className="text-gray font-medium sm:text-xl text-sm leading-[100%]">
                Свидетельство о государственной регистрации автономной некоммерческой организации регистрационный №1143400000380 учетный №х
              </p>
              <p className="text-gray font-medium sm:text-xl text-sm leading-[100%]">
                Автономная некоммерческая организация дополнительного профессионального образования «Академия развития компетенций»
                <br />
                <span>ИНН 3 444 410 340 КПП 344 301 001</span>
              </p>
              <p className="text-gray font-medium sm:text-xl text-sm leading-[100%]">
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
