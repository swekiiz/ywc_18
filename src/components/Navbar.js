import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(40, 58, 124);
  font-size: 14px;
  padding-left: calc(22vw - 228px);
  color: white;
`;
const Navbar = () => {
  return (
    <Div>
      <a herf="#">
        <h1 style={{ fontSize: "inherit", marginLeft: 10, cursor: "pointer" }}>
          หน้าหลัก
        </h1>
      </a>
      <span style={{ margin: "0 10px" }}>/</span>
      <a href="#">
        <h1 style={{ fontSize: "inherit", cursor: "pointer" }}>ค้นหา</h1>
      </a>
    </Div>
  );
};

export default Navbar;
