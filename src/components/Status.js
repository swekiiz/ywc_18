import React from "react";
const colorMap = { 0: "rgb(158, 158, 158)", 1: "rgb(33, 195, 0)", 2: "white" };
const Status = ({ status }) => {
  return (
    <div
      style={{
        backgroundColor: colorMap[status],
        color: "white",
        width: "46px",
        height: "20px",
        fontSize: "10px",
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: "20px",
        border: "0 solid white",
        borderRadius: "4px",
      }}
    >
      {status === 1 || status === "1" ? "เปิดอยู่" : "ปิดแล้ว"}
    </div>
  );
};

export default Status;
