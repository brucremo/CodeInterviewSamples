// Naive
// O(n^2)
export function getNthFibN2(n: number): number {
  // 2 & 1 are base cases so return them
  // Otherwise iterate until the fib is reached
  return n == 2 ? 1 : n == 1 ? 0 : getNthFibN2(n - 1) + getNthFibN2(n - 2);
}

// Best
// O(n)
export function getNthFibN(n: number) {
  let previousFib: [number, number] = [0, 1]; // -> 3rd fib which equals 1
  let currentFib: number = 3; //Start from fib = 2

  while (currentFib <= n) {
    // Calculate next fib sequence based on current fib
    let nextFib: number = previousFib[0] + previousFib[1];
    previousFib[0] = previousFib[1];
    previousFib[1] = nextFib;
    currentFib++;
  }

  return n > 1 ? previousFib[1] : previousFib[0];
}
