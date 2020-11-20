import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "../styles/Content.css";

const Content = ({ provinces, priceRange, categories }) => {
  const [showSidebar, setSidebar] = React.useState(true);
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 864) {
        setSidebar(false);
      } else {
        setSidebar(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="content">
      {showSidebar && (
        <Sidebar
          provinces={provinces}
          priceRange={priceRange}
          categories={categories}
        />
      )}
      <Main />
    </div>
  );
};

export default Content;
