import {sumofPositiveNumbers} from './example';

describe('when the arguments passed are positive numbers',()=>{
  test("when arguments are positive",()=>{
    expect(sumofPositiveNumbers(5,4)).toBe(9);
  });
});
describe('when the arguments passed are negative numbers',()=>{
  test("when arguments are negative",()=>{
    let err;
    try{
      sumofPositiveNumbers(5,-4)
    }catch(e){
      err=e;
    }
    expect(err).toBeDefined();
  });
})