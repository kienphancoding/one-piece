import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Slider.module.scss";

const Slider = () => {
  const listItems = [
    {
      img: "https://i.pinimg.com/564x/b5/d9/94/b5d9946acc401d828732bc1c519d0a95.jpg",
      name: "Luffy",
    },
    {
      img: "https://i.pinimg.com/564x/0b/28/13/0b28130bd84c9a26feecacd0fd54ede2.jpg",
      name: "Zoro",
    },
    {
      img: "https://i.pinimg.com/564x/ad/9a/fc/ad9afc6969ec3662eae9470eddb4e66b.jpg",
      name: "Nami",
    },
    {
      img: "https://i.pinimg.com/564x/a1/e3/1d/a1e31df248664ff2b6bd169d20c555e1.jpg",
      name: "Usopp",
    },
    {
      img: "https://i.pinimg.com/564x/92/6f/a8/926fa89902eb9743918d57fdc33b4b01.jpg",
      name: "Sanji",
    },
    {
      img: "https://i.pinimg.com/564x/54/d2/71/54d27111c3efbd9ea1084741cc7c77ad.jpg",
      name: "Chopper",
    },
    {
      img: "https://i.pinimg.com/564x/4a/b7/e5/4ab7e59a6c8364b7da305c7bea537972.jpg",
      name: "Robin",
    },
    {
      img: "https://i.pinimg.com/564x/73/87/ea/7387eafaca2155a1bc01f7db99501c47.jpg",
      name: "Franky",
    },
    {
      img: "https://i.pinimg.com/564x/0e/da/7f/0eda7f7d3555334feada5f57e0bf8e44.jpg",
      name: "Brook",
    },
    {
      img: "https://i.pinimg.com/564x/25/0a/3e/250a3e0ef75b2d22f2f87a541ec6da2a.jpg",
      name: "Jinbei",
    },
  ];
  const [slideNumber, setSlideNumber] = useState(0);

  const handleMove = (direction) => {
    if (direction === "left") {
      setSlideNumber(
        slideNumber === 0 ? () => listItems.length - 1 : (prev) => prev - 1
      );
    } else if (direction === "right") {
      setSlideNumber(
        slideNumber < listItems.length - 1 ? (prev) => prev + 1 : () => 0
      );
    }
  };

  //translateX list
  useEffect(() => {
    document.getElementById("list").style.transform = `translateX(-${
      slideNumber * 100
    }%)`;
  }, [slideNumber]);
  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.title)}>
        Thành viên trong băng hải tặc mũ rơm
      </div>
      <div className={clsx(style.slider)}>
        <FontAwesomeIcon
          className={clsx(style.btn, style.left)}
          icon={faAngleLeft}
          onClick={() => handleMove("left")}
        />
        <div id="list" className={clsx(style.list)}>
          {listItems.map((x, index) => {
            return (
              <Link to={`/members`} className={clsx(style.item)} key={index}>
                <img alt="movie" src={x.img} />
              </Link>
            );
          })}
        </div>
        <FontAwesomeIcon
          className={clsx(style.btn, style.right)}
          icon={faAngleRight}
          onClick={() => handleMove("right")}
        />
      </div>
    </div>
  );
};

export default memo(Slider);
