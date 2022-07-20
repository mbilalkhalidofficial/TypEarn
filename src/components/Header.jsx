import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export function Header({ setIsLogin }) {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    });
  }, []);

  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="logo" className="header__logo__img" />
      </Link>
      <button
        className="header__nav__menu"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <X size={20} color="#fff" />
        ) : (
          <Menu size={20} color="#fff" />
        )}
      </button>
      {isOpen ? (
        <div className="header__nav">
          <Link to="/stake" className="header__nav__link">
            Stake
          </Link>
          <Link to="/" className="header__nav__link">
            Rewards
          </Link>
          <a href="#" className="header__nav__link">
            About Us
          </a>
          <a href="#" className="header__nav__button">
            Sign Up
          </a>
          <a
            href="#"
            onClick={() => {
              setIsLogin(true);
            }}
            className="header__nav__button"
            style={{ background: "black" }}
          >
            Login
          </a>
        </div>
      ) : null}
    </div>
  );
}
