//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

var num = 0;
var sumMultiples = 0;

for(num = 0; num<1000; num++)
{

  if (num % 3 === 0 || num % 5 === 0)
  {
    sumMultiples += num;
    
  }
  
}

console.log(sumMultiples);
