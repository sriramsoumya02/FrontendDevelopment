/*
Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.)

(Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)

Since the answer may be large, return the answer modulo 10^9 + 7.

 

Example 1:

Input: n = 5
Output: 12
Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.
Example 2:

Input: n = 100
Output: 682289015
 

Constraints:

1 <= n <= 100
*/
var numPrimeArrangements = function (n) {
  const MOD = BigInt(1e9 + 7);
  let primeArray = new Array(n + 1);
  primeArray.fill(1);
  primeArray[0] = undefined;
  primeArray[1] = undefined;
  let len = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= len; i++) {
    if (primeArray[i]) {
      for (let j = i * 2; j <= n; j = j + i) {
        primeArray[j] = undefined;
      }
    }
  }
  let primes = primeArray.filter((num) => num).length;
  let max = primes > n - primes ? primes : n - primes;
  const factorials = [1n];
  for (let i = 1; i <= max; i++)
    factorials[i] = BigInt((factorials[i - 1] * BigInt(i)) % MOD);

  return (factorials[primes] * factorials[n - primes]) % MOD;
};

var maximumSum = function(arr) {
    // let maxSum=arr[0];
    // let sum=arr[0];
    // let deletions=0;
    // for(let i=1;i<arr.length;i++){
    //   for(let j=1;j<arr.length;j++){
    //     if(j!=i){
    //       sum=Math.max(sum+arr[j],arr[j]);
    //     }
    //   }
    //   maxSum=Math.max(maxSum,sum);
    // }
    // return maxSum;
    let max=arr[0];
    let sum=arr[0];
    let left=[];
    left[0]=sum;
    for(let i=1;i<arr.length;i++){
      left[i]=Math.max(left[i-1]+arr[i],arr[i]);
      max = Math.max(max, left[i]);
    }
    let right=[];
    right[arr.length-1]=arr[arr.length-1];
    for(let i=arr.length-2;i>=0;i--){
      left[i]=Math.max(left[i+1]+arr[i],arr[i]);
    }
    for(let j=1;j<arr.length-1;j++){
      max=Math.max(left[j-1]+right[j+1],max);
    }
    
    return max;
};
//[1,-4,-5,-2,5,0,-1,2] 
//[1,-3,-5,-2,5,5,4,6]
//[1,-4,-1, 4,6,1,1,2]
//[1, 1, 1, 1,1,6,7,
//[8,-1,6,-7,-4,5,-4,7,-6] 17