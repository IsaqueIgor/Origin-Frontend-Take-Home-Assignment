const stringToNumber = (value: string): number =>
  parseInt(value.replace(/\./g, ''), 10);

export default stringToNumber;
