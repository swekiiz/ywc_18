import React from "react";
import styled from "styled-components";
import { FaCarSide, FaDog, FaFileSignature } from "react-icons/fa";
const Div = styled.div`
  border: 1px solid rgb(33, 195, 0);
  border-radius: 24px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin || "0"};
`;

const mapLogo = {
  ที่จอดรถ: <FaCarSide style={{ color: "rgb(33, 195, 0)" }} size="14px" />,
  รับจองล่วงหน้า: (
    <FaFileSignature style={{ color: "rgb(33, 195, 0)" }} size="14px" />
  ),
  สามารถนำสัตว์เลี้ยงเข้าได้: (
    <FaDog style={{ color: "rgb(33, 195, 0)" }} size="14px" />
  ),
};

const Facilities = ({ logo, margin }) => {
  return <Div margin={margin}>{mapLogo[logo]}</Div>;
};

export default Facilities;
