import _ from "lodash";
import num2text from "./num2text.json";

export function numToWord(num) {
  return _.reduce(
    num2text,
    (accum, num2text) => {
      return num2text.num === num ? num2text.word : accum;
    },
    ""
  );
}

export function wordToNum(word) {
  return _.reduce(
    num2text,
    (accum, num2text) => {
      return num2text.word === word && word.toLowerCase()
        ? num2text.num
        : accum;
    },
    -1
  );
}
