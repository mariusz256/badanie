import React from "react";
import "./Layout.scss";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
}

export default Layout;
