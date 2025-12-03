// Code for Day 2: Gift Shop
// Problem: https://adventofcode.com/2025/day/2
// let sum = 0;
let sums = 0;

const getInput = async () => {
  const res = await fetch("./Day2.txt");
  const data = await res.text();
  const input = data.split(",");

  for (let range of input) {
    getCodePart1(range);
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
