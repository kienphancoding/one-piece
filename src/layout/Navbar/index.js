import clsx from "clsx";
import style from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const list = [
    { path: "/", name: "Trang chủ" },
    { path: "/tom-tat", name: "Tóm tắt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        isScrolled ? clsx(style.wrapper, style.scroll) : clsx(style.wrapper)
      }
    >
      <div className={clsx(style.container)}>
        <div className={clsx(style.left)}>
          <div className={clsx(style.logo)}>ONEPIECE</div>
          {list.map((x, index) => {
            return (
              <Link to={x.path} className={clsx(style.item)} key={index}>
                {x.name}
              </Link>
            );
          })}
        </div>

        <div className={clsx(style.right)}>
          <FontAwesomeIcon
            className={clsx(style.icon)}
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
