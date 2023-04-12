function makeid(length: number): string {
  let result = "";
  const characters = "0123456789100";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter++;
  }
  return result;
}
export { makeid }