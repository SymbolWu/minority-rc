/**
 * 字符串首字母大写
 * @param word 字符串
 */
export default function getCapitalizeWord(word: string): string {
  if (word) {
    return `${word.charAt(0).toLocaleUpperCase()}${word.substr(1)}`;
  }
  return "";
}
