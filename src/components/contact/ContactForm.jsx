import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleCheckboxChange = (e) => {
  //   setFormData((prev) => ({ ...prev, agreement: e.target.checked }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative w-full min-h-[504px] overflow-hidden rounded-2xl">
      {/* Background with decorative lines using CSS background */}
      <div
        className="absolute inset-0 z-0 bg-[url('/contact-form-bg.png')] bg-cover bg-center"
        aria-hidden="true"
      />

      <div
        className="absolute max-md:hidden bottom-0 left-0 z-10 w-1/2 h-full bg-[url('/contact-line.png')] bg-contain bg-left-bottom bg-no-repeat"
        aria-hidden="true"
      />

      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Heading */}
        <div className="flex items-start pl-4 py-4 md:pl-8 md:py-8">
          <h2 className="md:text-[40px] sm:text-[32px] text-[20px] font-manrope md:text-4xl font-semibold text-dark leading-tight">
            Мы ищем осознанных взрослых, чтобы подарить детям будущее, полное
            возможностей
          </h2>
        </div>

        {/* Right side - Form */}
        <div className="px-4 py-4 md:px-8 md:py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-[16px] font-medium text-dark"
              >
                Ваше имя*
              </label>
              <input
                id="name"
                name="name"
                placeholder="Введите имя"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-gray bg-transparent focus:border-dark focus:outline-none rounded-none px-0 py-2"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-[16px] font-medium text-dark"
              >
                Ваш Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Введите Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray bg-transparent focus:border-dark focus:outline-none rounded-none px-0 py-2"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-[16px] font-medium text-dark"
              >
                Ваш телефон*
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="+7 (888) 888 88 88"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-b border-gray bg-transparent focus:border-dark focus:outline-none rounded-none px-0 py-2"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="comment"
                className="block text-[16px] font-medium text-dark"
              >
                Добавьте комментарий
              </label>
              <textarea
                id="comment"
                name="comment"
                placeholder="Добавьте комментарий"
                value={formData.comment}
                onChange={handleChange}
                className="w-full border-b border-gray bg-transparent focus:border-dark focus:outline-none rounded-none px-0 py-2 resize-none"
              />
            </div>

            <div className="flex items-start space-x-2">
              <label htmlFor="agreement" className="text-[16px] text-gray">
                Нажимая кнопку Оставить заявку, вы соглашаетесь с условиями{" "}
                <Link href="#contact" className="font-bold text-black">
                  Пользовательского соглашения
                </Link>
              </label>
            </div>

            <button className="border border-dark rounded-xl inline-flex items-center transition duration-200 hover:bg-dark/10 gap-3 h-9 px-5">
              <span className="font-medium">Оставить заявку</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="41"
                height="12"
                fill="none"
              >
                <path
                  fill="#0D2D42"
                  d="M40.53 6.53a.75.75 0 0 0 0-1.06L35.757.697a.75.75 0 0 0-1.06 1.06L38.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L40.53 6.53ZM0 6v.75h40v-1.5H0V6Z"
                ></path>
              </svg>
            </button>
          </form>
        </div>
        <img
          src="/contact-line.png"
          className="w-[359px] md:hidden z-10"
          alt=""
        />
      </div>
    </div>
  );
}
