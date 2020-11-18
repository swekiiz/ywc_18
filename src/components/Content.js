import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "../styles/Content.css";

const Content = () => {
  return (
    <div className="content">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Content;
