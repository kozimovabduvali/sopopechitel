
export default function FoundersFund() {
  return (
    <div>
      <div>
        <h3 className="font-extrabold md:text-xl uppercase">
          Создатели фонда
        </h3>
        <h2 className="font-semibold text-xl md:text-[2rem] lg:text-[2.5rem] leading-[100%] mt-6 md:mt-8 lg:mt-10">
          &laquo;Мы&nbsp;не&nbsp;ставим себя впереди. Фонд&nbsp;&mdash; это система, где взрослые становятся ориентиром для подростка, постоянным и&nbsp;надёжным. Мы&nbsp;создали &bdquo;Сопопечителей&ldquo;, чтобы подростки не&nbsp;зависели от&nbsp;помощи, а&nbsp;научились строить свою траекторию&raquo;
        </h2>
      </div>

      <div className='max-w-212 md:ml-auto mt-10 md:mt-15 lg:mt-18 space-y-8 md:space-y-5'>
        {/* 1 */}
        <div className="flex flex-col md:flex-row md:items-end gap-x-6 gap-y-4">
          <div className="bg-dark/20 rounded-2xl w-53 md:w-80 lg:w-103 h-63 md:h-80 lg:h-120">
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-xl md:text-2xl lg:text-3xl leading-[100%]">
              Кристина Григорьян
            </h4>

            <p className="font-medium text-gray text-sm lg:text-base leading-[100%] mt-4 md:mt-5">
              Сооснователь Фонда «Сопопечители», более 7 лет в благотворительности, комплаенс-специалист бизнес-сообщества «Атланты», лидер клуба «Атланты.Благотворительность».
              <br /> Задачи: <br /> —организация и контроль выполнения благотворительных программ в Фонде; <br /> — настройка и оптимизация бизнес-процессов; <br /> — контроль целевого использования имущества и денежных средств фонда в соответствии с уставом;— взаимодействие с партнерами, благотворителями, наставниками и пр.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col md:flex-row md:items-end gap-x-6 gap-y-4">
          <div className="bg-dark/20 rounded-2xl w-53 md:w-80 lg:w-103 h-63 md:h-80 lg:h-120">
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-xl md:text-2xl lg:text-3xl leading-[100%]">
              Кирилл Степаненко
            </h4>

            <p className="font-medium text-gray text-sm lg:text-base leading-[100%] mt-4 md:mt-5">
              Серийный предприниматель, фаундер с опытом запуска более 5 цифровых продуктов. <br />
             <br /> Задачи: <br /> — разработка, масштабирование и развитие продукта; <br /> — выстраивание стратегии роста; <br /> — управление командой; <br /> — внедрение технологий искусственного интеллекта в процессы
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}