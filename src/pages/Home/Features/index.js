import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { memo } from "react";
import style from "./Features.module.scss";

const Features = () => {
  return (
    <div className={clsx(style.wrapper)}>
      <img
        className={clsx(style.img)}
        src="https://i.pinimg.com/564x/4e/da/1d/4eda1d91a0ca4b708e1e90f1c12b5d3a.jpg"
        alt="Background"
      />
      <div className={clsx(style.info)}>
        <img
          className={clsx(style.logo)}
          src="https://i.pinimg.com/564x/ca/84/cd/ca84cda96f47d5ad52f540d16d8eb537.jpg"
          alt="Logo phim"
        />
        <p className={clsx(style.content)}>
          One Piece Film Red là bộ phim hoạt hình anime Nhật Bản thuộc thể loại
          kỳ ảo, hành động phiêu lưu ký.
        </p>
        <div className={clsx(style.wrapBtn)}>
          <div className={clsx(style.btn)}>
            <FontAwesomeIcon className={clsx(style.icon)} icon={faPlay} />
            <p className={clsx(style.text)}>Play</p>
          </div>
          <div className={clsx(style.btn, style.btnInfo)}>
            <FontAwesomeIcon className={clsx(style.icon)} icon={faInfoCircle} />
            <p className={clsx(style.text)}>Info</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Features);
