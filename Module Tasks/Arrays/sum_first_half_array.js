function sumFirstHalfArray(arr) { 
  if (arr.length === 0) { return 0 } 
  let sum = 0 
  for (let i = 0; i < Math.floor(arr.length / 2); i++) { 
    sum += arr[i] } 
  return sum 
}
