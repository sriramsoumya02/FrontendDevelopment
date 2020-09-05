/*
Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:

If 25-30 then grade A(excluding 25 including 30)
If 20-25 then grade B
If 15-20 then grade C
If 10-15 then grade D
If 5-10 then grade E
If 0-5 then grade F

*/

function getGrade(score) {
  let grade;
  // Write your code here
  grade = 'FEDCBA'[Math.ceil(score / 5) - 1];
  return grade;
}

/*
First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
javascriptloops
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s

*/
function vowelsAndConsonants(s) {
  var vowels = s.match(/[aeiou]/gi).join('\n');
  var others = s.match(/[^aeiou]/gi).join('\n');
  console.log(vowels.concat('\n', others));
}

/*
second largest in array
2 3 6 6 5==>o/p5
*/
function getSecondLargest(nums) {
  // Complete the function
  return Array.from(new Set(nums)).sort(function (a, b) {
    return b - a;
  })[1];
}
/*
Complete the reverseString function; it has one parameter, . You must perform the following actions:

Try to reverse string  using the split, reverse, and join methods.
If an exception is thrown, catch it and print the contents of the exception's  on a new line.
Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
*/
function reverseString(s) {
  try {
    // Can be chained, but it damages readability
    console.log(s.split('').reverse().join(''));
  } catch (e) {
    console.log(e.message); // Use .message, or you'll get more than expected.
    console.log(s);
  }
}
/*
Complete the isPositive function below. It has one integer parameter, A. If the value of A is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

If A is , throw an Error with  Zero Error.
If A  is negative, throw an Error with  Negative Error.
*/
function isPositive(a) {
  if (a == 0) throw Error('Zero Error');
  if (a < 0) throw Error('Negative Error');

  return 'YES';
}

/*
Complete the function in the editor. It has two parameters: a  and b It must return an object modeling a rectangle that has the following properties: rectangular width length area perimeter
*/
function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a + b);
  this.area = a * b;
}
/*
Complete the function in the editor. It has one parameter: an array, a , of objects. Each object in the array has two integer properties denoted by x and y. The function must return a count of all such objects o in array a that satisfy o.x=o.y .
*/
function getCount(objects) {
  var count = 0;
  for (var i = 0; i < objects.length; i++) {
    if (objects[i].x == objects[i].y) {
      count++;
    }
  }
  return count;
}

/*
Create a Polygon class that has the following properties:

A constructor that takes an array of integer values describing the lengths of the polygon's sides.
A perimeter() method that returns the polygon's perimeter.
Locked code in the editor tests the Polygon constructor and the perimeter method.

// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
console.log(triangle.perimeter());
*/
class Polygon {
  constructor(arr) {
    this.arr = arr;
  }
  perimeter() {
    var perim = 0;
    for (var i = 0; i < this.arr.length; i++) {
      perim += this.arr[i];
    }
    return perim;
  }
}

/*
We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

Add an area method to Rectangle's prototype.
Create a Square class that satisfies the following:
It is a subclass of Rectangle.
It contains a constructor and no other methods.
It can use the Rectangle class' area method to print the area of a Square object.
Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.
*/
Rectangle.prototype.area = function () {
  return this.h * this.w;
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(w) {
    super();
    this.w = w;
    this.h = w;
  }
}
/*
The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

Complete the function in the editor so that it does the following:

Finds the initial values of s1 and s2  by plugging the area and perimeter values into the formula:
s= (P(+/-)sqrt(p2-16a))4
where a is the rectangle's area and p is its perimeter.
Creates an array consisting of a and p and sorts it in ascending order.
Returns the sorted array.
*/
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  let a = expressions[0];
  let p = expressions[1];
  let c = Math.sqrt(p * p - 16 * a);
  // console.log("p + Math.sqrt((p * p):" + (p + Math.sqrt((p * p) - (16 * a))) / 4);
  return [(p + c) / 4, (p - c) / 4].sort();
}
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  return nums.map((num) => (num % 2 ? num * 3 : num * 2));
}
/*
We define S to be a sequence of distinct sequential integers from 1 to N; in other words,S=
{1,2,3,4...} . We want to know the maximum bitwise AND value of any two integers, a and b (where a<b), in sequence  that is also less than a given integer,k .

Complete the function in the editor so that given n and k , it returns the maximum a&b < k.
*/
function getMaxLessThanK(n, k) {
  let max_anb = 0;
  for (let b = n; b > 0; b--) {
    for (let a = b - 1; a > 0; a--) {
      if ((a & b) < k && (a & b) > max_anb) {
        max_anb = a & b;
      }
    }
  }
  return max_anb;
}
/*
Given a date string, d , in the format MM/DD/YYYY, find and return the day(Sunday) name for that date.
*/
function getDayName(dateString) {
  let day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let dayName = new Date(dateString).getDay();
  // Write your code here
  return day[dayName];
}

/*
Complete the function in the editor below by returning a RegExp object,re , that matches any string s  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.
*/
function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */

  let re = /^([aeiou]).*\1$/;

  /*
   * Do not remove the return statement
   */
  return re;
}

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */
  let re = /^([MDE]r|Mr?s)\.[A-Za-z]+$/;

  /*
   * Do not remove the return statement
   */
  return re;
}
/*
Sample Input 0

102, 1948948 and 1.3 and 4.5
Sample Output 0

102
1948948
1
3
4
5
*/

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */

  let re = /\d+/g;
  /*
   * Do not remove the return statement
   */
  return re;
}
/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}

('use strict');

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');
  main();
});

function readLine() {
  return inputString[currentLine++];
}

//hash set
('use strict');

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');
  main();
});

function readLine() {
  return inputString[currentLine++];
}

('use strict');

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');
  main();
});

function readLine() {
  return inputString[currentLine++];
}

class StaffList {
  constructor(collection) {
    this.collection = [];
  }
  contains(name) {
    let index = this.collection.findIndex((ele) => ele.name === name);
    return index >= 0;
  }
  add(name, age) {
    let obj = { name: name, age: age };
    if (age > 20 && !this.contains(name)) {
      this.collection.push(obj);
    } else if (age <= 20) {
      throw 'Error: Staff member age must be greater than 20';
    } else {
      throw 'Already existed';
    }
  }
  remove(name) {
    if (this.contains(name)) {
      this.collection = this.collection.filter((obj) => obj.name != name);
      return true;
    }
    return false;
  }
  getSize() {
    return this.collection.length;
  }
  //add your code
}

//
('use strict');

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

async function getTeams(year, k) {
  // write your code here
  // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>
  const https = require('https');
  const options = {
    hostname: 'whatever.com',
    port: 443,
    path:
      'https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=' +
      year +
      '&page=1',
    method: 'GET',
  };

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.end();
}
