// Code for Day 3: Lobby
// Problem: https://adventofcode.com/2025/day/3
// let sum = 0;
let sums = 0;

const getInput = async () => {
  const res = await fetch("./Day3.txt");
  const data = await res.text();
  const input = data.split("\n");

  for (let range of input) {
    getCodePart1(range);
  }

  // for (let range of input) {
  //   getCodePart2(range);
  // }

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
