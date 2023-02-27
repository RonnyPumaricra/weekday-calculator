export const range = (start, end, step = 1) => {
  const output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export function module(number, moduleNum) {
  return ((number % moduleNum) + moduleNum) % moduleNum;
};
