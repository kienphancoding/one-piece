import clsx from "clsx";
import style from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <div>
      <img
        className={clsx(style.img)}
        src="https://i.pinimg.com/564x/34/7e/f2/347ef27462eb0fc62994e45c96973e73.jpg"
        alt="back ground"
      />
    </div>
  );
};

export default PageNotFound;
