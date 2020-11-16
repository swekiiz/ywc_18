import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: inherit;
  padding: 0 10px;
  text-align: center;
  background-color: inherit;
  font-size: ${(props) => props.fontSize || 16}px;
  ${(props) =>
    props.showBorder &&
    css`
      border: 1px solid rgb(224, 224, 224);
      border-radius: 3px;
    `}
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dropdown = ({ className, children, border, fontSize, color }) => {
  const [showMenu, setShowMenu] = useState(false);
  const swapStateShowMenu = () => setShowMenu(!showMenu);
  return (
    <div style={{}}>
      <Button
        className={`dropdown ${className}`}
        fontSize={fontSize}
        showBorder={border}
        onClick={swapStateShowMenu}
      >
        <MdLocationOn size="18px" style={{ marginRight: 8 }} />
        <span style={{ color: color }}>{children}</span>
        <IoIosArrowDown color="grey" style={{ marginLeft: 24 }} />
      </Button>
      {showMenu && (
        <Menu>
          <button> Menu item 1 </button>
          <button> Menu item 2 </button>
          <button> Menu item 3 </button>
        </Menu>
      )}
    </div>
  );
};

export default Dropdown;
