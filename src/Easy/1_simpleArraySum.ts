export function runSimpleArraySum() {
  let q1: number[] = [23, 12];
  let q2: number[] = [1, 2, 3, 4, 10, 11];

  console.log(simpleArraySum(q1));
  console.log(simpleArraySum(q2));
}

function simpleArraySum(ar: number[]): number {
  let result: number = 0;

  for (let item of ar) {
    result += item;
  }

  return result;
}
