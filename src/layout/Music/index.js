import {
  faCaretLeft,
  faCaretRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import style from "./Music.module.scss";
import { songs } from "./Songs";

const Music = () => {
  const [play, setPlay] = useState(false);
  const [indexSong, setIndexSong] = useState(0);
  const audioRef = useRef();

  const handleNextSong = () => {
    setIndexSong(indexSong < songs.length - 1 ? (prev) => prev + 1 : () => 0);
  };

  const handlePrevSong = () => {
    setIndexSong(indexSong > 0 ? (prev) => prev - 1 : () => songs.length - 1);
  };

  //auto play
  useEffect(() => {
    let timerId = setInterval(() => {
      if (
        Math.floor(audioRef.current.currentTime) ===
        Math.floor(audioRef.current.duration)
      ) {
        handleNextSong();
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [play,indexSong]);

  //play / pause
  useEffect(() => {
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [play, indexSong]);
  return (
    <div className={clsx(style.wrapper)}>
      <audio ref={audioRef} src={songs[indexSong]} />
      <div className={clsx(style.btn)} onClick={handlePrevSong}>
        <FontAwesomeIcon icon={faCaretLeft} className={clsx(style.icon)} />
      </div>
      {!play && (
        <div className={clsx(style.btn)} onClick={() => setPlay(true)}>
          <FontAwesomeIcon icon={faPlay} className={clsx(style.icon)} />
        </div>
      )}
      {play && (
        <div className={clsx(style.btn)} onClick={() => setPlay(false)}>
          <FontAwesomeIcon icon={faPause} className={clsx(style.icon)} />
        </div>
      )}
      <div className={clsx(style.btn)} onClick={handleNextSong}>
        <FontAwesomeIcon icon={faCaretRight} className={clsx(style.icon)} />
      </div>
    </div>
  );
};

export default Music;
