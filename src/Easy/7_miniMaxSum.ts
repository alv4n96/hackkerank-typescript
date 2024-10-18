export function runMiniMaxSum() {
  let q1a: number[] = [140638725, 436257910, 953274816, 734065819, 362748590];

  miniMaxSum(q1a);
}

function miniMaxSum(arr: number[]): void {
  let lowNumber: number = 0,
    highNumber: number = 0;

  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (i != 0) {
      highNumber += arr[i];
    }
    if (i != arr.length - 1) {
      lowNumber += arr[i];
    }
  }

  console.log(`${lowNumber} ${highNumber}`);
}
