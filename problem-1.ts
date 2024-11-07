function sumArray(param: number[]): number {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum += param[i];
  }
  return sum;
}

const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
