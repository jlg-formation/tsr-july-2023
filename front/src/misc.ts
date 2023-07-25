export const setAttributeNbr = (elt: Element, key: string, value: number) => {
  elt.setAttributeNS(null, key, value + "");
};
