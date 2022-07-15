/* 
  Example
  Input: s = "MCMXCIV"
  Output: 1994 
*/

function romanToInt(s: string): number {
  const romInInts: any = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let acumulator: number = 0;
  for (let x = 0; x < s.length; x++) {
    if (x + 1 < s.length && romInInts[s[x]] < romInInts[s[x + 1]]) {
      acumulator -= romInInts[s[x]];
    } else {
      acumulator += romInInts[s[x]];
    }
  }
  return acumulator;
}
