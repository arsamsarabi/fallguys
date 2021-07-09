import firstnames from "./constants/firstnames";
import middlenames from "./constants/middlenames";
import lastnames from "./constants/lastnames";

const getRandomName = (names: string[]): string => {
  return names[Math.floor(Math.random() * names.length)];
};

export default () =>
  `${getRandomName(firstnames)} ${getRandomName(middlenames)} ${getRandomName(
    lastnames
  )}`;
