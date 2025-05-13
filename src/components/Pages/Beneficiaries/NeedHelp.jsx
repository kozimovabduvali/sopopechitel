
const cardsData = [
  {
    number: '01',
    text: `К нам можно обратиться напрямую во время проводимых мероприятий`
  },
  {
    number: '02',
    text: `Можно подать заявку через воспитателя`
  },
  {
    number: '03',
    text: `Можно оставить заявку на нашем сайте самостоятельно`
  },
  {
    number: '04',
    text: `Получить рекомендацию от организации-партнёра`
  },
]

function NeedHelp() {
  return (
    <>
      <div className='space-y-10'>
        <h3 className='font-extrabold md:text-xl leading-[100%] uppercase'>Нужна помощь?</h3>
        <h2 className='font-semibold text-xl md:text-[32px] lg:text-[40px] leading-[100%]'>
          Мы приглашаем к участию в проекте детей, которые не имеют досточных навыков социализации и инструментов для развития своих сильных сторон, необходимых в самостоятельной взрослой жизни. Участие в проекте — исключительно по желанию самого ребёнка. Мы помогаем тем, кто осознанно стремится найти наставника и готов развиваться
        </h2>
        <div className='md:max-w-142 lg:max-w-212 md:ml-auto'>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-15 lg:mt-18">
        {cardsData.map((card) => (
          <div key={card.id} className="bg-light-gray rounded-2xl lg:rounded-3xl flex flex-col gap-y-10  lg:gap-y-25 px-4 py-6">
            <h5 className="text-[32px] leading-[100%]">{card.number}</h5>
            <p className="font-medium text-sm md:text-base leading-[100%] line-clamp-2">{card.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default NeedHelp