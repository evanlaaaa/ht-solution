function crispyDollop(num) {
  // Edge case when num is below 10
  if (num < 10) {
    return -1;
  }

  //convert num into array
  const numArr = String(num).split("").map(Number);

  let i = numArr.length - 2;
  while (i >= 0 && numArr[i] >= numArr[i + 1]) {
    i--;
  }

  if (i === -1) {
    return -1;
  }

  let j = numArr.length - 1;
  while (numArr[j] <= numArr[i]) {
    j--;
  }

  //es6 swapping item position in array
  [numArr[i], numArr[j]] = [numArr[j], numArr[i]];

  const frontNumArr = numArr.slice(0, i+1);
  const afterPivotArr = numArr.slice(i+1).sort();

  return Number([frontNumArr.join(""), afterPivotArr.join("")].join(""));
}