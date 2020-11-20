import React from "react";
import styled from "styled-components";
import Status from "./Status";
import Facilities from "./Facilities";
import parse from "html-react-parser";

const Rows = styled.div`
  height: 200px;
  width: 100%;
  padding: 4px;
  border: 1px solid rgb(210, 225, 234);
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 0 0 6px 0;
  background-color: white;
  @media (max-width: 582px) {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 0;
    margin: 0 0 4px 0;
  }
`;
const Item = styled.div`
  padding: 10px 20px;
`;

const ImagesContainer = styled.div`
  @media (max-width: 582px) {
    height: 400px;
    width: 100%;
  }
  background-color: white;
  background-image: url(${(props) => props.url});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const H3 = styled.h3`
  font-size: 12px;
  color: rgb(158, 158, 158);
  margin: 4px 0 0 0;
`;

const getPriceElement = (n) => {
  if (n === 0 || n === "0") {
    return "";
  }
  let price = ['<span style="color:rgb(60,60,60);">', "฿", "฿", "฿", "฿"];
  price.splice(n + 1, 0, "</span>");
  return price.join("") + " | ";
};
const FacilitiesZone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Row = ({
  name,
  isOpen,
  category,
  price,
  address,
  description,
  recommend,
  facilities,
  imagesURL,
  hr_margin,
}) => {
  const openMap = { "N/A": 2, Y: 1, N: 0 };
  const priceText = getPriceElement(price);
  return (
    <Rows>
      <ImagesContainer url={imagesURL}></ImagesContainer>
      <Item>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: 20, fontWeight: "bold", marginRight: "20px" }}>
            {name}
          </h1>
          <Status status={openMap[isOpen]} />
        </div>
        <H3>
          {`${category} |`}{" "}
          <span style={{ letterSpacing: "2px", fontSize: "12px" }}>
            {parse(priceText)}
          </span>{" "}
          {`${address.d} ${address.p}`}
        </H3>
        <hr
          style={{
            borderTop: "1px solid rgb(243, 243, 243)",
            width: "70%",
            margin: `${hr_margin}px 0`,
          }}
        />
        <H3>{parse(description)}</H3>
        <H3>
          <span style={{ color: "black" }}>เมนูแนะนำ: </span>
          {parse(recommend.join(",&#160;&#160;"))}
        </H3>
        <FacilitiesZone>
          {facilities.map((v, i) => (
            <Facilities logo={v} key={i} margin="6px 10px 0 0" />
          ))}
        </FacilitiesZone>
      </Item>
    </Rows>
  );
};

export default Row;
