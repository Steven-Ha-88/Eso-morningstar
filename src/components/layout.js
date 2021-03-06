import React from "react";

import Header from "./Nav/Navbar";
import { Footer } from "./Footer/index";
import "../styles/index.scss";
import * as layoutStyles from "./layout.module.scss";

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
