// Import stylesheets
import './style.css';
import random from 'random';
import { ansArray } from './squaring-answes';
//

function between(min: number, max: number) {
  return random.int(min, max);
}

let nintyOdds = new Array();
let fiftyOdds = new Array();
const mainSquarGeneration = (count: number, status: string[]) => {
  let generationArr = new Array();
  for (let i = 0; i < count; ) {
    for (let j = 0; j < status.length; j++) {
      //initial settings
      const rule = status[j];
      const generator = squaringOdds(nintyOdds, fiftyOdds, rule);
      nintyOdds = generator.ninety;
      fiftyOdds = generator.fifty;
      generationArr.push(generator.generate);
      ///console.log(nintyOdds, fiftyOdds);
      i++;
    }
  }
  return generationArr;
};
const squaringOdds = (
  nintyOdds: number[],
  fiftyOdds: number[],
  squaringFor: string
) => {
  const ninety = [91, 92, 93, 94, 95, 96, 97, 98, 99];
  const fifty = [41, 42, 43, 44, 45, 46, 47, 48, 49];
  let copyOf = {
    ninety: nintyOdds,
    fifty: fiftyOdds,
    generate: {
      answers: [1, 1, 1, 1],
      squarNum: 1
    }
  };
  //console.log(copyOf);
  if (squaringFor === 'approximationTo50') {
    //console.log(fiftyOdds.length);
    if (fiftyOdds.length === 0) {
      copyOf.fifty = fifty;
    }
    const rand = between(0, copyOf.fifty.length - 1);
    const squarNum = copyOf.fifty[rand];
    copyOf.fifty.filter(value => value != squarNum);
    copyOf.generate.squarNum = squarNum;
    copyOf.generate.answers = ansArray(squarNum, squarNum);
    console.log(copyOf.fifty);
    return copyOf;
  } else if (squaringFor === 'approximationTo100') {
    if (nintyOdds.length === 0) {
      copyOf.ninety = ninety;
    }
    const rand = between(0, copyOf.ninety.length - 1);
    const squarNum = copyOf.ninety[rand];
    copyOf.ninety.filter(value => value != squarNum);
    console.log(copyOf.ninety)
    copyOf.generate.squarNum = squarNum;
    copyOf.generate.answers = ansArray(squarNum, squarNum);
    return copyOf;
  }
};
console.log(mainSquarGeneration(9, ['approximationTo100']));
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
