import clsx from "clsx";
import { useEffect } from "react";
import { contentsMember } from "./Members";
import style from "./Members.module.scss";

const Members = () => {
  useEffect(() => {
    document.getElementsByClassName(clsx(style.background))[0].scrollIntoView();
  }, []);
  return (
    <div className={clsx(style.wrapper)}>
      {contentsMember.map((x, index) => {
        return (
          <div className={clsx(style.background)} key={index}>
            <img className={clsx(style.img)} src={x.img} alt="Background" />

            <div className={clsx(style.header)}>
              <div className={clsx(style.logo)}>
                <img src={x.img} alt="" />
              </div>
              <div className={clsx(style.info)}>
                <h1 className={clsx(style.name)} style={{ color: x.color }}>
                  Tên : {x.name}
                </h1>
                <p className={clsx(style.text)} style={{ color: x.color }}>
                  Biệt danh : {x.nickname}
                </p>
                <p className={clsx(style.text)} style={{ color: x.color }}>
                  Vai trò : {x.role}
                </p>
                <p className={clsx(style.text)} style={{ color: x.color }}>
                  Mô tả : {x.descriptions}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Members;
