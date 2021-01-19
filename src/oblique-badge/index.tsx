import * as React from "react";
import classNames from "classnames";
import useClientSize from "@/utils/hooks/useClientSize";
import getPrefixCls from "@/utils/getPrefixCls";
import getCapitalizeWord from "@/utils/getCapitalizeWord";
import getPlacements from "@/utils/getPlacements";
import "./index.less";

//FIXME:组件容器有问题，期望是子组件来控制元素的间距等
interface ObliqueBadgeProps {
  text?: React.ReactNode;
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  // shape?: "triangle" | "trapezoid";
  width?: number;
  color?: string;
  className?: string;
  textClassName?: string;
  style?: React.CSSProperties;
}

const ObliqueBadge: React.FC<ObliqueBadgeProps> = ({
  text = "",
  placement = "topRight",
  // shape = "triangle",
  children,
  width = 40,
  color = "",
  className: customizeClassName = "",
  textClassName: customizeTextClassName = "",
  style = {},
}) => {
  const textRef = React.useRef<HTMLDivElement | null>(null);

  const [size] = useClientSize([text], textRef);

  const prefixCls = getPrefixCls("oblique-badge");

  const className = classNames(prefixCls, customizeClassName);

  const contentClassName = classNames(`${prefixCls}-content`, {
    [`${prefixCls}-content-${placement}`]: placement,
  });

  const textClassName = classNames(`${prefixCls}-text`, customizeTextClassName);

  const setContentBorderStyle = () => {
    const basePlacement = ["top", "bottom", "left", "right"];
    const getBorderStyle = (color: string) => {
      return `${width}px solid ${color}`;
    };
    return basePlacement.reduce(
      (prev: { [name: string]: string }, current: string) => {
        const cp = getCapitalizeWord(current);
        if (placement.includes(current) || placement.includes(cp)) {
          prev[`border${cp}`] = getBorderStyle(color || "#1589EE");
        } else {
          prev[`border${cp}`] = getBorderStyle("transparent");
        }
        return prev;
      },
      {}
    );
  };

  const setTextStyle = () => {
    const placements = getPlacements(placement);
    const getTranslate = (value: number, placement: string) =>
      (value / 2) * (placements.includes(placement) ? -1 : 1);
    const translateX = getTranslate(size.width, "left");
    const translateY = getTranslate(size.height, "top");
    const rotate = ["topLeft", "bottomRight"].includes(placement) ? -45 : 45;
    return {
      ...placements.reduce(
        (prev: { [name: string]: number | string }, current: string) => {
          prev[current] = (width / 8) * 5;
          return prev;
        },
        {}
      ),
      transform: `translate(${translateX}px,${translateY}px) rotate(${rotate}deg)`,
    };
  };

  const contentStyle = setContentBorderStyle();

  const textStyle = setTextStyle();

  if (React.isValidElement(children)) {
    return (
      <div className={className} style={style}>
        {children}
        <div className={contentClassName} style={contentStyle}></div>
        <div ref={textRef} className={textClassName} style={textStyle}>
          {text}
        </div>
      </div>
    );
  }
  return null;
};

export default ObliqueBadge;
