export const sumofPositiveNumbers=(num1,num2)=>{
  if(num1 <0 || num2 < 0){
    throw new Error("num1 or num2 is negative number");
  }
  return num1+num2;
}