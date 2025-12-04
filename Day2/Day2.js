// Code for Day 2: Gift Shop
// Problem: https://adventofcode.com/2025/day/2
// let sum = 0;
let sums = 0;

const getInput = async () => {
  const res = await fetch("./Day2.txt");
  const data = await res.text();
  const input = data.split(",");

  //   for (let range of input) {
  //     getCodePart1(range);
  //   }

  for (let range of input) {
    getCodePart2(range);
  }

  console.log("sum", sums);
};

function getCodePart1(range) {
  const nums = range.split("-");
  const start = parseInt(nums[0]);
  const end = parseInt(nums[1]);

  for (let i = start; i <= end; i++) {
    if (i.toString().length % 2 === 0) {
      let num = i.toString();
      if (num[0] === num[num.length / 2]) {
        let first = num.slice(0, num.length / 2);
        let second = num.slice(num.length / 2);
        if (first === second) sums += parseInt(i);
      }
    }
  }
}

function getCodePart2(range) {
  const nums = range.split("-");
  const start = parseInt(nums[0]);
  const end = parseInt(nums[1]);

  // Get divisors of a number to see how many chunks make up the number
  // Egs: 824824824 has 9 digits, so either:
  // 1 digit repeated 9 times
  // 3 digits repeated 3 times
  // 9 digits repeated 1 time -> Invalid since not repetition

  for (let i = start; i <= end; i++) {
    // first get divisors
    if (checkIsInvalidNumber(i)) {
      sums += i;
    }
  }
}

function checkIsInvalidNumber(n) {
  const s = n.toString();
  const len = s.length;

  for (let d = 1; d <= len / 2; d++) {
    if (len % d !== 0) continue;

    // first we get the subset pattern
    // this is like 'building up' a sliding-window
    let pattern = s.slice(0, d);
    let ok = true;

    // be sure to move by d positions
    for (let pos = d; pos < len; pos += d) {
      // then we check the other patterns from the dth position, and see if they match the pattern
      // we're comparing this window with our original window from the top
      if (s.slice(pos, pos + d) !== pattern) {
        ok = false;
        break;
      }
    }
    // if all the sub-patterns match
    if (ok) return true;
  }

  // if there is no repeating pattern
  return false;
}
