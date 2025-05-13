import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Подача заявки',
    description: `Чтобы стать наставником, необходимо подать заявку и пройти первичный отбор. Для этого нужно заполнить анкету, в которой будут вопросы о мотивации, жизненном опыте и ожиданиях от наставничества. Также предлагается пройти психологическое тестирование.`,
    button: true,
  },
  {
    number: '02',
    title: 'Собеседование',
    description: `Следующий этап — онлайн-собеседование с куратором проекта. Во время интервью куратор уточнит мотивы участия, оценит готовность к долгосрочному взаимодействию и обсудит возможные сложности и ожидания.`,
  },
  {
    number: '03',
    title: 'Встреча с психологом',
    description: `Чтобы стать наставником, необходимо подать заявку и пройти первичный отбор. Для этого нужно заполнить анкету, в которой будут вопросы о мотивации, жизненном опыте и ожиданиях от наставничества. Также предлагается пройти психологическое тестирование.`,
  },
  {
    number: '04',
    title: 'Обучение тренинги',
    description: `Обучение проходит в формате онлайн-курса, в котором рассматриваются основы детской психологии, особенности работы с подростками, пережившими утрату семьи, а также этика наставничества и границы в работе с детьми. Очные тренинги включают разбор реальных кейсов, практику общения с детьми в безопасной среде и работу с травмирующим опытом.`,
  },
  {
    number: '05',
    title: 'Участие в форум-группе',
    description: `Наставники участвуют в общих встречах с детьми и другими наставниками, знакомятся с историями детей и учатся правильно формулировать поддержку. После получения обратной связи от психологов и самих детей, формируется пара наставник-ребёнок для долгосрочного сотрудничества.`,
  },
];

function BecomeMentor() {
  return (
    <div>
      <h3 className="font-extrabold md:text-xl uppercase">Как стать наставником</h3>
      <div className="mt-10 space-y-5 lg:space-y-6">
        {steps.map(({ number, title, description, button }) => (
          <div
            key={number}
            className="bg-light-gray grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 rounded-2xl lg:rounded-3xl p-4 lg:p-6"
          >
            <span className="font-semibold text-2xl lg:text-[40px]/[100%] hidden lg:inline-block">{number}</span>
            <div className="flex items-center h-max gap-5 md:font-semibold text-2xl lg:text-[40px]/[100%]">
              <span className="lg:hidden inline-block">{number}</span>
              <h3 dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }} />
            </div>
            <div>
              <p className="font-medium">{description}</p>
              {button && (
                <button className="border border-dark rounded-xl inline-flex items-center transition duration-200 hover:bg-dark hover:text-white  gap-3 h-9 px-5 mt-6">
                  <span className="font-medium">Подробнее о фонде</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={41} height={12} fill="none">
                    <path
                      fill="currentColor"
                      d="M40.53 6.53a.75.75 0 0 0 0-1.06L35.757.697a.75.75 0 0 0-1.06 1.06L38.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L40.53 6.53ZM0 6v.75h40v-1.5H0V6Z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BecomeMentor;
