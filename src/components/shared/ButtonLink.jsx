import React from "react";
import { Link } from "react-router-dom";

const sizeClasses = {
  xl: "text-xl/3.5 font-semibold px-6 py-4",
  lg: "text-base/3 font-medium px-5 py-3"
};

const variantClasses = {
  filled:
    "inline-flex items-center gap-3 outline outline-dark bg-dark text-white hover:bg-dark/75 hover:outline-dark/75",
  outline: "inline-flex items-center gap-3 outline outline-dark hover:bg-dark hover:text-white"
};

const ButtonLink = ({ href, children, size = "lg", variant = "outline", className = "", arrowRight = false }) => {
  const baseClasses = "rounded-xl transition duration-200 ";

  return (
    <Link to={href} className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      <span>{children}</span>
      {arrowRight && (
        <svg width="40" height="12" viewBox="0 0 41 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40.5303 6.53033C40.8232 6.23743 40.8232 5.76256 40.5303 5.46967L35.7574 0.696696C35.4645 0.403803 34.9896 0.403803 34.6967 0.696696C34.4038 0.98959 34.4038 1.46446 34.6967 1.75736L38.9393 6L34.6967 10.2426C34.4038 10.5355 34.4038 11.0104 34.6967 11.3033C34.9896 11.5962 35.4645 11.5962 35.7574 11.3033L40.5303 6.53033ZM0 6L6.55671e-08 6.75L40 6.75L40 6L40 5.25L-6.55671e-08 5.25L0 6Z"
            fill="currentColor"
          />
        </svg>
      )}
    </Link>
  );
};

{
  /* <button className="border border-dark rounded-xl hidden md:inline-flex items-center transition duration-200 hover:bg-dark hover:text-white gap-3 h-9 px-5">
  <span className="font-medium">Подробнее о фонде</span>
  <svg xmlns="http://www.w3.org/2000/svg" width={41} height={12} fill="none">
    <path
      fill="currentColor"
      d="M40.53 6.53a.75.75 0 0 0 0-1.06L35.757.697a.75.75 0 0 0-1.06 1.06L38.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06L40.53 6.53ZM0 6v.75h40v-1.5H0V6Z"
    />
  </svg>
</button>; */
}

export default ButtonLink;
