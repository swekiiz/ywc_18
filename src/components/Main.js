import React from "react";
import Row from "./Row";
import "../styles/Main.css";

const Main = ({ merchants }) => {
  return (
    <div className="main">
      {merchants.map((v, i) => (
        <Row
          key={i + 12345}
          name={v.shopNameTH}
          isOpen={v.isOpen}
          category={v.categoryName}
          price={v.priceLevel}
          address={{ p: v.addressProvinceName, d: v.addressDistrictName }}
          description={v.highlightText}
          recommend={v.recommendedItems}
          facilities={v.facilities}
          imagesURL={v.coverImageId}
          hr_margin="10"
        />
      ))}
      <div className="more">
        <button>ดูเพิ่มเติม</button>
      </div>
    </div>
  );
};

export default Main;
