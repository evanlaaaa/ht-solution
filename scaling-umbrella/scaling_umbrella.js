function scalingUmbrella(array) {
  const n = array.length;
  const result = [];

  for (let i = 0; i < Math.floor(n / 2); i++) {
    // Top
    for (let x = i; x < n; x++) {
      result.push(array[i][x]);
    }

    // Right
    for (let y = i+1; y < n - i; y++) {
      result.push(array[y][n-i-1]);
    }

    // Bottom
    for (let x = n-i-1; x > i; x--) {
      result.push(array[n-i-1][x]);
    }

    // Left
    for (let y = n-i-1; y > i; y--) {
      result.push(array[y][i]);
    }
  }

  // Add the middle element if the array'size is odd
  if (n % 2 != 0) {
    result.push(array[Math.floor(n / 2)][Math.floor(n / 2)]);
  }

  return result;
}