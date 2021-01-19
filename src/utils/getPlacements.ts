import getCapitalizeWord from "./getCapitalizeWord";
/**
 *
 * @param placement 位置
 * @param capitalize 返回字符串首字母大写
 */
export default function getPlacements(
  placement: "topLeft" | "topRight" | "bottomLeft" | "bottomRight",
  capitalize?: boolean
): Array<string> {
  const basePlacements: Array<string> = ["top", "bottom", "left", "right"];
  const placements: Array<string> = [];
  if (placement) {
    basePlacements.forEach((pm: string) => {
      const capitalizePm = getCapitalizeWord(pm);
      if (placement.includes(pm) || placement.includes(capitalizePm)) {
        placements.push(capitalize ? capitalizePm : pm);
      }
    });
  }
  return placements;
}
