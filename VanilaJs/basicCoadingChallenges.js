//coding Interview
//https://www.fullstack.cafe/blog/javascript-code-interview-questions
//Given a string, reverse each word in the sentence
//For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG
function reverseWord(s) {
  let t = s.split('').reverse().join('');
  return t.split(' ').reverse().join(' ');
}
reverseWord('abcd efgh jkkhkhkjhk1');
// Implement enqueue and dequeue using only two stacks
class Queue {
  constructor() {
    this.stack1 = [];
    this.size = 0;
  }
  enque(ele) {
    this.stack1[this.size] = ele;
    this.size++;
    return ele;
  }
  deque() {
    if (this.size > 0) {
      let res = this.stack1[0];
      for (let i = 1; i < this.size; i++) {
        this.stack1[i - 1] = this.stack1[i];
      }
      this.size--;
      console.log(this.stack1);
      return res;
    } else return -1;
  }
}
var q = new Queue();
console.log(q.enque(1));
console.log(q.enque(2));
console.log(q.enque(3));
console.log(q.deque());
console.log(q.enque(4));
console.log(q.deque());
console.log(q.enque(5));
console.log(q.enque(6));
console.log(q.deque());
//Write a "mul" function which will properly when invoked as below syntax.
//console.log(mul(2)(3)(4)); // output : 24
//console.log(mul(4)(3)(4)); // output : 48
function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
var mul2 = mul(2);
var mul3 = mul2(3);
console.log(mul3(4));
//how to know param is array or not
function isArray(param) {
  if (typeof param == 'string') {
    console.log(param + ' -> String');
  } else if (Object.prototype.toString.call(param) == '[object Array]') {
    console.log(param + ' -> Array');
  } else {
    console.log(param + ' -> Not an Array');
  }
}
var y = [1, 2, 3, 4];
var z = 'ahga';
var x = 2;
isArray(x);
isArray(y);
isArray(z);
//How would you use a closure to create a private counter?
class counter {
  constructor() {
    this.count = 0;
  }
  increment = () => {
    this.count++;
    return this.count;
  };
  decrement = () => {
    this.count--;
    return this.count;
  };
}
var c1 = new counter();
console.log(c1.increment());
console.log(c1.increment());
console.log(c1.decrement());
console.log(c1.increment());
console.log(c1.decrement());
console.log(c1.decrement());
console.log(c1.increment());
//duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
function dublicate(arr) {
  return arr.concat(arr);
}
/*
Provide some examples of non-bulean value coercion to a boolean one Provide some examples of non-bulean value coercion to a boolean one
116 JavaScript Interview Questions  JavaScript  116  Mid
Answer
The question is when a non-boolean value is coerced to a boolean, does it become true or false, respectively?

The specific list of "falsy" values in JavaScript is as follows:

"" (empty string)
0, -0, NaN (invalid number)
null, undefined
false
Any value that's not on this "falsy" list is "truthy." Here are some examples of those:

"hello"
42
true
[ ], [ 1, "2", 3 ] (arrays)
{ }, { a: 42 } (objects)
function foo() { .. } (functions)
*/
/*Given two strings, return true if they are anagrams of one another 
For example: Mary is an anagram of Army */
function isAnagram(first, second) {
  first = first.toLowerCase().split('').sort().join('');
  second = second.toLowerCase().split('').sort().join('');
  return first === second;
}

isAnagram('Mary', 'Army');
isAnagram('abcd', 'tgba');
//Question 14 see the website
//---
//Write a recursive function that performs a binary search
function binarySerach(low, high, arr, k) {
  if (low <= high) {
    mid = parseInt(low + (high - low) / 2);
    if (arr[mid] === k) {
      return mid;
    } else if (arr[mid] > k) {
      return binarySerach(low, mid - 1, arr, k);
    } else {
      return binarySerach(mid + 1, high, arr, k);
    }
  }
  return -1;
}

binarySerach(0, [1, 2, 3, 4, 5].length - 1, [1, 2, 3, 4, 5], 5);
binarySerach(0, [1, 2, 3, 4].length - 1, [1, 2, 3, 4], 5);
//what is the o/p of following
var x = 1;
var output = (function () {
  delete x;
  return x;
})();

console.log(output); //1
/* The output would be 1. The delete operator is used to delete the property of an object. Here x is not an object, but rather it's the global variable of type number. */

// 0.1+0.2 === 0.3 o/p: false;
/*
because
console.log(0.1+0.2)
0.30000000000000004
//https://medium.com/javascript-in-plain-english/why-0-1-0-2-0-3-in-javascript-d7e218224a72
*/

/* how to create private variable in javascript
https://css-tricks.com/implementing-private-variables-in-javascript/
*/
//speed is a private variable,
const CarModule = () => {
  let milesDriven = 0;
  let speed = 0;

  const accelerate = (amount) => {
    speed += amount;
    milesDriven += speed;
  };

  const getMilesDriven = () => milesDriven;

  // Using the "return" keyword, you can control what gets
  // exposed and what gets hidden. In this case, we expose
  // only the accelerate() and getMilesDriven() function.
  return {
    accelerate,
    getMilesDriven,
  };
};

const testCarModule = CarModule();
testCarModule.accelerate(5);
testCarModule.accelerate(4);
console.log(testCarModule.getMilesDriven());
//--another way
function CarModule() {
  let milesDriven = 0;
  let speed = 0;

  // In this case, we instead use the "this" keyword,
  // which refers to CarModule
  this.accelerate = (amount) => {
    speed += amount;
    milesDriven += speed;
  };

  this.getMilesDriven = () => milesDriven;
}

const testCarModule = new CarModule();
testCarModule.accelerate(5);
testCarModule.accelerate(4);
console.log(testCarModule.getMilesDriven());
//another way
class CarModule {
  /*
    milesDriven = 0; public
    speed = 0; public
  */
  constructor() {
    this.milesDriven = 0; //you can prefix with _ to improve readability _mileDriven
    this.speed = 0;
  }
  accelerate(amount) {
    this.speed += amount;
    this.milesDriven += this.speed;
  }
  getMilesDriven() {
    return this.milesDriven;
  }
}

const testCarModule = new CarModule();
testCarModule.accelerate(5);
testCarModule.accelerate(4);
console.log(testCarModule.getMilesDriven());
//very latest proposal-put a # before the name of a variable, and it becomes private. No extra structural changes needed.
class CarModule {
  //like this #speed = 0
  //like this #milesDriven = 0

  accelerate(amount) {
    // It's virtually impossible for this data to be
    // accidentally accessed.
    this.#speed += amount;
    this.#milesDriven += speed;
  }

  getMilesDriven() {
    return this.#milesDriven;
  }
}

const testCarModule = new CarModule();
testCarModule.accelerate(5);
testCarModule.accelerate(4);
console.log(testCarModule.getMilesDriven());
console.log(testCarModule.speed); //=> undefined -- we would need to access the internal keys to access the variable.
//Module Pattern design pattern
//https://coryrylan.com/blog/javascript-module-pattern-basics#:~:text=The%20Module%20Pattern%20is%20one,where%20only%20one%20instance%20exists.

/*
important architectural patters in js-https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know
design patterns in javascripts-https://medium.com/better-programming/javascript-design-patterns-25f0faaaa15
Interview Questions-https://www.codementor.io/@nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z
116-interview questions-https://www.fullstack.cafe/javascript
*/
