import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";

function Navbar() {
  const { pathname } = useLocation();

  const navItems = [
    {
      label: "О фонде ",
      to: "/about",
    },
    {
      label: "Кому помогаем",
      to: "/beneficiaries",
    },
    {
      label: "Как помочь",
      to: "/help",
    },
    {
      label: "ИИ сопровождение",
      to: "/aisupport",
    },
    {
      label: "Kонтакты",
      // to: "/contact",
    },
  ];

  return (
    <nav
      className={`flex items-center justify-between gap-5 ${pathname !== "/" && "max-w-350 mx-auto px-4"
        }`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      {/* Menu BTN */}
      <button className="text-dark inline-block lg:hidden h-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={26}
          height={18}
          fill="none"
        >
          <path
            fill="#0D2D42"
            d="M0 1.28C0 .94.137.615.38.375A1.31 1.31 0 0 1 1.3 0h23.4c.345 0 .675.135.92.375a1.27 1.27 0 0 1 0 1.81 1.31 1.31 0 0 1-.92.375H1.3a1.31 1.31 0 0 1-.92-.375A1.27 1.27 0 0 1 0 1.28ZM0 9c0-.34.137-.666.38-.906a1.31 1.31 0 0 1 .92-.374h23.4c.345 0 .675.134.92.374a1.27 1.27 0 0 1 0 1.81 1.31 1.31 0 0 1-.92.375H1.3a1.31 1.31 0 0 1-.92-.375A1.27 1.27 0 0 1 0 9Zm1.3 6.44a1.31 1.31 0 0 0-.92.375 1.27 1.27 0 0 0 0 1.81c.245.24.575.375.92.375h23.4c.345 0 .675-.135.92-.375a1.27 1.27 0 0 0 0-1.81 1.31 1.31 0 0 0-.92-.374H1.3Z"
          />
        </svg>
      </button>
      <div className="hidden lg:inline-flex items-center gap-6">
        {navItems.map((item, i) => {
          return (
            <Link
              key={i}
              to={item.to}
              className={`transition duration-200 hover:text-dark/75 ${pathname === item.to && "text-accent"}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
