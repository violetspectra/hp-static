/**
 * Converts a string to titlecase
 * @param str The input string
 * @returns The output string in titlecase.
 */
export const titleCase = (str: string) => {
  const strArray = str.split(" ");

  for (var i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
  }

  return strArray.join(" ");
};
