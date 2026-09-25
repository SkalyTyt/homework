const numbers = [5, 7, 2, 9, 1, 8, 3, 4, 12];

function analyzeArr(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  let avg = sum / arr.length;

  return {
    min: min,
    max: max,
    avg: avg
  };
}

console.log(analyzeArr(numbers));