export function runStaircase() {
  let q1a: number = 3;

  staircase(q1a);
}

function staircase(n: number): void {
  let theStars: string = "";
  for (let i = 1; i <= n; i++) {
    theStars = "";
    for (let j = n; j >= 1; j--) {
      //   console.log(`j = ${j},i = ${i}`);
      if (j > i) {
        theStars += " ";
      } else {
        theStars += "#";
      }
    }
    console.log(theStars);
  }
}
