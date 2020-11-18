import React from "react";
import "../styles/Sidebar.css";
import { api_categories } from "./api_test";
import Dropdown from "./Dropdown";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 style={{ fontSize: "15px" }}>ประเภทร้านค้า</h1>
      <div style={{ margin: "20px 0" }}>
        <div className="list_in_sidebar">
          <input type="radio" name="type_of_product"></input>
          <label style={{ marginLeft: 10 }}>ทั้งหมด</label>
        </div>
        {api_categories.map((value, index) => (
          <div className="list_in_sidebar">
            <input type="radio" name="type_of_product"></input>
            <label style={{ marginLeft: 10 }}>{value.name}</label>
          </div>
        ))}
      </div>
      <h1 style={{ fontSize: "15px", margin: "0 0 10px 0" }}>
        จังหวัด/ใกล้ฉัน
      </h1>
      <Dropdown className="dropdown_sidebar" fontSize="14" border>
        พื้นที่ใกล้ฉัน
      </Dropdown>
      <h1 style={{ fontSize: "15px", margin: "30px 0 0 0" }}>ราคา</h1>
      <Dropdown className="select_price_dropdown" fontSize="14" border>
        กรุณาเลือก
      </Dropdown>
    </div>
  );
};

export default Sidebar;
