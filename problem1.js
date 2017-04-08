//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

var num = 999;
var numArray=[];
var arraySpace = 0;

for(num = 999; num>0; num--)
{

  if (num % 3 === 0)
  {
   numArray[arraySpace]= num;
    arraySpace++;
  }
  else if (num % 5 === 0)
  {
    numArray[arraySpace] = num;
    arraySpace++;
   }
  
}
console.log(numArray);

var sumMultiples = 0;

for (arraySpace =0; arraySpace<numArray.length; arraySpace++)
{
  sumMultiples += numArray[arraySpace];
}

console.log(sumMultiples);
