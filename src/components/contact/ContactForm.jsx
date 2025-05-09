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

  const [focusedInput, setFocusedInput] = useState(null);
  const [invalidFields, setInvalidFields] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setInvalidFields((prev) => prev.filter((field) => field !== name)); // agar yozilsa, xatolikni olib tashla
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ["name", "email", "phone"];
    const emptyFields = requiredFields.filter((field) => !formData[field]);
    if (emptyFields.length > 0) {
      setInvalidFields(emptyFields);
      return;
    }

    console.log("Form submitted:", formData);
  };

  const getInputClass = (name) => {
    let baseClass =
      "w-full border-b bg-transparent focus:border-dark focus:outline-none rounded-none px-0 py-2";
    if (invalidFields.includes(name)) {
      baseClass += " placeholder-red-500";
    } else {
      baseClass += " border-gray";
    }
    return baseClass;
  };

  const getPlaceholder = (name, defaultText) =>
    focusedInput === name ? "" : defaultText;

  return (
    <div className="relative w-full min-h-[504px] overflow-hidden rounded-2xl">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-[url('/contact-form-bg.png')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div
        className="absolute max-md:hidden bottom-0 left-0 z-10 w-1/2 h-full bg-[url('/contact-line.png')] bg-contain bg-left-bottom bg-no-repeat"
        aria-hidden="true"
      />

      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2">
        {/* Left */}
        <div className="flex items-start pl-4 py-4 md:pl-8 md:py-8">
          <h2 className="md:text-[40px] sm:text-[32px] text-[20px] font-manrope font-semibold text-dark leading-tight">
            Мы ищем осознанных взрослых, чтобы подарить детям будущее, полное
            возможностей
          </h2>
        </div>

        {/* Right - Form */}
        <div className="px-4 py-4 md:px-8 md:py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block font-medium text-dark">
                Ваше имя*
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                placeholder={getPlaceholder("name", "Введите имя")}
                onChange={handleChange}
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput(null)}
                className={getInputClass("name")}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium text-dark">
                Ваш Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                placeholder={getPlaceholder("email", "Введите Email")}
                onChange={handleChange}
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
                className={getInputClass("email")}
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block font-medium text-dark">
                Ваш телефон*
              </label>
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                placeholder={getPlaceholder("phone", "+7 (888) 888 88 88")}
                onChange={handleChange}
                onFocus={() => setFocusedInput("phone")}
                onBlur={() => setFocusedInput(null)}
                className={getInputClass("phone")}
              />
            </div>

            {/* Comment */}
            <div className="space-y-2">
              <label htmlFor="comment" className="block font-medium text-dark">
                Добавьте комментарий
              </label>
              <textarea
                id="comment"
                name="comment"
                placeholder={getPlaceholder("comment", "Добавьте комментарий")}
                value={formData.comment}
                onChange={handleChange}
                onFocus={() => setFocusedInput("comment")}
                onBlur={() => setFocusedInput(null)}
                className="w-full border-b border-gray bg-transparent focus:border-dark focus:outline-none rounded-none px-0 py-2 resize-none"
              />
            </div>

            {/* Agreement */}
            <div className="flex items-start space-x-2">
              <label htmlFor="agreement" className="text-gray">
                Нажимая кнопку Оставить заявку, вы соглашаетесь с условиями{" "}
                <Link to="#" className="font-bold text-black">
                  Пользовательского соглашения
                </Link>
              </label>
            </div>

            {/* Submit */}
            <button className="border border-dark rounded-xl inline-flex items-center transition duration-200 hover:bg-dark hover:text-white gap-3 h-9 px-5">
              <span className="font-medium">Оставить заявку</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="12" fill="none">
                <path
                  fill="currentColor"
                  d="M40.53 6.53a.75.75 0 0 0 0-1.06L35.757.697a.75.75 0 0 0-1.06 1.06L38.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L40.53 6.53ZM0 6v.75h40v-1.5H0V6Z"
                ></path>
              </svg>
            </button>
          </form>
        </div>

        {/* Mobile Decorative Line */}
        <img src="/contact-line.png" className="w-[359px] md:hidden z-10" alt="" />
      </div>
    </div>
  );
}