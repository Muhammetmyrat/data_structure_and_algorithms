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
// console.log(fibEffective(100))

//Memoization

// O(n)
const fibNativeMemoization = (n, mem) => {
  if (mem[n] !== -1) return mem[n]
  if (n <= 1) return n
  const result = fibNativeMemoization(n - 1, mem) + fibNativeMemoization(n - 2, mem)
  mem[n] = result
  return result
}

const n = 100
const mem = new Array(n + 1).fill(-1)
// console.log(fibNativeMemoization(n, mem))


const arr = [3, 1, 5, 9, 9, 7]

function getMaxNumberInArray(arr) {
    const arrSorted = arr.sort()

    let result = ''

    for(i = arrSorted.length - 1; i >= 0; i--) {
        result += arrSorted[i]
    }

    return result
}

// console.log(getMaxNumberInArray(arr));

const stations = [0, 200, 375, 550, 750, 950]

function minStops(stations, capacity) {
    let result = 0
    let currentStop = 0

    while(currentStop < stations.length - 1) {
        let nextStop = currentStop

        while(nextStop < stations.length - 1 && stations[nextStop + 1] - stations[currentStop] <= capacity) {
            nextStop++
            console.log('nextStop1', nextStop);
        }
        console.log('nextStop2', nextStop, stations.length - 1);

        if(nextStop === currentStop) {
            return -1
        }

        if(nextStop < stations.length - 1) {
            result++
        }

        currentStop = nextStop
    }

    return result
}

console.log('minStops', minStops(stations, 400))
