import React from "react";
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
      label: "ИИ сопровождениефонде",
      to: "/ai-support",
    },
    {
      label: "Kонтакты",
      to: "/contact",
    },
  ];

  return (
    <nav
      className={`flex items-center justify-between gap-5 ${
        pathname !== "/" && "max-w-350 mx-auto px-4"
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
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="hidden lg:inline-flex items-center gap-6">
        {navItems.map((item, i) => {
          return (
            <Link
              key={i}
              to={item.to}
              className={`${pathname === item.to && "text-accent font-bold"}`}
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
