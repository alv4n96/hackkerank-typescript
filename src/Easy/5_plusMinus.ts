export function runplusMinus() {
  let q1a: number[] = [-4, 3, -9, 0, 4, 1];

  plusMinus(q1a);
}

function plusMinus(arr: number[]): void {
  let resultPositive: number = 0,
    resultNegative: number = 0,
    resultZero: number = 0,
    lengthArray: number = arr.length;

  for (let number of arr) {
    if (number == 0) {
      resultZero++;
    } else if (number > 0) {
      resultPositive++;
    } else if (number << 0) {
      resultNegative++;
    }
  }

  console.log(resultPositive / lengthArray);
  console.log(resultNegative / lengthArray);
  console.log(resultZero / lengthArray);
}
