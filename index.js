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
            console.log('nextStop1', nextStop)
        }
        console.log('nextStop2', nextStop, stations.length - 1)

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

// console.log('minStops', minStops(stations, 400))

// const items = [{w: 4, v: 20}, {w: 3, v: 18}, {w: 2, v: 14}]
// const w = 7

function fractionalKnapsack(items, w) {
    const sortedItems = items.sort((a, b) => a.v / b.v).reverse()

    let weightSoFar = 0
    let valueSoFar = 0
    let currentItem = 0

    while(currentItem < sortedItems.length && weightSoFar < w) {
        if(weightSoFar < sortedItems[currentItem].w) {

            weightSoFar += sortedItems[currentItem].w
            valueSoFar += sortedItems[currentItem].v
        } else {
            // valueSoFar += (((w - weightSoFar) / sortedItems[currentItem].w)  * sortedItems[currentItem].v)

            const maxWeight = w - weightSoFar

            const maxValue = sortedItems[currentItem].v / maxWeight

            valueSoFar += maxValue

            weightSoFar = w
        }
        currentItem++
    }


    return valueSoFar
}

// console.log(fractionalKnapsack(items, w))


function binarySearch(a, key) {
    let low = 0
    let high = a.length - 1

    const sortA = a.sort((a, b) => a - b)
    
    while (low <= high) {
        let middle = Math.floor((low + high) / 2)

        if(key < sortA[middle]) {
            high = middle - 1
        } else if(key > sortA[middle]) {
            low = middle + 1
        } else {
            return middle
        }

    }

    return -1
}

const a = [-1, 4, 13, 6, 2, 11, 12, 4, 1, 8, 9, 10]
const f = 9

// console.log(binarySearch(a, f))

function rob(nums) {
  if(nums.length === 0)  return 0

  if(nums.length === 1) return nums[0]

  const dp = Array(nums.length)

  dp[0] = nums[0]
  dp[1] = nums[1]

  for(let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
  }

  return dp[nums.length - 1]
}

// const nums = [4, 11, 10, 1, 2, 8, 5]

// console.log(rob(nums))

function hIndex(citations) {
  let n = citations.length

  for(let hIndex = 1; hIndex <= n; hIndex++) {
    let count = 0

    for(let i = 0; i < n; i++) {

      if(citations[i] >= hIndex) {

        count++
      }
    }
    if(count < hIndex) {
      return hIndex - 1
    }
  }
  return n
}

function hIndex1(citations) {
  let n = citations.length

  let counts = new Array(n + 1).fill(0)

  for(let citation of citations) {
    if(citation >= n) {
      counts[n]++
    } else {
      counts[citation]++
    }
  }

  let pos = 0

  for(let i = 0; i <= n; i++) {
    for(let j = 0; j < counts[i]; j++) {
      citations[pos] = i
      pos++
    }
  }


  return hIndex(citations)
}

let citations = [3, 0, 1, 7, 1, 6]

// console.log(hIndex(citations))

console.log(hIndex1(citations))