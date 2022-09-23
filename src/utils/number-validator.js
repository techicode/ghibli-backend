export const numberValidator = (numImput) => {
  const num = Number(numImput);
  if (Number.isNaN(num)) return;
  return num;
};
