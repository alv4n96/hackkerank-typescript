export function runcompareTriplets() {
  let q1a: number[] = [5, 6, 7];
  let q2b: number[] = [3, 6, 10];

  console.log(compareTriplets(q1a, q2b));
}

function compareTriplets(a: number[], b: number[]): number[] {
  let result: [number, number] = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result[0] += 1;
    } else if (a[i] < b[i]) {
      result[1] += 1;
    }
  }

  return result;
}
