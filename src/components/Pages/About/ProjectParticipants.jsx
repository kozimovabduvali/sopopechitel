import React from 'react'
import IconShape from '../../../assets/icons/shape.svg'

const participants = [
  {
    title: 'Куратор',
    description: '', // Icon o‘rniga bo‘sh
  },
  {
    title: 'Психолог',
    description:
      'Психолог сопровождает каждую пару, помогает наладить общение, разрешить возникающие вопросы и оказать профессиональную поддержку',
  },
  {
    title: 'Наставник',
    description:
      'Выстраивает доверительные отношения с ребенком, становится надёжным проводником в его жизни, приобретает ценный опыт осознанного взаимодействия',
  },
  {
    title: 'Ребенок',
    description:
      'Получает значимого взрослого, который помогает адаптироваться к самостоятельной жизни, достичь своих целей, приобрести навыки и реализовать себя',
  },
]

function ProjectParticipants() {
  return (
    <>
      <div>
        <h3 className="font-extrabold md:text-xl uppercase">
          Участники проекта
        </h3>
        <h2 className="font-semibold text-xl md:text-[2rem]/[100%] lg:text-[2.5rem]/[100%] mt-6 md:mt-8 lg:mt-10">
          Сотрудничаем с&nbsp;детскими домами, семейными центрами и&nbsp;другими
          благотворительными проектами, чтобы поддержать детей, оставшихся без
          опоры семьи
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-15 lg:mt-18">
        {participants.map((item, index) => (
          <div key={index} className="py-6 px-4 rounded-3xl bg-light-gray">
            <h4 className="text-[2rem]/[100%]">{item.title}</h4>

            {index === 0 ? (
              <img
                className="md:mt-5 ml-auto h-26 md:h-30 lg:h-39"
                src={IconShape}
                alt={item.title}
              />
            ) : (
              <p className="font-medium text-sm md:text-base leading-none mt-13.5 md:mt-10 lg:mt-25">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default ProjectParticipants
