import ImagePic3 from '../../../assets/icons/pic3.svg';
import ImagePic4 from '../../../assets/icons/pic4.svg';
import ImagePic5 from '../../../assets/icons/pic5.svg';
import ImagePic6 from '../../../assets/icons/pic6.svg';

const data = [
  {
    img: ImagePic3,
    title: "Психотип, ценности, сильные стороны",
    description: "Подбор пары «наставник-ребёнок» по уровню совместимости и уровню эмоциональной зрелости",
  },
  {
    img: ImagePic4,
    title: "Мотивация, интересы, синергия",
    description: "Подбор пары «наставник-ребёнок» по уровню совместимости и уровню эмоциональной зрелости",
  },
  {
    img: ImagePic5,
    title: "Баланс ролевых моделей, вовлеченность",
    description: "Формирование форум-групп с разной мотивацией, чтобы участники усиливали друг друга и получали новый опыт",
  },
  {
    img: ImagePic6,
    title: "Поведенческий профиль эмоций, реакций",
    description: "На основе ответов ребёнка собираются данные для составления дорожной карты ребёнка и наставника",
  },
];

function GroupsForum() {
  return (
    <div>
      <div className="max-w-187">
        <h4 className="font-extrabold md:text-xl uppercase">
          Как ии помогает в работе форум групп
        </h4>
        <h3 className="font-semibold text-xl md:text-[2rem] lg:text-[2.5rem]  leading-none mt-6 md:mt-8 lg:mt-10">
          Архитектор доверия — модель, анализирующая данные о подростках и наставниках
        </h3>
      </div>
      {/* Card */}
      <div className="grid md:grid-cols-2 gap-5 mt-10 md:mt-15 lg:mt-18">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-light-gray rounded-2xl lg:rounded-3xl p-4 lg:p-10"
          >
            <div className="bg-gradient-to-b to-[#D8FDFF] from-[#EDF2FE] size-41 md:size-45 lg:size-60 mx-auto rounded-full overflow-hidden">
              <img src={item.img} alt={`pic${index + 3}`} />
            </div>
            <div className="mt-6 md:mt-8 lg:mt-10">
              <h4 className="font-semibold text-xl md:text-[2rem] lg:text-[2.5rem] ! leading-none">
                {item.title}
              </h4>
              <p className="font-medium text-sm lg:text-base  leading-none mt-4 md:mt-6">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupsForum;
