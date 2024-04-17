//Fibonacci

// O(2^n)
const fibNative = (n) => {
  if (n <= 1) return n
  return fibNative(n - 1) + fibNative(n - 2)
}

// O(n)
const fibEffective = (n) => {
  // O(n)
  const arr = []
  arr[0] = 0
  arr[1] = 1

  // n = 2 => 1 iteration
  // n = 3 => 2 iteration
  // n = 4 => 3 iteration
  // n = 5 => 4 iteration

  // O(n + n) => O(2n) => O(n)
  for (i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

// console.log(fibNative(5))
console.log(fibEffective(100))

//Memoization

// O(2^n)
const fibNativeMemoization = (n, mem) => {
  if (mem[n] !== -1) return mem[n]
  if (n <= 1) return n
  const result = fibNativeMemoization(n - 1, mem) + fibNativeMemoization(n - 2, mem)
  mem[n] = result
  return result
}

const n = 100
const mem = new Array(n + 1).fill(-1)
console.log(fibNativeMemoization(n, mem))
