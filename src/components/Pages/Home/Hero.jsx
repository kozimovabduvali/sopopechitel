import IconGlobe from '../../../assets/icons/globe.svg'
import ImageGlobus from '../../../assets/images/global.png'
import { useState, useEffect } from "react";
import ContactForm from '../../Form/ContactForm';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);


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
        <p className="max-w-170 font-medium text-gray text-sm md:text-xl  leading-none mt-10 md:mt-6">
          При участии наставников и&nbsp;специалистов проекта создаём среду для поддержки и&nbsp;развития детей
          в&nbsp;сложных жизненных обстоятельствах
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
              <h2 className='font-semibold text-xl md:text-[32px]  leading-none'>
                Ваш отклик — наша опора. Оставьте свои контактные данные и мы расскажем, как ваше участие может изменить будущее детей
              </h2>
              <img className='absolute z-0 top-1/4 md:top-1/3 lg:top-auto left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 lg:bottom-0' src={ImageGlobus} alt="ImageGlobus" />
            </div>

            {/* Right Form */}
            <ContactForm className='mt-12'/>

          </div>
        </div>
      )}
    </>
  );
}
