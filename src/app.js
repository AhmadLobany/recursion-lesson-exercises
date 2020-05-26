/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(num) {

  if(num<=1) return 1;

  return num*findFactorial(num-1)

}

//Exercise 2
const reverseString = function(str) {

  if(str.length==1) return str[0]

  return str[str.length-1] += reverseString(str.slice(0,str.length-1))
}

//Exercise 3


const swap = function(arr1,arr2) {
  if(arr1.length==0) {
      arr2.reverse()
      return;
  }
  arr2.push(arr1.pop())
  swap(arr1,arr2)
}


const stack1 = [1, 2, 3]
const stack2 = []


const swapStacks = function(stack1,stack2) {
  if(stack1.length==0) {
      return;
  }
  stack2.push(stack1.pop())
  swap(stack1,stack2)
}


swapStacks(stack1, stack2)
console.log(stack1) //[]
console.log(stack2) //[1, 2, 3]








/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }