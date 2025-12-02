// Code for Day 1: Secret Entrance
// Problem: https://adventofcode.com/2025/day/1
let count = 0;
let val = 50;

const getInput = async () => {
  const res = await fetch("./Day1.txt");
  const data = await res.text();
  const input = data.split("\n");

  // for (let code of input) {
  //   getCodePart1(code);
  // }

  for (let code of input) {
    getCodePart2(code);
  }

  console.log(count);
};

function getCodePart1(op) {
  let dir = op[0]; // Either L or R
  let rotates = parseInt(op.slice(1)); // Rest of the one or two digits

  // First we rotate:
  if (dir === "L") {
    val -= rotates;
  } else {
    val += rotates;
  }

  if (val >= 100) val %= 100;
  if (val < 0) {
    val %= 100;
    if (val < 0) val += 100;
  }

  // Then check for base case -> val === 0
  if (val === 0) count += 1;
}

function getCodePart2(op) {
  let dir = op[0]; // Either L or R
  let rotates = parseInt(op.slice(1)); // Rest of the one or two digits

  const orientation = dir === "L" ? -1 : 1;
  // literally rotating through each of the numbers
  for (let i = 0; i < rotates; i++) {
    val += orientation;

    // we hit the case to 'reset'
    if (val === 100) {
      val = 0;
    } else if (val === -1) {
      val = 99;
    }

    // base case
    if (val === 0) count += 1;
  }
}
