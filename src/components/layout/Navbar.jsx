import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/icons/logo.svg";

// Close icon SVG
const CloseIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#0D2D42"
      d="M5.83077 4.23648L15.9902 14.3905L26.0417 4.33843C26.7267 3.72826 27.4357 4.09256 27.719 4.39839C27.9007 4.61988 27.9944 4.90057 27.9823 5.18682C27.9701 5.47307 27.8529 5.74479 27.653 5.95005L17.6 16.0006L27.653 26.0481C28.0997 26.4229 28.0997 27.1575 27.7415 27.5683C27.3817 27.9776 26.7222 28.2145 26.1002 27.7287L15.9902 17.6107L5.86824 27.7332C5.42457 28.1305 4.69311 28.0496 4.33188 27.6553C3.96915 27.2595 3.83125 26.5759 4.29441 26.0931L14.3804 16.0006L4.33638 5.95005C3.96915 5.54527 3.84174 4.80467 4.33638 4.33843C4.83101 3.87218 5.56846 3.93664 5.83077 4.23648Z"
    />
  </svg>
);

function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "О фонде", to: "/about" },
    { label: "Кому помогаем", to: "/beneficiaries" },
    { label: "Как помочь", to: "/help" },
    { label: "ИИ сопровождение", to: "/aisupport" },
  ];

  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // menyuni yopish
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // navigatsiyadan keyin menyuni yopamiz
  };

  return (
    <nav
      className={`flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-50 ${pathname !== "/" && "max-w-350 mx-auto px-4"
        }`}
    >
      {/* Logo + Mobile menu btn */}
      <div className="flex justify-between items-center w-full lg:w-auto">
        <Link to="/" onClick={handleLinkClick}>
          <img src={Logo} alt="Logo" />
        </Link>

        {/* Menu Toggle Button (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <CloseIcon />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={18} fill="none">
              <path
                fill="#0D2D42"
                d="M0 1.28C0 .94.137.615.38.375A1.31 1.31 0 0 1 1.3 0h23.4c.345 0 .675.135.92.375a1.27 1.27 0 0 1 0 1.81 1.31 1.31 0 0 1-.92.375H1.3a1.31 1.31 0 0 1-.92-.375A1.27 1.27 0 0 1 0 1.28ZM0 9c0-.34.137-.666.38-.906a1.31 1.31 0 0 1 .92-.374h23.4c.345 0 .675.134.92.374a1.27 1.27 0 0 1 0 1.81 1.31 1.31 0 0 1-.92.375H1.3a1.31 1.31 0 0 1-.92-.375A1.27 1.27 0 0 1 0 9Zm1.3 6.44a1.31 1.31 0 0 0-.92.375 1.27 1.27 0 0 0 0 1.81c.245.24.575.375.92.375h23.4c.345 0 .675-.135.92-.375a1.27 1.27 0 0 0 0-1.81 1.31 1.31 0 0 0-.92-.374H1.3Z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Nav Items */}
      <div
        className={`${menuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row items-start lg:items-center gap-6 w-full lg:w-auto bg-white lg:bg-transparent px-4 py-4 lg:p-0 absolute lg:static top-full left-0 shadow-md lg:shadow-none`}
      >
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            onClick={handleLinkClick}
            className={`transition duration-200 hover:text-dark/75 ${pathname === item.to && "text-accent"
              }`}
          >
            {item.label}
          </Link>
        ))}

        {/* Контакты */}
        <button
          onClick={handleContactScroll}
          className="transition duration-200 hover:text-dark/75"
        >
          Контакты
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
