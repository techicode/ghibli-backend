export const numberValidator = (numImput) => {
  const num = Number.parseInt(numImput);
  if (Number.isNaN(num)) return;
  return num;
};
