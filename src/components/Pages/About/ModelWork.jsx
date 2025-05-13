import IconPic from "../../../assets/icons/pic2.png";
import IconPic2 from "../../../assets/icons/pic.png";

const cardData = [
  {
    img: IconPic,
    title: 'Форум группа  «Ребёнок-наставник-психолог»',
    text: 'Создаётся безопасная среда для открытого общения, в которой дети развивают коммуникативные навыки, а наставники получают практический опыт взаимодействия в реальных ситуациях',
  },
  {
    img: IconPic2,
    title: 'Форум группа «Наставник-психолог»',
    text: 'Коллективно разбираются сложные ситуации в парах «наставник-ребёнок», разрабатываются эффективные стратегии взаимодействия и профилактика эмоционального выгорания наставников',
  },
];

function ModelWork() {
  return (
    <>
      <div className='flex flex-col md:flex-row gap-y-6'>
        <h3 className='font-extrabold leading-[100%] text-xl '>Модель работы</h3>
        <p className='md:text-2xl lg:text-[32px] leading-[100%] max-w-212 md:ml-auto'>
          Работа с&nbsp;участниками проекта основана по&nbsp;модели форум-групп. Для того чтобы наставничество было комфортным и&nbsp;эффективным для обеих сторон, на&nbsp;начальном этапе проводится индивидуальная работа с&nbsp;психологом. Это гарантирует безопасность, поддержку и&nbsp;способствует гармоничному развитию отношений между наставником и&nbsp;ребёнком
        </p>
      </div>

      <div className='grid grid-cols-2 gap-5 mt-10 md:mt-15 lg:mt-18'>
        {cardData.map((card, idx) => (
          <div key={idx} className='border border-dark/20 rounded-3xl lg:rounded-4xl p-4 lg:p-10'>
            <div className='flex items-center justify-center bg-gradient-to-b to-[#D8FDFF] from-[#EDF2FE] size-41 md:size-45 lg:size-70 rounded-full overflow-hidden mx-auto'>
              <img src={card.img} alt="Icon" />
            </div>
            <div className="mt-10 md:mt-18 lg:mt-28">
              <h3 className='font-semibold text-xl md:text-[2rem] lg:text-[2.5rem] leading-[100%] mt-6 md:mt-8 lg:mt-10'>
                {card.title}
              </h3>
              <p className="font-medium text-gray text-sm lg:text-base leading-[100%] mt-4 md:mt-6">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ModelWork;
