import React from "react";
import "./Layout.scss";
import Header from "../Header/Header";

const HeaderVariants = {
  initial: { top: "-100%" },
  animate: { top: 0, transition: { duration: 0.33 } },
};

function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}

export default Layout;
