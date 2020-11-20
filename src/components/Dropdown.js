import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: inherit;
  text-align: center;
  background-color: inherit;
  color: ${(props) => props.color || "inherit"};
  font-size: ${(props) => props.fontSize || 16}px;
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.maxWidth || "1000000000px"};
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
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth || "1000000000px"};
  font-size: ${(props) => props.fontSize || 16}px;
  &:hover {
    background-color: rgb(224, 224, 224);
  }
`;

const Menu = styled.div`
  max-height: 400px;
  border: 1px solid rgb(230, 230, 230);
  background-color: white;
  position: absolute;
  top: ${(props) => props.top || "48px"};
  width: ${(props) => props.width || "auto"};
  display: flex;
  flex-direction: column;
  overflow: scroll;
  z-index: 2;
`;

const Dropdown = ({
  list,
  className,
  children,
  border,
  fontSize,
  color,
  width,
  mwidth,
  maxWidth,
  font_color,
  top,
  logo,
  visibled,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [text, setText] = useState(children);
  const swapStateShowMenu = () => setShowMenu(!showMenu);
  const handlerText = (e) => {
    setShowMenu(false);
    setText(e.target.value);
  };
  return (
    <div style={{ overflow: "visible", position: "relative" }}>
      <Button
        className={`dropdown ${className}`}
        fontSize={fontSize}
        showBorder={border}
        onClick={swapStateShowMenu}
        width={width}
        maxWidth={maxWidth}
        color={font_color}
      >
        {logo && <MdLocationOn size="18px" style={{ marginRight: 8 }} />}
        <span style={text === children ? { color: color } : { color: "black" }}>
          {text}
        </span>
        <IoIosArrowDown color="grey" style={{ marginLeft: "auto" }} />
      </Button>
      {(showMenu || visibled) && (
        <Menu top={top} width={mwidth}>
          {list.map((value, index) => (
            <Item
              width={width}
              fontSize={fontSize}
              maxWidth={maxWidth}
              value={value}
              key={index}
              onClick={(e) => handlerText(e)}
            >
              {value}
            </Item>
          ))}
        </Menu>
      )}
    </div>
  );
};

export default Dropdown;
