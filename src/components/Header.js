import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "../assets/images/logo-KLK.png";
import logoMobile from "../assets/images/logo-KLKmobile.png";
import Dropdown from "./Dropdown";
import { GrSearch } from "react-icons/gr";

const Header = () => {
  const [value, setValue] = useState("");
  const [imagesState, setImages] = useState(0);
  const [dropdown, setDropdown] = useState(true);
  const inputHandler = (e) => setValue(e.target.value);
  const _alert = () => alert("you're click");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 864) {
        setImages(1);
      } else {
        setImages(0);
      }
      if (window.innerWidth > 648) {
        setDropdown(true);
      } else {
        setDropdown(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="header_container">
      <div className="logo_container">
        <img
          className="logo"
          src={imagesState ? logoMobile : logo}
          alt="logo"
        />
      </div>
      <div className="search_header">
        {dropdown && (
          <Dropdown
            className="dropdown_header"
            fontSize="12"
            width="20"
            maxWidth="176"
          >
            พื้นที่ใกล้ฉัน
          </Dropdown>
        )}
        <input
          className="search_input"
          onChange={inputHandler}
          type="text"
          value={value}
          placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
        ></input>
        <button className="search_icon" onClick={_alert}>
          <GrSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
