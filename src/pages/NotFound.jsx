import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/images/notfound.png';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-245 mx-auto text-center">
          <span className="inline-block">
            <img 
              src={NotFoundImage} 
              alt="0" 
              className="w-full  object-contain"
            />
          </span>
        <h2 className="text-4xl font-semibold mt-8">
          Страница не найдена
        </h2>
        
        <p className="text-gray text-base mt-6 max-w-170 mx-auto leading-[100%] tracking-[-2%] font-[600]">
          Кажется, такой страницы не существует или она была перемещена.
          Вы можете вернуться на главную или воспользоваться меню
        </p>

        <Link 
          to="/"
          className="h-11.5 bg-dark text-white rounded-xl inline-flex items-center gap-3 px-6 transition duration-200 hover:bg-dark/75 mt-10"
        >
          <span className="font-semibold">На главную</span>
          <svg xmlns="http://www.w3.org/2000/svg" width={42} height={12} fill="none">
            <path fill="currentColor" d="M41.03 6.53a.75.75 0 0 0 0-1.06L36.257.697a.75.75 0 0 0-1.06 1.06L39.439 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L41.03 6.53ZM.5 6v.75h40v-1.5H.5V6Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;