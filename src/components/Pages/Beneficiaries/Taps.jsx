import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

import UserCreation1 from "../../../assets/images/user_6.png";
import UserSport1 from "../../../assets/images/user_7.png";
import UserCooking1 from "../../../assets/images/user_2.png";
import UserAvatarGirl1 from "../../../assets/images/avatar-girl1.png";

const cardsData = [
  // category: "творчество",
  {
    id: 1,
    name: "Шаркози Лиза",
    age: "17 лет",
    category: "творчество",
    image: UserCreation1,
    desc: `Лиза добрая, но в связи с тем, что ребенок остался без мамы, недоверчива к окружающим. Кроме тети у ребёнка родственников нет, однако тётя не посещает. Проявляет себя в творчестве: интересуется танцами и любит петь. Мечтает стать визажистом. Проживает в г. Пушкино, рп. Правдинский, ул. Разина д. 7`,
  },
  // category: "спорт",
  {
    id: 2,
    name: "Коморов Дима",
    age: "13 лет",
    category: "спорт",
    image: UserSport1,
    desc: `Дима открытый, добрый, вежливый и культурный. Всегда помогает воспитателям с малышами, помогает поддерживать чистоту в группах. Увлекается активным спортом: играет футбол и хочет заниматься боксом. Активно участвует в спортивных мероприятиях. Проживает в г. Пушкино, рп. Правдинский, ул. Разина д. 7`,
  },
  // category: "кулинария",
  {
    id: 3,
    name: "Злобин Андрей",
    age: "16 лет",
    category: "кулинария",
    image: UserCooking1,
    desc: `Андрей — жизнерадостный, открытый и упорный. Легко находит общий язык как с детьми, так и с воспитателями, любит прогулки и проводить время с друзьями. А ещё интересуется разными вещами и стремится идти к своим целям. Играет в футбол, любит кино и смотреть новинки фильмов. Активно принимает участие в творческих мероприятиях связанных с приготовлением еды. Проживает в г. Пушкино, рп. Правдинский, ул. Разина д.7`,
  },
  // category "кулинария",
  {
    id: 4,
    name: "Коршунов Олег",
    age: "16 лет",
    category: "кулинария",
    image: UserAvatarGirl1,
    desc: `Олег добрый, но замкнутый ребёнок, но при этом внимательный и трудолюбивый. Проявляет интерес к кулинарии и планирует освоить профессию повара. Живёт с мамой-инвалидом. Семья неполная и в непростых бытовых условиях. Несмотря на это, мальчик сохраняет внутреннюю устойчивость, стараясь строить своё будущее. Физических и психических особенностей не имеет. Проживает в МО, г. Красноармейск, ул. Гагарина, д. 11, кв. 31`,
  }
];

const categories = [
  "все интересы",
  "спорт",
  "творчество",
  "кулинария",
  "обучение",
  "инженерия",
  "музыка",
  "танцы",
];

function Taps() {
  const [activeCategory, setActiveCategory] = useState("все интересы");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredCards =
    activeCategory === "все интересы"
      ? cardsData
      : cardsData.filter((card) => card.category === activeCategory);

  const visibleCards = filteredCards.slice(0, visibleCount);

  const handleShowMore = () => {
    if (visibleCount >= filteredCards.length) {
      setVisibleCount(9);
    } else {
      setVisibleCount((prev) => prev + 9);
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row gap-6">
      {/* Tabs Nav */}
      <div className="md:w-full lg:max-w-45 xl:max-w-55 -mx-4">
        {/* Mobile Swiper */}
        <div className="block md:hidden">
          <Swiper className="!pl-4 md:!pl-0" modules={[Mousewheel]} mousewheel={{ forceToAxis: true }} spaceBetween={10} slidesPerView={"auto"}>
            {categories.map((cat) => (
              <SwiperSlide key={cat} style={{ width: "160px" }}>
                <button
                  className={`w-full border h-max rounded-[40px] px-6 py-3 text-sm font-semibold transition duration-200 ${activeCategory === cat
                    ? "border-accent text-accent"
                    : "border-gray text-gray hover:bg-dark/10"
                    }`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(9);
                  }}
                >
                  {cat}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-1 gap-5 lg:gap-2.5 text-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`border h-max rounded-[40px] px-6 py-3 text-base font-semibold transition duration-200 ${activeCategory === cat
                ? "border-accent text-accent"
                : "border-gray text-gray hover:bg-dark/10"
                }`}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(9);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-239 mx-auto w-full">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 pb-10 lg:pb-15">
          {visibleCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between bg-light-gray rounded-4xl p-4 lg:p-6"
            >
              <div>
                <div className="size-50 md:size-41 lg:size-50 rounded-full overflow-hidden mx-auto">
                  <img src={card.image} alt="User" />
                </div>
                <div className="space-y-4 mt-10 lg:mt-15">
                  <h5 className="text-2xl leading-[100%]">{card.name}</h5>
                  <span className="inline-block font-medium text-gray text-sm lg:text-base leading-[100%]">
                    {card.age}
                  </span>
                  <p className="font-medium text-gray text-sm lg:text-base leading-[100%]">
                    {card.desc}
                  </p>
                </div>
              </div>
              <button className="w-max border border-dark rounded-xl inline-flex items-center transition duration-200 hover:bg-dark hover:text-white  gap-3 h-9 px-5 mt-8">
                <span className="font-medium">Стать наставником</span>
                <svg xmlns="http://www.w3.org/2000/svg" width={41} height={12} fill="none">
                  <path
                    fill="currentColor"
                    d="M40.53 6.53a.75.75 0 0 0 0-1.06L35.757.697a.75.75 0 0 0-1.06 1.06L38.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L40.53 6.53ZM0 6v.75h40v-1.5H0V6Z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {filteredCards.length > 9 && (
          <div className="text-center">
            <button
              onClick={handleShowMore}
              className="w-max flex items-center justify-center border border-gray text-gray rounded-[40px] h-9 lg:h-11.5 py-2 px-5 mx-auto transition duration-200 hover:bg-dark/10"
            >
              <span className="font-semibold lg:text-xl leading-[100%]">
                {visibleCount >= filteredCards.length ? "Скрыть" : "Загрузить ещё"}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Taps;
