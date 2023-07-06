// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Solution 1
function noBoringZeros(x) {
    let a = `${x}`.split('');
    for(let i = a.length -1; i >= 0; i--){
      if (a[i] == 0){
          a.pop()
      }else{
          break
      }
    }
  return Number(a.join(''))
  }

// Solution 2
function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
      n = n / 10
    }
    return n
  }