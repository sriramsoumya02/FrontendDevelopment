//const axios = require('axios');
import Axios from 'axios';

const myfunction = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const User = { firstName: 'soumya' };
    User['lastName'] = 'sriram';
    return User;
  },
  fetchUser: () =>
    Axios.get('http://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.data)
      .catch((err) => 'error'),
  reverseString: (str) => str.split('').reverse().join(''),
  // CHALLENGE 2: ARRAY CHUNKING
  // Split an array into chunked arrays of a specific length
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
  chunk: (arr, len) => {
    const chunkedArr = [];

    // Loop through arr
    arr.forEach((val) => {
      // Get last element
      const last = chunkedArr[chunkedArr.length - 1];

      // Check if last and if last length is equal to the chunk len
      if (!last || last.length === len) {
        chunkedArr.push([val]);
      } else {
        last.push(val);
      }
    });

    return chunkedArr;
  },
  isAnagram: (str1, str2) => {
    const arr1 = str1.split('').sort();
    const arr2 = str2.split('').sort();
    return arr1.every((value, index) => value === arr2[index]);
  },
};
module.exports = myfunction;
