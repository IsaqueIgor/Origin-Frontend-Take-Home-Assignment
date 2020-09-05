const Format = (value: number) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export default Format;
