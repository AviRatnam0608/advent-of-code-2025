// Code for Day 3: Lobby
// Problem: https://adventofcode.com/2025/day/3
// let sum = 0;
let sums = 0;

const getInput = async () => {
  const res = await fetch("./Day3.txt");
  const data = await res.text();
  const input = data.split("\n");

  // for (let range of input) {
  //   getCodePart1(range);
  // }

  for (let range of input) {
    getCodePart2(range);
  }

  console.log("sum", sums);
};

function getCodePart1(range) {
  let tempmax = 0;
  //   if L >= R => Move R
  //   *Compare with curr max*
  //   if R > L => bring L to R

  let l = 0;
  let r = 1;

  while (r < range.length) {
    // Base case -> Compare the number made
    let l_num = parseInt(range[l]);
    let r_num = parseInt(range[r]);

    tempmax = Math.max(tempmax, l_num * 10 + r_num);
    if (l_num >= r_num) r++;
    if (l_num < r_num) {
      l = r;
      r += 1;
    }
  }

  sums += tempmax;
}

function getCodePart2(digitsLeft) {
  // use a stack to maintain the digits needed
  // if DigitsLeft > DigitsNeeded: We can compare and take the bigger digits
  // else: We have to take the remaining digits

  // The length of the number i am going through
  const digitsLeftLen = digitsLeft.length;
  const toKeep = 12;
  let toDrop = digitsLeftLen - toKeep;

  // DigitsNeeded will be my Stack
  let digitsNeeded = [];

  let i = 0;
  while (i < digitsLeftLen) {
    // while I can 'drop' some numbers (basicallt choose what I wanna push)
    // and I have at lesat one thing in my stack
    // and my top of the stack val is less than the incoming value
    while (
      toDrop > 0 &&
      digitsNeeded.length > 0 &&
      digitsNeeded[digitsNeeded.length - 1] < digitsLeft[i]
    ) {
      digitsNeeded.pop(); // remove the top, it will be replaced by a better val
      toDrop--; // since we 'dropped' a number now, we have one less opportunity to do so later
    }

    digitsNeeded.push(digitsLeft[i]);
    i++;
  }

  sums += parseInt(digitsNeeded.slice(0, toKeep).join(""), 10);
}
