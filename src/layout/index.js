import Navbar from "./Navbar";
import clsx from "clsx";
import style from "./Layout.module.scss";
import Music from "./Music";

const Layout = ({ children }) => {
  return (
    <div className={clsx(style.container)}>
      <Navbar />
      <div className={clsx(style.content)}>{children}</div>
      <Music/>
    </div>
  );
};

export default Layout;
