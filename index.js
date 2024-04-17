//Fibonacci

const fibNative = (n) => {
  if (n <= 1) return n
  return fibNative(n - 1) + fibNative(n - 2)
}

const fibEffective = (n) => {
  const arr = []
  arr[0] = 0
  arr[1] = 1

  for (i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

// console.log(fibNative(5))
console.log(fibEffective(100))

//Memoization

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
