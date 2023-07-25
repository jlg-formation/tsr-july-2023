export const setAttributeNbr = (elt: Element, key: string, value: number) => {
  elt.setAttributeNS(null, key, value + "");
};

export const querySelector = (cssSelector: string) => {
  const container = document.querySelector(cssSelector);
  if (container === null) {
    throw new Error(`Cannot find selector ${cssSelector}`);
  }
  return container;
};
