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
  width: ${(props) => props.width + "px" || "auto"};
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
  width: ${(props) => props.width + "px" || "auto"};
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

const Dropdown = ({ className, children, border, fontSize, color, width }) => {
  const [showMenu, setShowMenu] = useState(false);
  const swapStateShowMenu = () => setShowMenu(!showMenu);

  const api = [
    "กรุงเทพมหานคร",
    "สมุทรปราการ",
    "นนทบุรี",
    "ปทุมธานี",
    "พระนครศรีอยุธยา",
    "อ่างทอง",
    "ลพบุรี",
    "สิงห์บุรี",
    "ชัยนาท",
    "สระบุรี",
    "ชลบุรี",
    "ระยอง",
    "จันทบุรี",
    "ตราด",
    "ฉะเชิงเทรา",
    "ปราจีนบุรี",
    "นครนายก",
    "สระแก้ว",
    "นครราชสีมา",
    "บุรีรัมย์",
    "สุรินทร์",
    "ศรีสะเกษ",
    "อุบลราชธานี",
    "ยโสธร",
    "ชัยภูมิ",
    "อำนาจเจริญ",
    "หนองบัวลำภู",
    "ขอนแก่น",
    "อุดรธานี",
    "เลย",
    "หนองคาย",
    "มหาสารคาม",
    "ร้อยเอ็ด",
    "กาฬสินธุ์",
    "สกลนคร",
    "นครพนม",
    "มุกดาหาร",
    "เชียงใหม่",
    "ลำพูน",
    "ลำปาง",
    "อุตรดิตถ์",
    "แพร่",
    "น่าน",
    "พะเยา",
    "เชียงราย",
    "แม่ฮ่องสอน",
    "นครสวรรค์",
    "อุทัยธานี",
    "กำแพงเพชร",
    "ตาก",
    "สุโขทัย",
    "พิษณุโลก",
    "พิจิตร",
    "เพชรบูรณ์",
    "ราชบุรี",
    "กาญจนบุรี",
    "สุพรรณบุรี",
    "นครปฐม",
    "สมุทรสาคร",
    "สมุทรสงคราม",
    "เพชรบุรี",
    "ประจวบคีรีขันธ์",
    "นครศรีธรรมราช",
    "กระบี่",
    "พังงา",
    "ภูเก็ต",
    "สุราษฎร์ธานี",
    "ระนอง",
    "ชุมพร",
    "สงขลา",
    "สตูล",
    "ตรัง",
    "พัทลุง",
    "ปัตตานี",
    "ยะลา",
    "นราธิวาส",
    "บึงกาฬ",
  ];

  return (
    <div style={{}}>
      <Button
        className={`dropdown ${className}`}
        fontSize={fontSize}
        showBorder={border}
        onClick={swapStateShowMenu}
        width={width}
      >
        <MdLocationOn size="18px" style={{ marginRight: 8 }} />
        <span style={{ color: color }}>{children}</span>
        <IoIosArrowDown color="grey" style={{ marginLeft: "auto" }} />
      </Button>
      {showMenu && (
        <Menu>
          {api.map((value) => (
            <Item width={width} fontSize={fontSize}>
              {value}
            </Item>
          ))}
        </Menu>
      )}
    </div>
  );
};

export default Dropdown;
