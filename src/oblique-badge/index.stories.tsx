import React, { useState } from "react";
import ObliqueBadge from "./index";

export default {
  title: "ObliqueBadge",
};

export const DemoObliqueBadge = () => {
  const [width, setWidth] = useState(40);
  // const onChangeSize = (mode: "increase" | "decrease") => {
  //   setWidth(mode === "increase" ? width + 1 : width - 1);
  //   // console.log();
  // };
  return (
    <div>
      <ObliqueBadge text="大促销" width={width}>
        <div
          style={{ width: 200, height: 200, border: "1px solid black" }}
        ></div>
      </ObliqueBadge>

      <ObliqueBadge
        text="小促销"
        width={width}
        placement="topLeft"
        color="#f50"
        style={{ marginLeft: "20px" }}
      >
        <div
          style={{
            width: 200,
            height: 200,
            border: "1px solid black",
          }}
        ></div>
      </ObliqueBadge>
      <ObliqueBadge
        text="中促销"
        width={width}
        color="#f50"
        placement="bottomLeft"
        style={{ marginLeft: "20px" }}
      >
        <div
          style={{
            width: 200,
            height: 200,
            border: "1px solid black",
          }}
        ></div>
      </ObliqueBadge>

      <ObliqueBadge
        text="低促销"
        width={width}
        placement="bottomRight"
        style={{ marginLeft: "20px" }}
      >
        <div
          style={{
            width: 200,
            height: 200,
            border: "1px solid black",
          }}
        ></div>
      </ObliqueBadge>
    </div>
  );
};
