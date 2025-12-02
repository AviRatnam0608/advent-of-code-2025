// Code for Day 1: Secret Entrance
// Problem: https://adventofcode.com/2025/day/1
let count = 0;
let val = 50;

const getInput = async () => {
  const res = await fetch("./Day1.txt");
  const data = await res.text();
  const input = data.split("\n");

  for (let code of input) {
    getCode(code);
  }

  console.log(count);
};

function getCode(op) {
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
