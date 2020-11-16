import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

/*
 * Import api test
 */
import { api } from "./api_test";

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: inherit;
  padding: 0 10px;
  text-align: center;
  background-color: inherit;
  font-size: ${(props) => props.fontSize || 16}px;
  width: ${(props) => props.width + "vw" || "auto"};
  max-width: ${(props) => props.maxWidth + "px" || "1000000000px"};
  ${(props) =>
    props.showBorder &&
    css`
      border: 1px solid rgb(224, 224, 224);
      border-radius: 3px;
    `}
  &:hover {
    background-color: rgb(224, 224, 224);
  }
`;
const Item = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: inherit;
  border-bottom: 1px solid rgb(240, 240, 240);
  width: ${(props) => props.width + "vw" || "auto"};
  max-width: ${(props) => props.maxWidth + "px" || "1000000000px"};
  font-size: ${(props) => props.fontSize || 16}px;
`;

const Menu = styled.div`
  width: auto;
  height: 400px;
  border: 1px solid rgb(230, 230, 230);
  background-color: white;
  position: absolute;
  top: 56px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const Dropdown = ({
  className,
  children,
  border,
  fontSize,
  color,
  width,
  maxWidth,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const swapStateShowMenu = () => setShowMenu(!showMenu);
  return (
    <>
      <Button
        className={`dropdown ${className}`}
        fontSize={fontSize}
        showBorder={border}
        onClick={swapStateShowMenu}
        width={width}
        maxWidth={maxWidth}
      >
        <MdLocationOn size="18px" style={{ marginRight: 8 }} />
        <span style={{ color: color }}>{children}</span>
        <IoIosArrowDown color="grey" style={{ marginLeft: "auto" }} />
      </Button>
      {showMenu && (
        <Menu>
          {api.map((value, index) => (
            <Item
              width={width}
              fontSize={fontSize}
              maxWidth={maxWidth}
              key={index}
            >
              {value}
            </Item>
          ))}
        </Menu>
      )}
    </>
  );
};

export default Dropdown;
