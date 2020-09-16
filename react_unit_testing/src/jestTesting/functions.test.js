//const { isAnagram } = require('./functions');
//const myfunction = require('./functions');
import Myfunction from './functions';

beforeEach(() => console.log('before each'));
afterEach(() => console.log('after each'));
beforeAll(() => console.log('before all')); //before all the tests
afterAll(() => console.log('after all'));
const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

test('adds 2 numbers', () => {
  expect(Myfunction.add(2, 2)).toBe(4);
});

test('adds 2+2 not 5', () => {
  expect(Myfunction.add(2, 2)).not.toBe(5);
});

test('it should be null', () => {
  expect(Myfunction.isNull()).toBeNull();
});

test('it should falsy', () => {
  expect(Myfunction.checkValue(0)).toBeFalsy();
  expect(Myfunction.checkValue(null)).toBeFalsy();
  expect(Myfunction.checkValue(undefined)).toBeFalsy();
});

test('it should Trusy', () => {
  expect(Myfunction.checkValue(1)).toBeTruthy();
  expect(Myfunction.checkValue([])).toBeTruthy();
  expect(Myfunction.checkValue(true)).toBeTruthy();
});

test('test User', () => {
  expect(Myfunction.createUser()).toStrictEqual({
    firstName: 'soumya',
    lastName: 'sriram',
  });
});

test('test should be under 1600', () => {
  expect(Myfunction.add(800, 700)).toBeLessThan(1600);
  expect(800 + 800).toBeGreaterThanOrEqual(1600);
  expect(800 + 900).toBeGreaterThan(1600);
});

//reges
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
  expect('team').not.toMatch(/I/i); // case in sensitive
});

//Arrays
test('admin should be in userName', () => {
  const userNames = ['John', 'soumya', 'Rishi', 'admin'];
  expect(userNames).toContain('admin');
});

//promise
test('name should be  Leanne Graham', () => {
  expect.assertions(1); //certain no. of assertions should be called
  return Myfunction.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

//async await
test('Async name should be  Leanne Graham', async () => {
  expect.assertions(1); //certain no. of assertions should be called
  const data = await Myfunction.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});

test('Reverse String to be defined', () => {
  expect(Myfunction.reverseString).toBeDefined();
  expect(Myfunction.reverseString('abc')).toEqual('cba');
});
test('Chunk Array String to tested', () => {
  expect(Myfunction.chunk).toBeDefined();
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  expect(Myfunction.chunk(numbers, 2)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ]);
});
test('Anagram to be tested', () => {
  expect(Myfunction.isAnagram).toBeDefined();
  expect(typeof Myfunction.isAnagram).toEqual('function');
  expect(Myfunction.isAnagram('elbow', 'below')).toBeTruthy();
  expect(Myfunction.isAnagram('Hello', 'Hi')).toBeFalsy();
});
