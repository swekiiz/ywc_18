import React from "react";
import "../styles/Sidebar.css";
import Dropdown from "./Dropdown";

const Sidebar = (props) => {
  const [typeOfShop, setTypeOfShop] = React.useState({ all: true, index: 0 });
  const [typeOfSubShop, setTypeOfSubShop] = React.useState({
    all: true,
    index: 0,
  });

  const handlerSetType = (e) => {
    // eslint-disable-next-line eqeqeq
    if (e.target.value == -1) {
      setTypeOfShop({ all: true, index: 0 });
      setTypeOfSubShop({ all: true, index: 0 });
    } else {
      setTypeOfShop({ all: false, index: e.target.value });
      setTypeOfSubShop({ all: true, index: 0 });
    }
  };
  const handlerSetTypess = (e) => {
    // eslint-disable-next-line eqeqeq
    if (e.target.value == -1) {
      setTypeOfSubShop({ all: true, index: 0 });
    } else {
      setTypeOfSubShop({ all: false, index: e.target.value });
    }
  };

  return (
    <div className="sidebar">
      <h1 style={{ fontSize: "15px" }}>ประเภทร้านค้า</h1>
      <div
        className="list_in_sidebar"
        style={{ margin: "20px 0" }}
        onChange={handlerSetType}
      >
        <label>
          <input
            type="radio"
            name="type_of_product"
            value={-1}
            style={{ marginRight: 10 }}
            defaultChecked={typeOfShop.all}
          ></input>
          ทั้งหมด
        </label>
        {props.categories.map((value, index) => (
          <label key={index + 50}>
            <input
              type="radio"
              name="type_of_product"
              value={index}
              style={{ marginRight: 10 }}
            ></input>
            {value.name}
          </label>
        ))}
      </div>
      <h1 style={{ fontSize: "15px", margin: "0 0 10px 0" }}>
        จังหวัด/ใกล้ฉัน
      </h1>
      <Dropdown
        list={props.provinces}
        className="dropdown_sidebar"
        fontSize="12"
        width="100%"
        mwidth="100%"
        top="36px"
        border
        logo
      >
        พื้นที่ใกล้ฉัน
      </Dropdown>
      <h1 style={{ fontSize: "15px", margin: "30px 0 0 0" }}>ราคา</h1>
      <Dropdown
        list={props.priceRange}
        className="dropdown_sidebar"
        fontSize="12"
        width="100%"
        mwidth="100%"
        top="36px"
        font_color={"rgb(180, 181, 182)"}
        border
      >
        กรุณาเลือก
      </Dropdown>
      <h1 style={{ fontSize: "15px", margin: "30px 0 0 0" }}>
        {typeOfShop.all ? "ทั้งหมด" : props.categories[typeOfShop.index].name}
      </h1>
      <div className="list_in_sidebar" style={{ margin: "20px 0" }}>
        <label>
          <input
            type="radio"
            name={`type_of_product2`}
            value={-1}
            style={{ marginRight: 10 }}
            onChange={handlerSetTypess}
            defaultChecked={typeOfSubShop.all === true}
          ></input>
          ทั้งหมด
        </label>
        {props.categories[typeOfShop.index].subcategories.map(
          (value, index) => (
            <label key={index + typeOfShop.index * 100}>
              <input
                type="radio"
                name={`type_of_product2`}
                value={index}
                style={{ marginRight: 10 }}
                onChange={handlerSetTypess}
              ></input>
              {value}
            </label>
          )
        )}
      </div>
    </div>
  );
};

export default Sidebar;
