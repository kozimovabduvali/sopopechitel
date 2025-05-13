import IconGlobe from '../../../assets/icons/globe.svg'
import ImageGlobus from '../../../assets/images/global.png'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    // email: "",
    phone: "",
    comment: "",
    agreement: false,
  });
  const [focusedInput, setFocusedInput] = useState(null);
  const [invalidFields, setInvalidFields] = useState([]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setInvalidFields((prev) => prev.filter((field) => field !== name));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ["name", "email", "phone"];
    const emptyFields = requiredFields.filter((field) => !formData[field]);
    if (emptyFields.length > 0) {
      setInvalidFields(emptyFields);
      return;
    }

    const BOT_TOKEN = "7500612376:AAFD_ZoJzIT3AQZbI_eRQmNFPrx95yV5rWg";
    const CHANNEL_ID = "-1002561077638";
    const message = `
📋 Новая заявка:
👤 Имя: ${formData.name}
📱 Телефон: ${formData.phone}
💬 Комментарий: ${formData.comment || "Не указан"}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHANNEL_ID,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      if (response.ok) {
        alert("Ваша заявка успешно отправлена!");
        setFormData({
          name: "",
          // email: "",
          phone: "",
          comment: "",
          agreement: false,
        });
        setIsModalOpen(false);
      } else {
        alert("Ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      alert("Ошибка. Попробуйте позже.");
    }
  };

  const getInputClass = (name) =>
    `w-full border-b bg-transparent focus:border-dark focus:outline-none rounded-none px-0 py-2 ${invalidFields.includes(name) ? "placeholder-red-500 border-gray" : "border-gray"
    }`;

  const getPlaceholder = (name, text) =>
    focusedInput === name ? "" : text;

  return (
    <>
      {/* Hero Content */}
      <div className='max-w-245 flex flex-col items-center text-center mx-auto px-5'>
        <div className='border border-accent rounded-lg text-accent backdrop-blur-2xl inline-flex items-center gap-2 px-2 py-1'>
          <img className='size-4 lg:size-6' src={IconGlobe} alt="" />
          <span className='font-medium text-sm md:text-base'>СИСТЕМА НАСТАВНИЧЕСТВА</span>
        </div>
        <h1 className='font-semibold text-4xl md:text-6xl lg:text-[80px] tracking-[-2px] lg:tracking-[-4px] leading-[90%] mt-4 md:mt-6'>
          Помогаем детям стать успешными взрослыми
        </h1>
        <p className='max-w-170 font-medium text-gray text-sm md:text-xl leading-[100%] mt-10 md:mt-6'>
          При участии наставников и&nbsp;специалистов проекта создаём среду для поддержки и&nbsp;развития детей в&nbsp;сложных жизненных обстоятельствах
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className='h-11.5 bg-dark text-white rounded-xl inline-flex items-center gap-3 px-6 transition duration-200 hover:bg-dark/75 mt-10 md:mt-15'
        >
          <span className='font-semibold lg:text-xl'>Хочу помочь</span>
          <svg xmlns="http://www.w3.org/2000/svg" width={42} height={12} fill="none">
            <path fill="#fff" d="M41.03 6.53a.75.75 0 0 0 0-1.06L36.257.697a.75.75 0 0 0-1.06 1.06L39.439 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L41.03 6.53ZM.5 6v.75h40v-1.5H.5V6Z" />
          </svg>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed bg-black/25 backdrop-blur-[4px] flex items-center justify-center z-50 top-0 left-0 size-full p-4'>
          <div className='relative max-w-142 lg:max-w-266 w-full grid lg:grid-cols-2 gap-x-5 gap-y-20 bg-gradient-to-b to-[#D8FDFF] from-[#EDF2FE] rounded-3xl lg:rounded-4xl p-6 lg:p-10'>

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className='absolute z-10 right-4 md:right-7 lg:right-10 top-6 md:top-8 lg:top-10 p-1'
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.83077 0.236482L11.9902 10.3905L22.0417 0.338426C22.7267 -0.271743 23.4357 0.09256 23.719 0.398394C23.9007 0.619875 23.9944 0.90057 23.9823 1.18682C23.9701 1.47307 23.8529 1.74479 23.653 1.95005L13.6 12.0006L23.653 22.0481C24.0997 22.4229 24.0997 23.1575 23.7415 23.5683C23.3817 23.9776 22.7222 24.2145 22.1002 23.7287L11.9902 13.6107L1.86824 23.7332C1.42457 24.1305 0.693111 24.0496 0.33188 23.6553C-0.0308502 23.2595 -0.168748 22.5759 0.294408 22.0931L10.3804 12.0006L0.336376 1.95005C-0.0308505 1.54527 -0.158256 0.804673 0.336376 0.338426C0.831008 -0.127821 1.56846 -0.0633555 1.83077 0.236482Z" fill="#626D77" />
              </svg>

            </button>

            {/* Left Text & Image */}
            <div className='pr-10 lg:pr-0'>
              <h2 className='font-semibold text-xl md:text-[32px] leading-[100%]'>
                Ваш отклик — наша опора. Оставьте свои контактные данные и мы расскажем, как ваше участие может изменить будущее детей
              </h2>
              <img className='absolute z-0 top-1/4 md:top-1/3 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 lg:bottom-0' src={ImageGlobus} alt="ImageGlobus" />
            </div>

            {/* Right Form */}
            <div className='bg-white relative z-20 rounded-3xl mt-12'>
              <div className="p-4 md:p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="">
                  <div className='space-y-4'>
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block font-medium text-sm lg:text-base text-dark leading-[100%] py-2">
                        Введите имя
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

                    {/* Phone Input */}
                    <div>
                      <label htmlFor="phone" className="blockfont-medium text-sm lg:text-base text-dark leading-[100%] py-2">
                        Ваш телефон*
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        placeholder={getPlaceholder("phone", "+7 (___) ___ __ __")}
                        onChange={handleChange}
                        onFocus={() => setFocusedInput("phone")}
                        onBlur={() => setFocusedInput(null)}
                        className={getInputClass("phone")}
                      />
                    </div>
                    {/* Способ связи */}
                    <div>
                      <p className='font-medium text-sm lg:text-base text-dark leading-[100%]'>Способ связи</p>

                      <div className='flex flex-wrap items-center gap-4 pt-4'>
                        <Link to="#" className="border border-dark/20 rounded-lg h-8 flex items-center gap-x-2.5 px-2 transition duration-200 hover:bg-dark/10">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2497 14.1102L14.9297 12.4302C15.1559 12.2067 15.4422 12.0537 15.7538 11.9898C16.0653 11.9259 16.3887 11.9538 16.6847 12.0702L18.7322 12.8877C19.0313 13.0091 19.2878 13.2163 19.4693 13.4832C19.6508 13.7502 19.7492 14.0649 19.7522 14.3877V18.1377C19.7504 18.3572 19.7043 18.5742 19.6165 18.7755C19.5287 18.9767 19.4011 19.1582 19.2413 19.3088C19.0815 19.4595 18.8929 19.5762 18.6869 19.6521C18.4808 19.7279 18.2615 19.7613 18.0422 19.7502C3.69468 18.8577 0.799676 6.70765 0.252176 2.05765C0.22676 1.8293 0.249982 1.59816 0.320312 1.37943C0.390642 1.16071 0.506487 0.959347 0.660226 0.788605C0.813965 0.617862 1.00211 0.481606 1.21229 0.388801C1.42247 0.295995 1.64992 0.248743 1.87968 0.250153H5.50218C5.82543 0.25111 6.14101 0.348753 6.40832 0.530525C6.67563 0.712296 6.88245 0.969883 7.00217 1.27015L7.81967 3.31765C7.93986 3.61245 7.97053 3.93613 7.90784 4.24826C7.84514 4.56039 7.69188 4.84712 7.46717 5.07265L5.78718 6.75265C5.78718 6.75265 6.75467 13.3002 13.2497 14.1102Z" fill="#0D2D42" />
                          </svg>

                          <span className='font-medium text-sm lg:text-base leading-[100%]'>Телефон</span>
                        </Link>
                        <Link to="#" className="border border-dark/20 rounded-lg h-8 flex items-center gap-x-2.5 px-2 transition duration-200 hover:bg-dark/10">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 24.0001L1.687 17.8371C0.646 16.0331 0.099 13.9881 0.1 11.8911C0.103 5.33512 5.438 0.00012207 11.993 0.00012207C15.174 0.00112207 18.16 1.24012 20.406 3.48812C22.651 5.73612 23.887 8.72412 23.886 11.9021C23.883 18.4591 18.548 23.7941 11.993 23.7941C10.003 23.7931 8.042 23.2941 6.305 22.3461L0 24.0001ZM6.597 20.1931C8.273 21.1881 9.873 21.7841 11.989 21.7851C17.437 21.7851 21.875 17.3511 21.878 11.9001C21.88 6.43812 17.463 2.01012 11.997 2.00812C6.545 2.00812 2.11 6.44212 2.108 11.8921C2.107 14.1171 2.759 15.7831 3.854 17.5261L2.855 21.1741L6.597 20.1931ZM17.984 14.7291C17.91 14.6051 17.712 14.5311 17.414 14.3821C17.117 14.2331 15.656 13.5141 15.383 13.4151C15.111 13.3161 14.913 13.2661 14.714 13.5641C14.516 13.8611 13.946 14.5311 13.773 14.7291C13.6 14.9271 13.426 14.9521 13.129 14.8031C12.832 14.6541 11.874 14.3411 10.739 13.3281C9.856 12.5401 9.259 11.5671 9.086 11.2691C8.913 10.9721 9.068 10.8111 9.216 10.6631C9.35 10.5301 9.513 10.3161 9.662 10.1421C9.813 9.97012 9.862 9.84612 9.962 9.64712C10.061 9.44912 10.012 9.27512 9.937 9.12612C9.862 8.97812 9.268 7.51512 9.021 6.92012C8.779 6.34112 8.534 6.41912 8.352 6.41012L7.782 6.40012C7.584 6.40012 7.262 6.47412 6.99 6.77212C6.718 7.07012 5.95 7.78812 5.95 9.25112C5.95 10.7141 7.015 12.1271 7.163 12.3251C7.312 12.5231 9.258 15.5251 12.239 16.8121C12.948 17.1181 13.502 17.3011 13.933 17.4381C14.645 17.6641 15.293 17.6321 15.805 17.5561C16.376 17.4711 17.563 16.8371 17.811 16.1431C18.059 15.4481 18.059 14.8531 17.984 14.7291Z" fill="#25D366" />
                          </svg>


                          <span className='font-medium text-sm lg:text-base leading-[100%]'>WhatsApp</span>
                        </Link>
                        <Link to="#" className="border border-dark/20 rounded-lg h-8 flex items-center gap-x-2.5 px-2 transition duration-200 hover:bg-dark/10">
                          <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.51239 7.84896C7.41795 5.27597 11.3559 3.57971 13.3263 2.76016C18.9521 0.420168 20.1211 0.0136874 20.883 0.000265181C21.0506 -0.00268689 21.4253 0.0388448 21.668 0.235791C21.873 0.402089 21.9294 0.626734 21.9563 0.784402C21.9833 0.942071 22.0169 1.30124 21.9902 1.58189C21.6854 4.78516 20.3662 12.5586 19.6951 16.1463C19.4111 17.6644 18.852 18.1735 18.3107 18.2233C17.1343 18.3315 16.2409 17.4458 15.1015 16.6989C13.3186 15.5301 12.3113 14.8026 10.5807 13.6621C8.58058 12.3441 9.87715 11.6197 11.017 10.4358C11.3153 10.1259 16.4986 5.41129 16.5989 4.9836C16.6115 4.93011 16.6231 4.73072 16.5046 4.62544C16.3862 4.52016 16.2114 4.55616 16.0852 4.58479C15.9064 4.62538 13.0581 6.50801 7.54035 10.2327C6.73187 10.7878 5.99958 11.0583 5.34347 11.0442C4.62016 11.0285 3.2288 10.6352 2.19447 10.299C0.925826 9.88658 -0.0824703 9.66854 0.00532971 8.96818C0.0510613 8.60338 0.553413 8.23031 1.51239 7.84896Z" fill="url(#paint0_linear_1511_5545)" />
                            <defs>
                              <linearGradient id="paint0_linear_1511_5545" x1="1100" y1="0.00012207" x2="1100" y2="1809.7" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2AABEE" />
                                <stop offset="1" stop-color="#229ED9" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className='font-medium text-sm lg:text-base leading-[100%]'>Telegram</span>
                        </Link>
                      </div>
                    </div>

                    {/* Comment */}
                    <div>
                      <label htmlFor="comment" className="block font-medium text-sm lg:text-base text-dark leading-[100%] py-2">
                        Добавьте комментарий
                      </label>
                      <input
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        placeholder={getPlaceholder("comment", "Добавьте комментарий")}
                        onChange={handleChange}
                        onFocus={() => setFocusedInput("comment")}
                        onBlur={() => setFocusedInput(null)}
                        className="w-full border-b leading-none border-gray bg-transparent focus:border-dark focus:outline-none rounded-none px-0 py-2 resize-none"
                      />
                    </div>

                    {/* Agreement */}
                    <div className="text-sm lg:text-base leading-[100%] text-gray">
                      Нажимая кнопку Отправить, вы соглашаетесь на обработку персональных данных в соответствии с
                      <Link to="#" className='font-medium text-dark'>
                        Политикой конфиденциальности
                      </Link>
                    </div>

                  </div>
                  {/* Submit */}
                  <button className="bg-dark text-white rounded-xl inline-flex items-center transition duration-200 hover:bg-dark/75 gap-3 h-9 px-5 mt-6 md:mt-8 lg:mt-10">
                    <span className="font-medium">Отправить</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="12" fill="none">
                      <path fill="currentColor" d="M40.53 6.53a.75.75 0 0 0 0-1.06L35.757.697a.75.75 0 0 0-1.06 1.06L38.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L40.53 6.53ZM0 6v.75h40v-1.5H0V6Z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
