import React from "react";

function About() {
  return (
    <div className="max-w-330 mx-auto px-4 pt-20 lg:pt-15">
      <div className="flex flex-col text-center justify-center">
        <p className="py-1 w-fit self-center px-2 rounded-md border border-accent flex items-center gap-1 text-accent">
          <img src="/year.png" width={22} height={22} alt="" />О ФОНДЕ
        </p>

        <h1 className="font-semibold text-dark md:text-[80px] sm:text-6xl text-[32px] text-center leading-none mt-6">
          Наставничество. Поддержка. Успешное будущее
        </h1>

        <p className="font-medium text-gray sm:text-[20px] text-sm text-center max-w-[936px] mx-auto w-full leading-none mt-10 md:mt-15 lg:mt-18">
          «Сопопечители» — это программа наставничества, которая помогает детям
          в трудной жизненной ситуации найти поддержку взрослого, развиваться и
          учиться строить своё будущее
        </p>
        <div className="w-full relative sm:min-h-[399px] h-55 lg:h-100 mt-18  md:mt-20">
          <img
            src="/about.png"
            className="object-cover w-full h-full absolute z-0 inset-0 rounded-lg"
            loading="lazy"
            alt=""
          />
          <img
            src="/arm.png"
            className="object-cover w-full h-full absolute inset-0 z-10 rounded-lg"
            loading="lazy"
            alt=""
          />
        </div>
      </div>

      {/* uchast */}
      <div className="mt-18 md:mt-20 lg:mt-25">
        <h4 className="uppercase font-extrabold md:text-[20px] text-[16px] text-dark">
          Участники проекта
        </h4>
        <h2 className="max-w-[957px] md:text-[40px] sm:text-[32px] text-[20px] leading-none font-semibold w-full text-dark mt-6 md:mt-8 lg:mt-10">
          Сотрудничаем с детскими домами, семейными центрами и другими
          благотворительными проектами, чтобы поддержать детей, оставшихся без
          опоры семьи
        </h2>

        <div className="grid gap-3 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-10 md:mt-15 lg:mt-18">
          <div className="bg-light-gray rounded-lg py-[24px] px-[16px] flex flex-col justify-between gap-5 max-sm:gap-7 ">
            <h1 className="text-dark text-[32px] font-normal">Куратор</h1>
            <img src="/slinder.png" className="self-end" alt="" />
          </div>
          <div className="bg-light-gray rounded-lg py-[24px] px-[16px] flex flex-col justify-between gap-5 max-sm:gap-7">
            <h1 className="text-[32px] font-normal">Психолог</h1>
            <p className="font-medium sm:text-[16px] text-sm">
              Психолог сопровождает каждую пару, помогает наладить общение,
              разрешить возникающие вопросы и оказать профессиональную поддержку
            </p>
          </div>
          <div className="bg-light-gray rounded-lg py-[24px] px-[16px] flex flex-col justify-between gap-5 max-sm:gap-7">
            <h1 className="text-[32px] font-normal">Наставник</h1>
            <p className="font-medium sm:text-[16px] text-sm">
              Выстраивает доверительные отношения с ребенком, становится
              надёжным проводником в его жизни, приобретает ценный опыт
              осознанного взаимодействия
            </p>
          </div>
          <div className="bg-light-gray rounded-lg py-[24px] px-[16px] flex flex-col justify-between gap-5 max-sm:gap-7">
            <h1 className="text-[32px] font-normal">Ребенок</h1>
            <p className="font-medium sm:text-[16px] text-sm">
              Получает значимого взрослого, который помогает адаптироваться к
              самостоятельной жизни, достичь своих целей, приобрести навыки и
              реализовать себя
            </p>
          </div>
        </div>
      </div>

      {/* Миссия и ценности */}
      <div className="mt-20 md:mt-25 space-y-10">
        <div className="md:flex flex-row md:justify-between gap-3 items-start">
          <p className="uppercase font-extrabold md:text-[20px] text-[16px] text-dark">
            Миссия и ценности
          </p>

          <p className="max-w-[847px] max-md:mt-6 w-full md:text-[32px] sm:text-[24px] leading-none font-normal">
            Помогаем детям, оставшимся без родительской поддержки, обрести
            значимого взрослого — наставника, который станет для них опорой,
            поддержит в трудных ситуациях и поможет поверить в свои силы
          </p>
        </div>

        {/* Radius */}
        <div className="flex flex-col md:flex-row -space-x-5 -space-y-7 md:space-y-0 items-center justify-center text-center mt-10 md:mt-15 lg:mt-18">
          {/* 1 */}
          <div className="border-[0.4px] border-accent rounded-full size-50 md:size-60 lg:size-80 xl:size-110 inline-flex items-center justify-center px-3">
            <h4 className="font-extrabold uppercase text-[16px] md:text-2xl lg:text-[20px] ">
              безопасность, равенство, доверие
            </h4>
          </div>
          {/* 2 */}
          <div className="border-[0.4px] border-accent rounded-full size-50 md:size-60 lg:size-80 xl:size-110 inline-flex items-center justify-center px-3">
            <h4 className="font-extrabold uppercase text-[16px] md:text-2xl lg:text-[20px]">
              многоуровневая система поддержки
            </h4>
          </div>
          {/* 3 */}
          <div className="border-[0.4px] border-accent rounded-full size-50 md:size-60 lg:size-80 xl:size-110 inline-flex items-center justify-center px-3">
            <h4 className="font-extrabold uppercase text-[16px] md:text-2xl lg:text-[20px]">
              фокус на практический результат
            </h4>
          </div>
        </div>
      </div>

      {/* Принцип работы */}
      <div className="mt-20 flex flex-col gap-5">
        <p className="uppercase font-extrabold md:text-[20px] text-[16px] text-dark">
          Принцип работы
        </p>

        <p className="font-semibold md:text-[40px] sm:text-[30px] text-[20px] leading-none">
          Создаем систему взаимодействия между <br /> наставником и ребёнком
        </p>

        <div className="flex w-full justify-end mt-10">
          <div className="sm:flex flex-row max-sm:space-y-5 gap-5 max-w-[847px] w-full justify-end">
            <div className="space-y-4">
              <h1 className="font-semibold text-[20px]">
                Работа с наставниками
              </h1>
              <p className="leading-none text-dark font-medium text-[16px]">
                Наставник проходит многоступенчатый отбор и обучение, получает
                необходимое сопровождение команды специалистов и доступ к
                digital инструментарию, чтобы выстроить доверительные отношения
                с ребёнком
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="font-semibold text-[20px]">Работа с детьми</h1>
              <p className="leading-none text-dark font-medium text-[16px]">
                Организуем дополнительную помощь в формате юридического
                сопровождения, предоставления доступа к образовательным
                программам и профориентационным мероприятиям, а также поддержка
                мотивации к участию в программах фонда
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="my-20 text-center mx-auto md:text-[64px] sm:text-[48px] text-[32px] sm:font-bold font-semibold leading-none max-w-[837px] w-full">
        Мы стремимся выстроить для каждого ребёнка индивидуальный путь
        поддержки, учитывая его цели и жизненные обстоятельства
      </p>

      {/* Модель работы */}
      <div className="md:flex flex-row md:justify-between gap-3 items-start">
        <p className="uppercase font-extrabold md:text-[20px] text-[16px] text-dark">
          Модель работы
        </p>

        <p className="max-w-[847px] max-md:mt-6 w-full md:text-[32px] sm:text-[24px] leading-none font-normal">
          Работа с участниками проекта основана по модели форум-групп. Для того
          чтобы наставничество было комфортным и эффективным для обеих сторон,
          на начальном этапе проводится индивидуальная работа с психологом. Это
          гарантирует безопасность, поддержку и способствует гармоничному
          развитию отношений между наставником и ребёнком
        </p>
      </div>

      {/* cards */}
      <div className="my-20 grid md:grid-cols-2 grid-cols-1 gap-5 leading-none">
        <div className="border rounded-4xl border-dark/20 md:p-8 sm:p-6 p-4">
          <img src="card1.png" className="mx-auto" alt="" />

          <div className="mt-10 space-y-5">
            <h1 className="font-semibold md:text-[40px] sm:text-[32px] text-[20px]">
              Форум группа «Ребёнок-наставник-психолог»
            </h1>
            <p className="leading-none text-dark font-medium sm:text-[16px] text-sm">
              Создаётся безопасная среда для открытого общения, в которой дети
              развивают коммуникативные навыки, a наставники получают
              практический опыт взаимодействия в реальных ситуациях
            </p>
          </div>
        </div>
        <div className="border rounded-4xl border-dark/20 md:p-8 sm:p-6 p-4">
          <img src="card1.png" className="mx-auto" alt="" />

          <div className="mt-10 space-y-5">
            <h1 className="font-semibold md:text-[40px] sm:text-[32px] text-[20px]">
              Форум группа «Наставник-психолог»
            </h1>
            <p className="leading-none text-dark font-medium sm:text-[16px] text-sm">
              Коллективно разбираются сложные ситуации в парах
              «наставник-ребёнок», разрабатываются эффективные стратегии
              взаимодействия и профилактика эмоционального выгорания наставников
            </p>
          </div>
        </div>
      </div>

      {/* Создатели фонда */}
      <div className="my-20 space-y-5">
        <h1 className="uppercase font-extrabold sm:text-[20px] text-[16px]">
          Создатели фонда
        </h1>

        <p className="font-semibold md:text-[40px] leading-none sm:text-[32px] text-[20px]">
          «Мы не ставим себя впереди. Фонд — это система, где взрослые
          становятся ориентиром для подростка, постоянным и надёжным. Мы создали
          „Сопопечителей“, чтобы подростки не зависели от помощи, а научились
          строить свою траекторию»
        </p>

        <div className="w-full flex justify-end mt-10">
          <div className="flex flex-col gap-3 max-w-[836px] justify-end">
            <div className="sm:flex max-sm:space-y-5 gap-3 items-end">
              <img
                className="max-sm:w-[213px] max-md:w-[275px]"
                src="/person.png"
                alt=""
              />
              <div className="space-y-4">
                <h1 className="font-normal md:text-[32px] sm:text-[24px] text-[20px]">
                  Кристина Григорьян
                </h1>

                <ul className="text-gray text-[16px]">
                  <li>
                    Сооснователь Фонда «Сопопечители», более 7 лет в
                    благотворительности, комплаенс-специалист бизнес-сообщества
                    «Атланты», лидер клуба «Атланты.Благотворительность».{" "}
                  </li>
                  <li>Задачи:</li>
                  <li>
                    — организация и контроль выполнения благотворительных
                    программ в Фонде;
                  </li>
                  <li>— настройка и оптимизация бизнес-процессов;</li>
                  <li>
                    — контроль целевого использования имущества и денежных
                    средств фонда в соответствии c уставом;
                  </li>
                  <li>
                    —взаимодействие c партнерами, благотворителями, наставниками
                    и пр.
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:flex sm:flex max-sm:space-y-5  gap-3 items-end">
              <img
                className="max-sm:w-[213px] max-md:w-[275px]"
                src="/person.png"
                alt=""
              />
              <div className="space-y-4">
                <h1 className="font-normal md:text-[32px] sm:text-xl text-[20px]">
                  Кирилл Степаненко
                </h1>

                <ul className="text-gray">
                  <li>
                    Серийный предприниматель, фаундер c опытом запуска более 5
                    цифровых продуктов.
                  </li>
                  <li>Задачи:</li>
                  <li>— разработка, масштабирование и развитие продукта;</li>
                  <li>— выстраивание стратегии роста;</li>
                  <li>— управление командой;</li>
                  <li>
                    —внедрение технологий искусственного интеллекта в процессы.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
